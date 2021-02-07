<template>
  <div class="g-popup-container">
    <div class="modal-mask g-popup-mask" :class="[!modalAnimate]">
      <i class="fa fa-times btn-modal-close" @click="close"></i>
      <div class="modal-wrapper g-popup-centered">
        <div class="modal-container shadow border-none radius-2" :class="[modalAnimate]" @animationend="animationend">
          <div class="modal-body text-center">
            <!-- <div id="swiperId2" class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(img, index) in imageList" :key="index">
                  <img :src="img.src" :alt="img.alt" />
                </div>
              </div>
              <div id="swiper2_pagination" class="swiper-pagination"></div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

@Component({
  name: 'ShowImage',
})
export default class ShowImage extends Vue {
  @Prop({ default: [] }) private readonly imageList!: any[];

  private _swiper2: Swiper | null = null;
  private modalAnimate = 'modal-close';

  private mounted() {
    // this.initSwiper();
  }

  public show() {
    this.modalAnimate = 'modal-show';
  }

  private close(event: any) {
    this.modalAnimate = 'modal-close';
  }

  private animationend(event: any) {
    if (this.modalAnimate === 'modal-close') {
      event.currentTarget.style.opacity = 0;
      // close
    }
  }

  // Swiper초기화
  private initSwiper() {
    this._swiper2 = new Swiper('#swiperId2', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // If we need pagination
      pagination: {
        el: '#swiper2_pagination',
      },
    });
  }
}
</script>
<style lang="scss">
.swiper-container {
  width: 400px;
  height: 400px;
  img {
    width: 400px;
    height: 400px;
  }
}

// 전역 팝업 메니져 스타일시트 (BEGIN) ===========================
.g-popup-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  .g-popup-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    outline: 0;

    -ms-scroll-chaining: none;
    overscroll-behavior: none;
    overflow-y: auto;

    .btn-modal-close {
      position: absolute;
      font-size: 30px;
      right: 20px;
      top: 50px;
      color: #fff;
    }

    .modal-wrapper {
      position: relative;
      width: auto;
      margin: 0.5rem;
      pointer-events: none;

      .shadow {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
      }
      .radius-2 {
        border-radius: 0.5rem !important;
      }
      .border-none {
        border-width: 0 !important;
        border-style: solid;
        border-color: transparent;
      }

      .modal-show {
        -webkit-animation: fadeInDown 0.2s;
        animation: fadeInDown 0.2s;
      }
      .modal-close {
        -webkit-animation: fadeOutUp 0.2s;
        animation: fadeOutUp 0.2s;
      }
      @keyframes fadeOutUp {
        to {
          opacity: 0;
          transform: translateY(-100%);
        }
      }
      @keyframes fadeInDown {
        from {
          opacity: 0.3;
          transform: translateY(-100%);
        }
      }
      .modal-container {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 1.25em;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.3rem;
        outline: 0;
        .modal-header {
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: start;
          align-items: flex-start;
          -ms-flex-pack: justify;
          justify-content: space-between;
          padding: 1rem 1rem;
          border-bottom: 1px solid #fff;
          border-top-left-radius: calc(0.3rem - 1px);
          border-top-right-radius: calc(0.3rem - 1px);

          font-size: 1.875rem;
          font-weight: 600;
          color: #595959;
        }
        .modal-body {
          position: relative;
          -ms-flex: 1 1 auto;
          flex: 1 1 auto;
          padding: 1rem;
          pointer-events: auto;
          &.text-center {
            text-align: center !important;
          }

          font-size: 1.125em;
          color: #545454;
        }
        .modal-footer {
          border-top-color: #e4e9ee;
          background-color: #eff3f8;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex-pack: end;
          justify-content: flex-end;
          padding: 1rem;
          border-top: 1px solid #fff;
          border-bottom-right-radius: calc(1.3rem - 1px);
          border-bottom-left-radius: calc(1.3rem - 1px);
          &.bg-white {
            background-color: #fff !important;
          }
          &.justify-content-between {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
          }
          .rayui-styled {
            // margin: 0.3125em;
            padding: 0.625em 2em;
            box-shadow: none;
            font-weight: 500;
          }
          .rayui-styled.rayui-confirm {
            border: 0;
            border-radius: 0.25em;
            background: initial;
            background-color: #3085d6;
            color: #fff;
            font-size: 1.0625em;
          }
          .rayui-styled:not([disabled]) {
            cursor: pointer;
          }
        }
      }

      @media (min-width: 576px) {
        max-width: 500px;
        margin: 1.75rem auto;
      }
    }

    .g-popup-centered {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      min-height: calc(100% - 1rem);
    }
    .g-popup-centered::before {
      display: block;
      height: calc(100% - 3.5rem);
      height: -webkit-min-content;
      height: -moz-min-content;
      height: min-content;
      content: '';
    }
  }
  .g-popup-mask::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: calc(100% + 0.5rem);
    pointer-events: none;
  }
  .modal-default-button {
    appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(buttontext, rgb(170, 170, 170));
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(74, 74, 74));
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
    border-image: initial;
  }
}
// 전역 팝업 메니져 스타일시트 (END) ===========================
</style>
