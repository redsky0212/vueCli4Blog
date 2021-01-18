<template>
  <fnc-modal ref="modal">
    <div slot-scope="modal" class="gmw-popup dimmed" :class="[modal.class, {'has-one-btn': (btnFrmType === '1' || btnFrmType === '2')}]">
      <div ref="popupWrapper" class="gmw-popup-wrapper" role="alertdialog" aria-modal="true" aria-live="assertive" v-bind="_arias">
        <div class="default-image sd_s_ex" v-show="imgUrl">
          <img :src="imgUrl" alt="이미지" />
        </div>
        <div ref="title" class="title-area sd_s_ex" :class="{'title-empty': !popuTitl}">
          <h4 tabindex="0" class="title H4_B fc_m" v-html="popuTitl"></h4>
        </div>
        <div ref="contents" class="gmw-popup-cont P1_M_1 fc_m" v-bind="_attrs">
          <slot>
            <div class="default-cont" role="text" v-html="popuCn"></div>
          </slot>
        </div>
        <div class="gmw-popup-btn-area" v-if="btnFrmType === '1'">
          <rounded-button class="layer-btn btn56 P1_B_1 fc_s sd_m" :label="mvmtBtnNm" @click="link" />
        </div>
        <div class="gmw-popup-btn-area" v-else-if="btnFrmType === '2'">
          <rounded-button class="layer-btn btn56 P1_B_1 fc_s sd_m" :label="endBtnNm" @click="close" />
        </div>
        <div class="gmw-popup-btn-area" v-else-if="btnFrmType === '3'">
          <button class="gmw-popup-btn sd_s_ex ntm_click" @click="close">
            <span class="P1_M_1 fc_m_a48">{{ enBtnNm }}</span>
          </button>
          <button class="gmw-popup-btn sd_s_ex ntm_click" @click="link">
            <span class="P1_M_1 fc_m">{{ mvmtBtnNm }}</span>
          </button>
        </div>
        <div class="gmw-popup-btn-area" v-else-if="btnFrmType === '4'">
          <button class="gmw-popup-btn sd_s_ex ntm_click" @click="close">
            <span class="P1_M_1 fc_m">{{ enBtnNm }}</span>
          </button>
        </div>
      </div>
    </div>
  </fnc-modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class GmwPopup extends Vue {}

// import _ from 'lodash';
// import { Vue, Component, Prop, Mixins, Watch } from 'vue-property-decorator';
// import UiBase from '@/compoents/Ui/UiBase';
// import { IGmwPopupParams, IGmwPopup } from '@/types';
// import FncModal, { IFncModal } from './FncModal.vue';
// import { VNode } from 'vue';
// import { Primitive } from 'lodash';

// @Component({
//   components: {
//     FncModal,
//   },
//   mixins: {
//     AriaAttributeMixin,
//   },
// })
// export default class GmwPopup extends Mixins(UiBase, AriaAttributeMixin) implements IGmwPopup {
//   public readonly $refs!: {
//     modal: IFncModal;
//     popupWrapper: HTMLElement;
//     contents: HTMLElement;
//     linkBtn: HTMLElement;
//     closeBtn: HTMLElement;
//   }

//   private popuCn: string = '';
//   private popuTitl: string = '';
//   private btnFrmType: string = '';
//   private imgUrl: string = '';
//   private endBtnNm: string = '';
//   private endBtnLnkUrl: string = '';
//   private mvmtBtnNm?: string = '';
//   private btnLnkType?: string = '';
//   private btnLnkUrl?: string = '';

//   // BodyScrollLock에서 스크롤 핸들링 할 엘리먼트
//   private scrollTarget?: HTMLElement;
//   private promiseResolve!: any;

//   protected created() {
//     this.link = _.debounce(this.link, 1000, { leading: true, trailing: false });
//     this.close = _.debounce(this.close, 1000, { leading: true, trailing: false });
//   }

//   public isShown(): boolean {
//     const modal = this.$refs.modal;
//     return modal.isShown();
//   }

//   public async show( params: IGmwPopupParams ): Promise<boolean | string> {}
// }
</script>
