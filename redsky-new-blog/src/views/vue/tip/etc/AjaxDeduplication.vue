<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>
          Ajax 중복요청, 중복클릭, 중복호출 막는 여러가지 방법들,<br />
          중복요청 방지가 필요한 이유는 중복결제, 같은내용 추가/등록, 순간적인 두번클릭 등을 막기 위함.
        </strong>
      </p>
    </blockquote>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title"><strong>상태 변수</strong>를 만들어 ajax 완료되기 전에는 요청 차단 방법.</h2>
            <p class="panel-subtitle"><code></code></p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>기본 원리 소스</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">상태 변수에 따라 ajax요청을 막거나 시작하는 기본 원리</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
var isRun = false;
function abcde() {
  // request가 진행중 일때는 request를 막음.
  if (isRun == true) { 
    return; 
  }
  
  isRun = true;
  
  $.ajax({ ... },
    success : function(datas) {
      isRun = false;
      ... 
    }
  );
}</pre
                >
              </li>
              <li>
                <h4>
                  <strong>axios의 상태변수 체크 후 처리(작업 중)</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>...</code>...</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// axios request interceptor
axios.interceptors.request.use(function (config) {
  // config를 이용한 상태변수 체크
  if (requestCache.isCached(config)) {
    const skipXHRError = new Error('skip')
    skipXHRError.isSkipXHR = true
    skipXHRError.request = config
    throw skipXHRError
  } else {
    // 처음이면 상태변수에 값 넣고 유지.
    if (requestCache.shouldThrottle(config)) {
      requestCache.waitForResponse(config)
    }
    return config;
  }
});

// This should be the *first* response interceptor to add
axios.interceptors.response.use(function (response) {
  requestCache.setCachedResponse(response.config, response)
  return response;
}, function (error) {
  /* recover from error back to normality
   * but this time we use an cached response result
   **/
  if (error.isSkipXHR) {
    return requestCache.getCachedResponse(error.request)
  }
  return Promise.reject(error);
});</pre
                >
              </li>
              <li>
                <h4>
                  <strong>실행 모드에 따른 빌드 방법</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">Vue CLI에는 기본적으로 <code>development</code>, <code>production</code>, <code>test</code> 세가지 모드가 있다.</span>
                  </li>
                  <li>
                    <span class="text-dark">그 외 사용자가 정의한 모드를 추가할 수 있다.</span>
                  </li>
                  <li>
                    <a href="https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code" target="_blank"
                      >모드 설정 공식문서 참조 url : https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code
                    </a>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// package.json 에 사용자정의 모드를 추가한 모습
"scripts": {
  // .. 생략
  
  // local 로컬 모드 추가
  "local": "vue-cli-service serve --mode local",
  // blingbling 제가 임의로 만든 블링블링 모드 입니다.
  "blingbling": "vue-cli-service serve --mode blingbling",
  // staging 이름의 build 모드
  "stagingbuild": "vue-cli-service build --mode staging",
    
   // .. 생략
},</pre
                >
                <ul>
                  <li>
                    <span class="text-dark">실행 모드에 따라 해당 이름의 환경변수 파일을 루트에 <code>.env.[모드이름]</code>으로 생성한다.</span>
                  </li>
                  <li>
                    <span class="text-dark">기본 제공되는 환경변수는 <code>NODE_ENV</code>, <code>BASE_URL</code>이다.</span>
                  </li>
                  <li>
                    <span class="text-dark">사용자 정의 환경변수는 <code>VUE_APP_생성할 변수이름 = 넣어줄 값</code> 형식으로 규칙을 지켜야 한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// 환경변수 확인, 접근방법
process.env.BASE_URL
process.env.NODE_ENV
// 사용자 정의 환경변수는 
process.env.VUE_APP_생성변수이름

// 실제 사용 예제
// /root/vue.config.js
module.exports = {
    devServer: {
        // 사용자 정의 환경 변수에서 VUE_APP_PORT가 있으면 사용하고
        // 없으면 3000 포트로 개발서버를 실행합니다.
        port: process.env.VUE_APP_PORT || 3000
    }
}</pre
                >
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'buildTip',
})
export default class BuildTip extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>
