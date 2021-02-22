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
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title">
              이미지 지도에 마커 생성하기
            </h2>
          </header>
          <div class="panel-body">
            카카오맵의 지도 이미지를 이용하여 기본 핀 모양의 마커 이미지 표시 테스트<br />
            <div id="map3" style="width:100%;height:100px;"></div>
            <div style="padding-top:10px;">
              <pre class="prettyprint linenums">
const container = document.getElementById('map3'); //지도를 담을 영역의 DOM 레퍼런스

// 마커가 표시될 위치입니다
const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
// 마커를 생성합니다
const marker = new window.kakao.maps.Marker({
  position: markerPosition,
});
//지도를 생성할 때 필요한 기본 옵션
const options = {
  marker,
  center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};
this.mapInst3 = new window.kakao.maps.StaticMap(container, options); //이미지 지도 생성 및 객체 리턴</pre
              >
            </div>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title">
              지도마커, 이동막기, 줌막기, 만든마커사용
            </h2>
          </header>
          <div class="panel-body">
            이동막기, 줌막기 테스트<br />
            <div id="map4" style="width:100%;height:100px;"></div>
            <div id="result4"></div>
            <div style="padding-top:10px;">
              <pre class="prettyprint linenums">
const container = document.getElementById('map4'); //지도를 담을 영역의 DOM 레퍼런스
//지도를 생성할 때 필요한 기본 옵션
const options = {
  center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};
this.mapInst4 = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다
const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
// 마커를 생성합니다
const marker = new window.kakao.maps.Marker({
  position: markerPosition,
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(this.mapInst4);

// 마우스 드래그 지도 이동 막기
this.mapInst4.setDraggable(false);
// 줌기능 막기
this.mapInst4.setZoomable(false);
// 지도 클릭 이벤트
window.kakao.maps.event.addListener(this.mapInst4, 'click', (event: any) => {
  const latLng = event.latLng;
  alert(JSON.stringify(latLng));
});
// 지도 이동 이벤트
window.kakao.maps.event.addListener(this.mapInst4, 'dragend', () => {
  window.console.log('dragend');
});
// 지도 확대/축소 이벤트
window.kakao.maps.event.addListener(this.mapInst4, 'zoom_changed', () => {
  window.console.log('zoom_changed');
});
// 지도가 이동, 확대, 축소로 인해 지도영역이 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
window.kakao.maps.event.addListener(this.mapInst4, 'bounds_changed', () => {
  // 지도 영역정보를 얻어옵니다
  const bounds = this.mapInst4.getBounds();

  // 영역정보의 남서쪽 정보를 얻어옵니다
  const swLatlng = bounds.getSouthWest();

  // 영역정보의 북동쪽 정보를 얻어옵니다
  const neLatlng = bounds.getNorthEast();

  let message = '&lt;p&gt;영역좌표는 남서쪽 위도, 경도는  ' + swLatlng.toString() + '이고 &lt;br&gt;';
  message += '북동쪽 위도, 경도는  ' + neLatlng.toString() + '입니다 &lt;/p&gt;';

  const resultDiv = document.getElementById('result4');
  if (resultDiv) {
    resultDiv.innerHTML = message;
  }
});</pre
              >
            </div>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title">
              마커 다양하게 사용하기
            </h2>
          </header>
          <div class="panel-body">
            마커를 이용한 다양한 사용방법 테스트<br />
            <div id="map5" style="width:100%;height:400px;"></div>
            <div id="result5"></div>
            <div style="padding-top:10px;">
              <pre class="prettyprint linenums">
private map5Test() {
  const container = document.getElementById('map5'); //지도를 담을 영역의 DOM 레퍼런스
  //지도를 생성할 때 필요한 기본 옵션
  const options = {
    center: new window.kakao.maps.LatLng(37.498004414546934, 127.02770621963765), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };
  this.mapInst5 = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  // 커피숍 마커가 표시될 좌표 배열입니다
  const coffeePositions = [
    new window.kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
    new window.kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
    new window.kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
    new window.kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
    new window.kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
    new window.kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
    new window.kakao.maps.LatLng(37.49754540521486, 127.02546694890695),
  ];

  coffeePositions.forEach((item, index) => {
    if (index === 0) {
      this.setImgMarker('marker', item);
    } else {
      this.setImgMarker('dot', item);
    }
  });
}

private setImgMarker(type: string, latLng: any) {
  let w = 35;
  let h = 44;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  let markerImg = require('@/assets/marker/marker1.png');
  if (type === 'dot') {
    w = 16;
    h = 16;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    markerImg = require('@/assets/marker/marker2.png');
  }
  const imageSize = new window.kakao.maps.Size(w, h);
  let imageOptions = {
    spriteOrigin: new window.kakao.maps.Point(0, 0),
    spriteSize: new window.kakao.maps.Size(w, h),
    offset: null,
  };
  if (type === 'dot') {
    imageOptions = {
      spriteOrigin: new window.kakao.maps.Point(0, 0),
      spriteSize: new window.kakao.maps.Size(w, h),
      offset: new window.kakao.maps.Point(8, 8),
    };
  }

  const markerImageSrc = markerImg;
  const markerImage = new window.kakao.maps.MarkerImage(markerImageSrc, imageSize, imageOptions);
  const marker = new window.kakao.maps.Marker({
    position: latLng,
    image: markerImage,
  });
  marker.setMap(this.mapInst5);
  // 이미지 마커 클릭 이벤트
  window.kakao.maps.event.addListener(marker, 'click', (event: any) => {
    alert(latLng);
    // const latLng = event.latLng;
    // alert(JSON.stringify(latLng));
  });
}</pre
              >
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AsyncAwaitTest extends Vue {
  private mapInst: any;
  private mapInst2: any;
  private mapInst3: any;
  private mapInst4: any;
  private mapInst5: any;

  private mounted() {
    // 지도 테스트
    this.map1Test();
    this.map2Test();
    this.map3Test();
    this.map4Test();
    this.map5Test();

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

  private map3Test() {
    const container = document.getElementById('map3'); //지도를 담을 영역의 DOM 레퍼런스

    // 마커가 표시될 위치입니다
    const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
    // 마커를 생성합니다
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    //지도를 생성할 때 필요한 기본 옵션
    const options = {
      marker,
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    this.mapInst3 = new window.kakao.maps.StaticMap(container, options); //이미지 지도 생성 및 객체 리턴
  }

  private map4Test() {
    const container = document.getElementById('map4'); //지도를 담을 영역의 DOM 레퍼런스
    //지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    this.mapInst4 = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다
    const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
    // 마커를 생성합니다
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(this.mapInst4);

    // 마우스 드래그 지도 이동 막기
    this.mapInst4.setDraggable(false);
    // 줌기능 막기
    this.mapInst4.setZoomable(false);
    // 지도 클릭 이벤트
    window.kakao.maps.event.addListener(this.mapInst4, 'click', (event: any) => {
      const latLng = event.latLng;
      alert(JSON.stringify(latLng));
    });
    // 지도 이동 이벤트
    window.kakao.maps.event.addListener(this.mapInst4, 'dragend', () => {
      window.console.log('dragend');
    });
    // 지도 확대/축소 이벤트
    window.kakao.maps.event.addListener(this.mapInst4, 'zoom_changed', () => {
      window.console.log('zoom_changed');
    });
    // 지도가 이동, 확대, 축소로 인해 지도영역이 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    window.kakao.maps.event.addListener(this.mapInst4, 'bounds_changed', () => {
      // 지도 영역정보를 얻어옵니다
      const bounds = this.mapInst4.getBounds();

      // 영역정보의 남서쪽 정보를 얻어옵니다
      const swLatlng = bounds.getSouthWest();

      // 영역정보의 북동쪽 정보를 얻어옵니다
      const neLatlng = bounds.getNorthEast();

      let message = '<p>영역좌표는 남서쪽 위도, 경도는  ' + swLatlng.toString() + '이고 <br>';
      message += '북동쪽 위도, 경도는  ' + neLatlng.toString() + '입니다 </p>';

      const resultDiv = document.getElementById('result4');
      if (resultDiv) {
        resultDiv.innerHTML = message;
      }
    });
  }

  private map5Test() {
    const container = document.getElementById('map5'); //지도를 담을 영역의 DOM 레퍼런스
    //지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new window.kakao.maps.LatLng(37.498004414546934, 127.02770621963765), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
    this.mapInst5 = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 커피숍 마커가 표시될 좌표 배열입니다
    const coffeePositions = [
      new window.kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
      new window.kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
      new window.kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
      new window.kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
      new window.kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
      new window.kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
      new window.kakao.maps.LatLng(37.49754540521486, 127.02546694890695),
    ];

    coffeePositions.forEach((item, index) => {
      if (index === 0) {
        this.setImgMarker('marker', item);
      } else {
        this.setImgMarker('dot', item);
      }
    });
  }

  private setImgMarker(type: string, latLng: any) {
    let w = 35;
    let h = 44;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let markerImg = require('@/assets/marker/marker1.png');
    if (type === 'dot') {
      w = 16;
      h = 16;
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      markerImg = require('@/assets/marker/marker2.png');
    }
    const imageSize = new window.kakao.maps.Size(w, h);
    let imageOptions = {
      spriteOrigin: new window.kakao.maps.Point(0, 0),
      spriteSize: new window.kakao.maps.Size(w, h),
      offset: null,
    };
    if (type === 'dot') {
      imageOptions = {
        spriteOrigin: new window.kakao.maps.Point(0, 0),
        spriteSize: new window.kakao.maps.Size(w, h),
        offset: new window.kakao.maps.Point(8, 8),
      };
    }

    const markerImageSrc = markerImg;
    const markerImage = new window.kakao.maps.MarkerImage(markerImageSrc, imageSize, imageOptions);
    const marker = new window.kakao.maps.Marker({
      position: latLng,
      image: markerImage,
    });
    marker.setMap(this.mapInst5);

    // 이미지 마커 클릭 이벤트
    window.kakao.maps.event.addListener(marker, 'click', (event: any) => {
      alert(latLng);
      // const latLng = event.latLng;
      // alert(JSON.stringify(latLng));
    });
  }

  private onResizePanel() {
    this.mapInst.setCenter(new window.kakao.maps.LatLng(33.450701, 126.570667));
    this.mapInst.relayout();
  }
}
</script>
