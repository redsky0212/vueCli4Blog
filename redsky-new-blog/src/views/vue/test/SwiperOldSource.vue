<template>
  <div id="GmwStoreDetail" :class="['page', { scrollHidden: galleryState }]">
    <div :class="['gwm-store-detail-swiper', { zoom: galleryState }]">
      <button class="btn-zoom-close" ref="btnZoomClose" @click="closeGallery" :aria-hidden="galleryState ? 'true' : 'false'">
        <span class="hidden" :aria-hidden="galleryState ? 'false' : 'true'">터치 시 이미지 축소 됨</span>
        <icon-gmw-x />
      </button>
      <ui-swiper ref="swiperRef" :swiperOptions="swiperOptions" @click="zoomGallery" @slideChangeTransitionEnd="slideChangeTransitionEnd">
        <div class="swiper-slide" v-for="(img, index) in storeItem.IMG" :key="index">
          <span class="hidden">터치 시 이미지 확장 됨</span>
          <img :src="img.PATH_NM + img.THNL_FILE_NM" :alt="img.THNL_FILE_NM" :class="{ 'g-transition': isSwiperTransition }" />
        </div>
      </ui-swiper>
      <p class="paging swiper-pagination"></p>
      <span class="btnPrev swiper-button-prev"></span>
      <span class="btnNext swiper-button-next"></span>
    </div>
    <div ref="swiperMenuZoomRef" class="gwm-store-detail-swiper zoom-in-swiper"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Mixins, Ref, Watch } from 'vue-property-decorator';
import BaseViewMixin from '@/mixins/BaseViewMixin';

// Ui Component
import Swiper from 'swiper';
import UiSwiper, { LocalOptions } from '@/components/Ui/UiSwiper/swiper.vue';
import UiToast, { IUiToast } from '@/components/Ui/Popup/UiToast.vue';

// api관련
import { Action, State, namespace } from 'vuex-class';
const storeDetail = namespace('storeDetail');
import { IResPonseError } from '@/API/commonInterface';
import { StoreDetailActions } from '@/store/storeDetail/actionConstructor';
import { storeItem } from '@/API/storeDetail/interface';
import { IDATA } from '@/API/storeDetail/interface/storeItem';
import { StoreDetailMutations } from '@/store/storeDetail/mutations';

import { ActionList } from '@/store/actionConstructor';
import { updateBookmark } from '@/API/interface';

// 하위 컴포넌트
import GmwkMenuList from '@/views/storeDetail/components/GmwkMenuList.vue';

@Component({
  name: 'SwiperOldSource',
  components: {
    UiSwiper,
    GmwkMenuList,
    UiToast,
  },
})
export default class SwiperOldSource extends Mixins(BaseViewMixin) {
  // refs =========================================================
  @Ref('refToast') private readonly refToast!: IUiToast;
  @Ref('swiperRef') private readonly swiperRef!: Vue & LocalOptions;
  @Ref('btnZoomClose') private readonly btnZoomClose!: HTMLElement;

  // store data ===================================================
  @storeDetail.State('storeItem') private storeItem!: IDATA; // 가맹점 상세 데이타

  // Mutations ====================================================
  @storeDetail.Mutation(StoreDetailMutations.setStoreItem)
  private setStoreItem!: (data: any) => void;

  // action api ===================================================
  @storeDetail.Action(StoreDetailActions.storeItem)
  private getStoreItemApi!: (data: storeItem.IRequest) => Promise<storeItem.IResponse>;
  @Action(ActionList.updateBookmark)
  private updateBookmark!: (data: updateBookmark.IRequest) => Promise<updateBookmark.IResponse>;

  // 중간 생략 ........

  // ===========================================================================================
  // swiper에 transition을 적용할지 여부
  private isSwiperTransition = true;
  private galleryState = false;

  @Watch('galleryState')
  private changeGalleryState(val: boolean, oldVal: boolean) {
    if (val) {
      this.setDragEvent();
    } else {
      this.removeDragEvent();
    }
  }
  // swiper클릭 핸들러
  private zoomGallery() {
    this.galleryState = true;
    this.swiperRef.swiper.params.pagination.type = 'fraction'; // 숫자형태 페이징
  }

  // swiper 이미지 더보기 닫기 클릭 핸들러
  private closeGallery() {
    this.galleryState = false;
    this.swiperRef.swiper.params.pagination.type = 'bullets';
    (document.querySelector('.swiper-slide.swiper-slide-active img') as HTMLElement).style.transform = `translateY(0)`;
  }

  private slideChangeTransitionEnd() {
    this.isSwiperTransition = false;
    this.setDragEvent();
  }

  // 이미지 더보기 상태에서 현재 보고있는 이미지에 이벤트 등록하기
  private setDragEvent() {
    const zoomImg: HTMLElement = document.querySelector('.swiper-slide.swiper-slide-active img') as HTMLElement;
    if (this.galleryState) {
      zoomImg.addEventListener('touchstart', this._imgDragStart);
      zoomImg.addEventListener('touchmove', this._imgDragMove);
      zoomImg.addEventListener('touchend', this._imgDragEnd);
      zoomImg.addEventListener('mousedown', this._imgDragStart);
      zoomImg.addEventListener('mousemove', this._imgDragMove);
      zoomImg.addEventListener('mouseup', this._imgDragEnd);
      zoomImg.addEventListener('transitionend', this._imgTransitionEnd);
    } else {
      this.removeDragEvent();
    }
  }
  private removeDragEvent() {
    const zoomImg: HTMLElement = document.querySelector('.swiper-slide.swiper-slide-active img') as HTMLElement;
    zoomImg.removeEventListener('touchstart', this._imgDragStart);
    zoomImg.removeEventListener('touchmove', this._imgDragMove);
    zoomImg.removeEventListener('touchend', this._imgDragEnd);
    zoomImg.removeEventListener('mousedown', this._imgDragStart);
    zoomImg.removeEventListener('mousemove', this._imgDragMove);
    zoomImg.removeEventListener('mouseup', this._imgDragEnd);
    zoomImg.removeEventListener('transitionend', this._imgTransitionEnd);
  }
  private _imgTransitionEnd() {
    const elemArr: HTMLElement[] = (document.querySelectorAll('.swiper-slide img') as unknown) as HTMLElement[];
    elemArr.forEach((elem: HTMLElement, index: number) => {
      this.isSwiperTransition = false;
    });
  }
  private activeDrag: HTMLElement | null = null;
  private initX: any;
  private initY: any;
  private currentX: any;
  private currentY: any;
  private xOffset = 0;
  private yOffset = 0;
  private _imgDragStart(event: any) {
    if (event.type === 'touchstart') {
      this.initX = event.touches[0].clientX - this.xOffset;
      this.initY = event.touches[0].clientY - this.yOffset;
    } else {
      this.initX = event.clientX - this.xOffset;
      this.initY = event.clientY = this.yOffset;
    }
    this.activeDrag = document.querySelector('.swiper-slide.swiper-slide-active img') as HTMLElement;
  }
  private _imgDragMove(event: any) {
    if (this.activeDrag) {
      event.preventDefault();
      if (event.type === 'touchmove') {
        this.currentX = event.touches[0].clientX - this.initX;
        this.currentY = event.touches[0].clientY - this.initY;
      } else {
        this.currentX = event.clientX - this.initX;
        this.currentY = event.clientY - this.initY;
      }
      // 화면을 넘어가는지 체크
      if (event.touches[0].clientX < 0 || event.touches[0].clientY < 0 || event.touches[0].clientX > document.body.clientWidth || event.touches[0].clientY > document.body.clientHeight) {
        this.currentX = 0;
        this.currentY = 0;
        this.initX = 0;
        this.initY = 0;
        this.xOffset = 0;
        this.yOffset = 0;
        this._setDragTranslate(0, 0);
        this.activeDrag = null;
        return;
      }
      this.xOffset = this.currentX;
      this.yOffset = this.currentY;
      this._setDragTranslate(this.currentX, this.currentY);
    }
  }
  private _imgDragEnd(evet: any) {
    if (this.yOffset > 80 || this.yOffset < -80) {
      if (this.activeDrag) {
        this.isSwiperTransition = true;
      }
      this.$nextTick(() => {
        const elemArr: HTMLElement[] = (document.querySelectorAll('.swiper-slide.swiper-slide-active img') as unknown) as HTMLElement[];
        elemArr.forEach((elem: HTMLElement, index: number) => {
          elem.style.removeProperty('transform');
        });
      });
      this.closeGallery();
      window.console.log('=======================================> swiper 이미지 더보기 닫기:' + this.yOffset);
    } else {
      window.console.log('=======================================> swiper 이미지 더보기 원위치:' + this.yOffset);
    }
    this.currentX = 0;
    this.currentY = 0;
    this.initX = 0;
    this.initY = 0;
    this.xOffset = 0;
    this.yOffset = 0;
    this._setDragTranslate(0, 0);
    this.activeDrag = null;
  }
  private _setDragTranslate(xPos: number, yPos: number) {
    const init: any = '((100vh / 2) - (100vw / 2)) - 48px';

    if (this.activeDrag) {
      if (yPos === 0) {
        if (this.galleryState) {
          this.activeDrag.style.transform = `translateY(calc(${init}))`;
        } else {
          this.activeDrag.style.transform = `translateY(0)`;
        }
      } else {
        this.activeDrag.style.transform = `translateY(calc(${init} + ${yPos}px))`;
      }
    }
  }

  // 스크롤 시 swiper 이미지 zoom효과 관련 처리를 위한 함수
  private documentScrollEvent(type: boolean, handler: (event: Event) => void) {
    if (type) {
      document.addEventListener('scroll', handler, true);
    } else {
      document.removeEventListener('scroll', handler, true);
    }
  }
  // 스크롤 이벤트 핸들러
  private _bodyScrollHandler(event: Event) {
    // 캡처링으로 스크롤 대상을 찾음.
    if (document.scrollingElement && document.scrollingElement.scrollTop) {
      const sTop: number = document.scrollingElement.scrollTop;
      const target: HTMLElement = document.querySelector('.swiper-slide.swiper-slide-active') as HTMLElement;
      if (sTop < 40) {
        target.classList.remove('scaleUp');
      } else {
        target.classList.add('scaleUp');
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#GmwStoreDetail {
  padding-bottom: clac(109px + var(--safe-bottom));
  &.scrollHidden {
    overflow-y: hidden;
    width: 100%;
    height: calc(100vh - 48px - var(--safe-top) - var(--safe-bottom));
    padding: 0;
  }
  .gwm-store-detail-swiper {
    position: relative;
    width: 100%;
    height: auto;
    z-index: 9;
    .swiper-container {
      position: relative;
      top: 0;
      /deep/ .swiper-wrapper {
        .swiper-slide {
          &:nth-child(2n) {
            background-color: #ddd;
          }
          background-color: #ccc;
          min-height: 100px;
          height: auto;
          img {
            width: 100%;
            height: auto;
            top: 0;
            vertical-align: top;
            background-color: #ccc;
            // transform: translateY(0);
          }
        }
      }
    }
    /deep/.swiper-pagination {
      width: auto;
      height: 6px;
      padding: 0;
      text-align: center;
      bottom: 12px;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);
      .swiper-pagination-bullet {
        position: relative;
        display: inline-block;
        text-align: center;
        width: 6px;
        height: 6px;
        background-color: rgba(0, 0, 0, 0.2);
        background-color: var(--sd_m_a20);
        border-radius: 100px;
        margin: 0 3px;
        line-height: 0;
        vertical-align: top;
        opacity: 1;
        &:before {
          content: '';
          display: block;
          position: absolute;
          width: 1px;
          height: 1px;
          font-size: 0;
          line-height: 0;
          text-indent: -1000px;
          opacity: 0;
        }
        &.swiper-pagination-bullet-active {
          background-color: #000;
          background-color: var(--sd_m);
        }
      }
    }
    /deep/.swiper-button-prev,
    /deep/.swiper-button-next {
      display: block;
      top: 50%;
      width: 1px;
      height: 1px;
      line-height: 0;
      margin: 0;
      background: none;
      opacity: 0;
      z-index: 2;
      transform: translateY(-50%);
      &:after {
        content: '';
        font-size: 0;
      }
    }
    /deep/.swiper-button-prev {
      left: 0;
    }
    /deep/.swiper-button-next {
      left: 0;
    }
    .btnPlayPause {
      position: absolute;
      left: 0;
      top: 28px;
      width: 1px;
      height: 1px;
      line-height: 0;
      opacity: 0;
      z-index: 4;
    }
    .btn-zoom-close {
      position: fixed;
      right: 24px;
      top: calc(var(--safe-top) + 52px);
      width: 32px;
      height: 32px;
      display: block;
      opacity: 0;
      z-index: -1;
      /deep/ svg {
        width: 32px;
        height: 32px;
        g {
          path {
            stroke: #fff;
          }
        }
      }
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    &.zoom {
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1000;
      background-color: #000;
      background-color: var(--sd_m);
      transition: width 0.2s, height 0.2s, background-color 0.2s;
      .swiper-container {
        height: 100vh;
        transition: height 0.2s;
        /deep/ .swiper-wrapper {
          position: fixed;
          height: 100vh;
          top: 0;
          z-index: 11;
          background-color: #000;
          background-color: var(--sd_m);
          .swiper-slide {
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            z-index: 12;
            background-color: #000;
            background-color: var(--sd_m);
            transition: height 0.2s, background-color 0.2s;
            img {
              position: relative;
              top: 48px;
              z-index: 13;
              color: #fff;
              color: var(--sd_s);
              // transform: translateY(calc(((100vh / 2) - (100vw / 2)) - 48px));
              // transition: transform 0.2s cubic-bezier(0.6, 0.1, 0.2, 1);
              // transition-delay: 1s;
            }
          }
        }
      }
      /deep/.swiper-pagination {
        position: fixed;
        bottom: calc(var(--safe-bottom) + 48px);
        z-index: 2001;
        color: #fff;
        color: var(--sd_s);
        span {
          color: #fff;
          color: var(--sd_s);
        }
      }
      .btn-zoom-close {
        opacity: 1;
        z-index: 1001;
        transition-delay: 1s;
        transition: opacity 1s, z-index: 1s;
        /deep/ svg {
          width: 32px;
          height: 32px;
          g {
            path {
              stroke: #fff;
            }
          }
        }
      }
    }
  }

  /* 기타 화면 css */
  .reser-able-table {
    display: none;
  }

  .scaleUp {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  .swiper-slide-active {
    transition: all 0.5s
  }
  .g-transition {
    transition: transform 0.2s cubic-bezier(0.6, 0.1, 0.2, 1);
  }
}
</style>
