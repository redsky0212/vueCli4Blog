<template>
  <div class="pull-update-container">
    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class PullToUpdateClass extends Vue {}
</script>

<style lang="scss" scoped>
.pull-update-container {
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
}
</style>
