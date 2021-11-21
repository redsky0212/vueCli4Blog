<template>
  <div class="pull-update-container">
    <div class="pull-update-header" :style="{ height: `${pullDown.height}px` }">
      <div class="pull-update-content" :style="pullDownContentStyle"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface IPullDown {
  status: number;
  height: number;
  msg: string;
}
export interface IConfig {
  [indexd: string]: number;
}

@Component({
  components: {},
})
export default class PullToUpdateClass extends Vue {
  @Prop() readonly config!: IConfig;

  private pullDown: IPullDown = {
    status: 0,
    height: 0,
    msg: '',
  };

  private get pullDownContentStyle() {
    if (this.config) {
      return {
        bottom: `${(this.config.pullDownHeight - 40) / 2}px`,
      };
    } else {
      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
.pull-update-container {
  height: 100%;
  max-height: 100%;
  overflow-y: auto;

  &.pull-update-header {
    width: 100%;
    height: 0px;
    overflow: hidden;
    position: relative;
    background-color: #2c3133;
  }
}
</style>
