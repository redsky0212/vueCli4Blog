<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>KakaoMap을 이용하여 여러가지 테스트</strong></p>
    </blockquote>
    <div class="alert alert-danger">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      카카오맵 참조 API : <a href="https://apis.map.kakao.com/web/wizard/" target="_blank">https://apis.map.kakao.com/web/wizard/</a>
    </div>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title">
              기본 카카오맵 그리기
            </h2>
          </header>
          <div class="panel-body">
            카카오맵을 이용하여 기본 그리기 테스트<br />
            사용 API :
            <ul>
              <li><code>map.relayout()</code> : 화면사이즈 변경 시 리사이즈 시키기</li>
              <li><code>map.setCenter()</code> : 화면 중심좌표 셋팅하기</li>
            </ul>
            <div id="map" style="width:100%;height:300px;"></div>
            <div style="padding-top:10px;">
              <pre class="prettyprint linenums">
const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
//지도를 생성할 때 필요한 기본 옵션
const options = {
  center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

this.mapInst = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴</pre
              >
            </div>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title">
              기본 마커 생성하기
            </h2>
          </header>
          <div class="panel-body">
            카카오맵을 이용하여 기본 핀 모양의 마커 이미지 표시 테스트<br />
            <div id="map2" style="width:100%;height:100px;"></div>
            <div style="padding-top:10px;">
              <pre class="prettyprint linenums">
// 마커가 표시될 위치입니다
const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
// 마커를 생성합니다
const marker = new window.kakao.maps.Marker({
  position: markerPosition,
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(this.mapInst2);</pre
              >
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator';

@Component
export default class AsyncAwaitTest extends Vue {
  private mapInst: any;
  private mapInst2: any;

  private mounted() {
    // 지도 테스트
    this.map1Test();
    this.map2Test();

    window.addEventListener('resize', this.onResizePanel);

    window.prettyPrint();
  }
  private beforeDestroy() {
    window.removeEventListener('resize', this.onResizePanel);
  }

  private map1Test() {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    //지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    this.mapInst = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }

  private map2Test() {
    const container = document.getElementById('map2'); //지도를 담을 영역의 DOM 레퍼런스
    //지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    this.mapInst2 = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다
    const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
    // 마커를 생성합니다
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(this.mapInst2);
  }

  private onResizePanel() {
    this.mapInst.setCenter(new window.kakao.maps.LatLng(33.450701, 126.570667));
    this.mapInst.relayout();
  }
}
</script>
