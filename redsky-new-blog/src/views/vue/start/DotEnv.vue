<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>node.js로 개발된 프로젝트에서 전역으로 필요한 여러 <code>환경변수</code>들을 관리하는 것.</strong>
      </p>
      <pre class="prettyprint">npm i --save dotenv</pre>
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>깃허브 등에 오픈소스로 공개할때 중요한 계정정보들은 소스 내에 하드코딩 하지않고, 외부 환경변수 파일로 만들고, .gitignore을 통해서 제외하면 안전하다.</strong>
    </div>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              기본 사용방법
            </h2>
            <p class="panel-subtitle">node.js 프로젝트 루트경로에 .env파일 생성하여 환경변수를 관리한다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>루트경로에 .env파일 생성</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><strong>다양한 환경변수값을 아래와 같이 작성할 수 있다.</strong></span>
                  </li>
                </ul>
                <pre class="prettyprint">
SERVER_PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password</pre
                >
              </li>
              <li>
                <h4>
                  <strong>환경변수값 접근하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">
                      <strong><code>process.env</code>키워드를 사용하여 미리 정의한 환경변수에 접근할 수 있다.</strong>
                    </span>
                  </li>
                </ul>
                <pre class="prettyprint">
process.env.DB_HOST
process.env.DB_USER
process.env.DB_PASSWORD

console.log('sample server is listening to port ' + process.env.SERVER_PORT);</pre
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title"><strong>Vue프로젝트</strong>에서 사용방법</h2>
            <!-- <p class="panel-subtitle">node.js 프로젝트 루트경로에 .env파일 생성.</p> -->
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>실행모드(Vue CLI)</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"> Vue CLI에서는 기본적으로 3개의 모드<code>뷰 애플리케이션이 실행되는 모드</code>가 기본으로 있습니다. </span>
                    <pre class="prettyprint">
1) development
2) production
3) test</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark">Vue CLI 4에서 설정된 .env내용</span>
                    <pre class="prettyprint">
.env 파일(확장자 아님)은 모든 경우에 적용되고,
.env.local은 기본 .gitignore 설정에서 포함되어 있어 git push 시 제외됩니다.
.env.production은 배포 패키징 시에만 적용되며,
.env.delveopment은 개발 패키징 시에만 적용되죠.</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark">기본 실행모드 외 <code>사용자 정의 모드</code>를 추가할 수 있다.</span><br />
                    <span class="text-dark">아래는 'local'모드와 'blingbling'모드를 추가한 모습.</span>
                    <pre class="prettyprint">
// 파일 경로: /root/package.json
"scripts": {
   // .. 생략
  
   // local 로컬 모드 추가
  "local": "vue-cli-service serve --mode local",
   // blingbling 제가 임의로 만든 블링블링 모드 입니다.
  "blingbling": "vue-cli-service serve --mode blingbling",
   // .. 생략
},</pre
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>실행모드(Vue CLI가 아닌 webpack.config에서) 사용방법</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">기본 빌드 <code>mode</code>는 <code>development</code>이다.</span>
                    <ul>
                      <li><strong>vue-cli-service serve</strong>의 기본모드는 'development'</li>
                      <li><strong>vue-cli-service build</strong>의 기본모드는 'production'</li>
                    </ul>
                  </li>
                  <li>
                    <span class="text-dark">webpack 4+ 에서는 <code>mode</code>옵션을 통해 프로덕션 모드로 변경할 수 있다.</span>
                    <pre class="prettyprint">
module.exports = {
  mode: 'production',
}.</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark">
                      webpack 3과 그 이전 버전 에서는
                      <a href="https://webpack.js.org/plugins/define-plugin/" target="_blank">DefinePlugin</a>
                      을 사용.
                    </span>
                    <pre class="prettyprint">
var webpack = require('webpack')
module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}</pre
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>환경변수</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">
                      <strong><code>기본정의된 환경변수</code>는 <code>NODE_ENV, BASE_URL</code>가 있다.</strong>
                    </span>
                    <pre class="prettyprint">
// NODE_ENV
// 앱이 실행되는 실행모드 값
process.env.NODE_ENV로 접근.

// BASE_URL
// vue.config.js에 설정된 publicPath값
process.env.BASE_URL로 접근.</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark">
                      <strong><code>사용자정의 환경변수</code></strong>
                    </span>
                    <br />
                    <span>루트경로에 <code>.env.[실행모드]</code>, 파일을 생성</span>
                    <pre class="prettyprint">
// 루트에 .env.local파일을 생성한다.
NODE_ENV=local
BASE_URL=/
VUE_APP_COFFEE=americano</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark">
                      <strong>사용자정의 변수는 중요한 생성 규칙을 지켜야 한다.</strong>
                    </span>
                    <pre class="prettyprint">
// 환경변수 생성 규칙
VUE_APP_생성할변수이름 = 넣어줄값</pre
                    >
                  </li>
                </ul>
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

@Component
export default class DotEnv extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>
