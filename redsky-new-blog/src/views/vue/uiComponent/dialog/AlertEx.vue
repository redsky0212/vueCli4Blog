<template>
  <div>Dialog Alert 예제</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'alertEx',
  components: {},
})
export default class AlertEx extends Vue {
  private mounted() {
    this.$rayui.alert('aaaaaa');
  }
}
</script>
