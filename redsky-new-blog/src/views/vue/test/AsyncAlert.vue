<template>
  <div>
    <gmw-popup ref="popup" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator';
// import { IGmwPopup, IGmwPopupParams, IGmwBottomLayer } from '@/types';
import GmwPopup from '@/components/modal/GmwPopup.vue';

interface IGmwPopupParams {
  locType: string;
}
interface IGmwPopup {
  show(params: IGmwPopupParams): Promise<boolean | string>;
}

@Component
export default class App extends Vue {
  // App.vue
  @Ref('popup') public readonly popup!: IGmwPopup;

  private created() {
    Vue.prototype.$app = this;
  }

  public async showManagedPopup(params: IGmwPopupParams): Promise<boolean | string> {
    // this.beginDisableBackKey('어떤팝업');
    try {
      let result: boolean | string = false;
      if (params.locType === 'C') {
        result = await this.popup.show(params);
      } else if (params.locType === 'B') {
        // result = await this.bottomLayer.show(params);
      }
      return result;
    } finally {
      // this.endDisableBackKey('어떤팝업');
    }
  }
}
</script>
