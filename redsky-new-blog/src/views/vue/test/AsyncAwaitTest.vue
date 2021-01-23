<template>
  <div>
    async await test
    <div id="map" style="width:500px;height:400px;"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AsyncAwaitTest extends Vue {
  private result = '';

  private async mounted() {
    // 지도 테스트
    this.mapTest();

    console.log('시작!');
    await this.call();
    console.log('끝!');

    console.log('window.alert 시작!');
    // window.alert('window alert 시작!');
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

  private mapTest() {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    //지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }
}
</script>
