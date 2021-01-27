<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>Vue 프로젝트를 다 구현한 뒤 서버에 배포하는 방법에 대해 설명.</strong></p>
    </blockquote>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              <strong>Vue CLI</strong>로 생성한 프로젝트 배포 방법
              <!-- <span class="text-danger">(사라질 예정)</span> -->
            </h2>
            <p class="panel-subtitle"><code>npm run build</code></p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>Vue CLI의 기본 설정된 빌드는 <code>npm run build</code>명령을 실행하면 <code>dist</code>폴더에 빌드된 자원이 생성됨</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">vue 프로젝트 package.json에 등록된 build부분.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
"scripts": {
  // ...
  "build": "vue-cli-service build",
  // ...
},</pre
                >
              </li>
              <li>
                <h4>
                  <strong>빌드 결과 자원의 폴더 위치를 변경 하고자 할때 설정.</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>vue.config.js</code>파일이 없으면 루트에 생성하여 아래 설정 코드를 추가한다.</span>
                  </li>
                  <li>
                    <a href="https://cli.vuejs.org/config/#vue-config-js" target="_blank">vue.config.js 설정 참조 url : https://cli.vuejs.org/config/#vue-config-js</a>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// vue.config.js
const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "./path")
   
   //   assetsDir: "./"
   //   asset 파일 위치 설정 
}</pre
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
