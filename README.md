# vue 2, cli 4, nuxt X, 
* vue.js 끝장내기 실무 강좌 이 후 블로그 작성 예정 
## vue cli 4를 사용한 환경설정.
* vue cli가 설치되어있지 않다면 설치한다.
```
// cli가 설치되어있지 않다면 설치한다.
npm i @vue/cli -g
```
* vue프로잭트를 생성한다.
```
// vue 프로젝트 생성
vue create 생성프로젝트 폴더명
// vue 2, vue 3 선택 여부에 따라 코딩 방식과 지원되는 vue api가 다르기 때문에 상황에 맞게 메뉴얼로 선택하여 설치한다.
```
  - 여기서는 vue2, typescript, class방식코딩, eslint+prettier선택.
  - 프로잭트를 vue3으로 생성하면 새로운 api와 코딩방식이 좀 달라지므로 유의한다.
* typescript, class방식으로 진행할것이므로 아래 라이브러리를 추가 설치한다.
```
npm i vue-class-component vue-property-decorator
```
* vue cli로 설치했을경우 기본 src폴더를 alias "@"를 사용하여 루트로 바로 사용할 수 있다.
```javascript
import HelloComponent from '@/components/HelloComponent.vue';
```
* 기본 alias를 변경하고자 할때는 아래와 같은 방법으로 고쳐서 사용할 수 있다.
```javascript
// 아래 처럼 "@"가 아닌 "~"(물결 표시) 같은 별칭을 추가해서 사용할 수 있습니다.
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
};
```
* scss 사용 설정
  - vue-loader 덕분에 scss를 SFC에서 사용할 수 있다.
  - scss관련모듈설치
    - npm i -D node-sass sass-loader
  - 사용코드예제
  ```css
  // SFC에서 사용
  <style land="scss">
  $backgroundColor: red;
  
  .className: {
    background: $backgroundColor;
  }
  </style>

  // 전역 법위에서 사용방법
  // 하지만 이렇게 하면 계속 파일마다 반복적으로 넣어줘야한다.
  <style land="scss">
  @import "@/style/variables";
  @import "@/style/mixin";
  @import "@/style/functions";
  </style>

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
  <script lang="scss">
    .className {
        background: $bgColor;
    }
  </script>
  ```

  # vue-property-decorator 사용
  * vue-property-decorator는 vue-class-component를 기반으로 제작되었다.
  ## @Component
  * (vue-class-component)의 데코레이터이다.
  * javascript의 class를 Vue가 인식할 수 있게 변환하는 데코레이터.
  ```vue
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class SampleComponent extends Vue {}
  </script>
  /* // 위 코드의 Vue 객체형식
  export default {
    name: 'SampleComponent'
  };
  */
  ```