<template>
  <div>async await test</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AsyncAwaitTest extends Vue {
  private result = '';

  private async mounted() {
    console.log('시작!');
    await this.call();
    console.log('끝!');

    console.log('window.alert 시작!');
    window.alert('window alert 시작!');
    console.log('window.alert 끝!');
  }

  private async call() {
    console.log('call함수 들어옴!');
    const result = await this.show();
    console.log('show함수 나옴! =====>' + result);
  }

  private show() {
    console.log('show함수 들어옴!');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('show함수에서 넘겨준 값.');
      }, 1000);
    });
  }
}
</script>
