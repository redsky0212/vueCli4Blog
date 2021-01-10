<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>Vue.js를 사용한 프로젝트의 다양한 초기 셋팅 방법에 대하여 정리.</strong></p>
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
              Vue CLI 4, Vue 2.X, TypeScript, Class방식, vue-router, Vuex, vue-property-decorator, eslint, prettier
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle">현대카드 앱 에서 진행했던 방식.</p>
            <p class="panel-subtitle">현대카드에서는 <code>tslint</code>를 사용하고 <code>prettier</code>는 사용하지 않음.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                vue CLI 4를 global로 설치한다.<br />
                참고로 현대카드는 MAC PC를 지급, 설치할때 sudo를 앞에 붙여줘야했고 pc권한 로그인 한 후 설치 시에는 외부망으로 진행했음.
                <pre class="prettyprint">npm i @vue/cli -g</pre>
              </li>
              <li>
                vue 설치 (vue가 있어야 디버그시 DebTools에서 보이기 됨), global로 설치해도 되지만 해당 프로젝트에 설치해도 됨.
              </li>
              <li>
                <span>프로젝트 Root폴더를 생성하고 Vue CLI로 프로젝트를 생성한다.</span><br />
                <span class="text-warning">현대카드는 vue2.X 사용</span><br />
                <span class="text-warning">프로젝트를 vue3.X으로 생성하면 새로운 api와 코딩방식이 좀 달라지므로 유의한다.</span>
                <pre class="prettyprint">
// cd 생성폴더로 이동
vue create 생성프로젝트명
// vue2.X, vue3.X에 따라 코딩 방식과 지원되는 vue api가 다르므로 생성 시에는 메뉴얼 모드로 설치 진행한다.</pre
                >
              </li>
              <li>
                TypeScript, Class방식으로 코딩 진행을 하게 되므로 아래 내용 추가 설치.
                <pre class="prettyprint">npm i vue-class-component vue-property-decorator</pre>
              </li>
              <li>
                vue cli로 설치했을경우 기본 src폴더를 alias "@"를 사용하여 루트로 바로 사용할 수 있다.<br />
                <span class="text-warning">가끔 VSCode IDE상에서 @/...부분에 빨간줄이 뜨는 경우가 있다. 이것은 해당 프로젝트가 IDE상에서 루트로 불러오지 않은 경우일때 이다.</span>
                <pre class="prettyprint">예시) import HelloComponent from '@/components/HelloComponent.vue';</pre>
              </li>
              <li>
                기본 alias를 변경하고자 할때는 아래와 같이 vue.config.js를 고쳐서 사용할 수 있다.
                <pre class="prettyprint">
// 아래 처럼 "@"가 아닌 "~"(물결 표시) 같은 별칭을 추가해서 사용할 수 있다.
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve("src"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
// 또는 아래와 같이 적용할 수도있다.
// 상단의 변수에 경로를 적어 따로 추가해서 사용할 수도 있습니다.
const path = require("path");
const vueSrc = "./src";

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, vueSrc),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
  outputDir: "./express/public",
};</pre
                >
              </li>
              <li>
                scss 사용 설정
                <ul>
                  <li>
                    vue-loader 때문에 SFC에서 scss를 사용할 수 있는것. 따라서 모듈 설치.
                    <pre class="prettyprint">npm i -D node-sass sass-loader</pre>
                  </li>
                  <li>
                    scss 사용 예제
                    <pre class="prettyprint">
// SFC에서 사용
&lt;style land="scss"&gt;
$backgroundColor: red;

.className: {
  background: $backgroundColor;
}
&lt;/style&gt;

// 전역범위에서 사용방법
// 하지만 이렇게 하면 계속 파일마다 반복적으로 넣어줘야한다.
&lt;style land="scss"&gt;
@import "@/style/variables";
@import "@/style/mixin";
@import "@/style/functions";
&lt;/style&gt;

// 전역 범위에서 사용방법 vue.config.js설정으로 적용
// 이렇게 하면 모든 파일에서 다 전역으로 쓸 수 있다.
// vue.config.js
module.exports = {
  css: {
      loaderOptions: {
          sass: {
              data: `
                  @import "@/styles/_variables.scss";
                  @import "@/styles/_mixins.scss";
              `
          }
      }
  }
}
// 전역 설정된 scss사용방법 내용아래
// style.variables.scss
$bgColor: red;
// .vue
&lt;script lang="scss"&gt;
  .className {
      background: $bgColor;
  }
&lt;/script&gt;</pre
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              Nuxt.js2, Vue 2.X, TypeScript사용안함, eslint, prettier
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle"><a href="http://hyun0238.dothome.co.kr/redsky/devil" target="_blank">Nuxt 개인블로그</a>에서 사용한 방식</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>프로젝트 폴더 생성</li>
              <li>npm init</li>
              <li>
                .gitignore 파일 생성 (git 업로드 제외목록 작성)
                <ul>
                  <li>ignore 해야할 목록을 알려주는 사이트 <a href="https://www.gitignore.io/" target="_blank">https://www.gitignore.io/</a></li>
                </ul>
              </li>
              <li>
                github에 repository 생성하여 현재 폴더를 git remote 시킴.
                <pre class="prettyprint">
git init
git add .
git commit -m '첫 프로젝트 생성'
git remote add origin 깃주소</pre
                >
              </li>
              <li>내용 추가....<a href="http://hyun0238.dothome.co.kr/redsky/devil" target="_blank">Nuxt 개인블로그</a></li>
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
export default class ThePreferences extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>
