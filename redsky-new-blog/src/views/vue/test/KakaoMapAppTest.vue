<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>KakaoMap App 호출 테스트</strong></p>
    </blockquote>
    <div class="alert alert-danger">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      카카오맵 앱호출(Android) 참조 API : <a href="https://apis.map.kakao.com/android/guide/#urlscheme_route" target="_blank">https://apis.map.kakao.com/android/guide/#urlscheme_route</a><br />
      카카오맵 앱호출(ios) 참조 API : <a href="https://apis.map.kakao.com/ios/guide/#urlscheme_route" target="_blank">https://apis.map.kakao.com/ios/guide/#urlscheme_route</a><br />
      참조 : <a href="https://bacassf.tistory.com/51" target="_blank">https://bacassf.tistory.com/51</a>
    </div>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title">
              ios 앱 호출 테스트
            </h2>
          </header>
          <div class="panel-body">
            모바일 웹 에서 카카오맵 앱 열기 테스트<br />
            사용 API :
            <ul>
              <li><code>...</code> : ...</li>
            </ul>
            <div class="well well-sm">
              <button @click="callIosApp">kakaomap app호출(ios)</button>
              <button @click="callAndroidApp">kakaomap app호출(android)옛날꺼</button><button @click="callAndroidAppLink">kakaomap app호출(android)그냥링크</button><br /><br />
              <button @click="installAppIos">kakaomap 설치이동(ios)</button>
              <button @click="installAppAndroid">kakaomap 설치이동(android)옛날꺼</button>
              <button @click="installAppAndroidLink">kakaomap 설치이동(android)그냥링크</button>
            </div>
            <div id="map" style="width:100%;height:300px;"></div>
            <div style="padding-top:10px;">
              <pre class="prettyprint linenums">
// 앱 호출 예제소스
var userAgent = navigator.userAgent;
var visiteTm = ( new Date() ).getTime();
if(userAgent.match(".*Android.*")){ //안드로이드폰
  // https://developer.chrome.com/multidevice/android/intents 
  // 앱이 있으면 앱 실행, 없으면 마켓 이동
  location.href = 'intent://main_web#Intent;scheme=myappandroi;package=com.myappandroi.m;end';
  //location.href = 'myappandroi://main_web'; // 안드로이드 앱 실행
} else if(userAgent.match(".*iPhone.*") || userAgent.match(".*iPad.*")){
  //아이폰
  setTimeout( function () { 
    if ( ( new Date() ).getTime() - visiteTm &lt; 3000 ) { // 앱스토어 이동
      location.href = "https://itunes.apple.com/app/id365494029";
    }
  } ,2500 );
  setTimeout( function () { // 앱실행
    location.href = "myappandroi://";
  } ,0 );
}</pre
              >
              <pre class="prettyprint linenums">
// 앱 호출 예제소스
var userAgent = navigator.userAgent;
if(userAgent.match(".*Android.*")){ //안드로이드폰
  // 앱이 없으면 마켓 이동
  location.href = 'market://details?id=packageName';
  //location.href = 'kakaomap://route?sp=37.537229,127.005515&amp;ep=37.4979502,127.0276368&amp;by=CAR'; // 안드로이드 앱 실행
} else if(userAgent.match(".*iPhone.*") || userAgent.match(".*iPad.*")){
  //아이폰 앱스토어 이동
  location.href = "https://itunes.apple.com/app/id365494029";
  // 앱 실행
  location.href = "kakaomap://route?sp=37.537229,127.005515&amp;ep=37.4979502,127.0276368&amp;by=CAR";
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
  private mounted() {
    window.prettyPrint();
  }

  private callIosApp() {
    // 아이폰
    window.location.href = 'kakaomap://route?ep=37.4979502,127.0276368&by=CAR';
  }
  private callAndroidApp() {
    // 안드로이드
    setTimeout(() => {
      const iframe = document.createElement('iframe');
      iframe.style.visibility = 'hidden';
      iframe.src = 'kakaomap://route?ep=37.4979502,127.0276368&by=CAR';
      document.body.appendChild(iframe);
      document.body.removeChild(iframe); // back 호출시 캐싱될 수 있으므로 제거
    }, 1000);
  }
  private callAndroidAppLink() {
    // 안드로이드
    window.location.href = 'kakaomap://route?ep=37.4979502,127.0276368&by=CAR';
  }
  // ios설치이동
  private installAppIos() {
    window.location.href = 'http://itunes.apple.com/app/id304608425';
  }
  // android설치이동
  private installAppAndroid() {
    // 안드로이드 마켓이동 (카카오맵)
    // window.location.href = 'market://details?id=net.daum.android.map';
    const b = new Date() as Date;
    setTimeout(() => {
      window.location.href = 'intent://scan/#Intent;scheme=kakaomap;package=net.daum.android.map;end';
    }, 500);
  }
  // android설치이동 그냥링크
  private installAppAndroidLink() {
    // 안드로이드 마켓이동 (카카오맵)
    window.location.href = 'market://details?id=net.daum.android.map';
  }

  // private goInstagramApp() {
  //   if (window.CommonJsInterface) {
  //     const name = '';
  //     const appPackageName = 'com.instagram.android';
  //     const scheme = `instagram://tag?name=${name}`;
  //     this.$commonJsInterface.launchScheme(appPackageName, scheme);
  //   } else if (window.webkit && window.webkit.messageHandler && window.webkit.messageHandler.commonJsInterface) {
  //     const link = `instagram://tag?name=${name}`;
  //     const installLink = 'https://itunes.apple.com/kr/app/id389801252';
  //     this.$commonJsInterface.launchApp(link, installLink);
  //   }
  // }
}
</script>
