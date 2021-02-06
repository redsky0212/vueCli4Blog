<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>Vue CLI 4 에서 SCSS 설치, 사용 과정에서 생겼던 에러와 해결 과정 정리</strong><br />
        <a
          href="https://www.google.com/search?q=Syntax+Error%3A+TypeError%3A+this.getOptions+is+not+a+function&oq=Syntax+Error%3A+TypeError%3A+this.getOptions+is+not+a+function&aqs=chrome..69i57.879j0j7&sourceid=chrome&ie=UTF-8"
          target="_blank"
          >에러내용관련 참조: Syntax Error: TypeError: this.getOptions is not a function
        </a>
        <br />
        <a href="https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0" target="_blank">
          에러내용관련 참조: Error: Node Sass version 5.0.0 is incompatible with ^4.0.0
        </a>
      </p>
    </blockquote>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- <div class="panel-actions"> -->
            <!-- <a href="javascript:void(0)" class="fa fa-caret-up"></a> -->
            <!-- <a href="#" class="fa fa-times"></a> -->
            <!-- </div> -->

            <h2 class="panel-title"><strong>Vue CLI 4 프로젝트에서 SCSS 사용을 위한 준비</strong></h2>
            <p class="panel-subtitle"><a href="https://sass-lang.com/documentation" target="_blank">SASS Document: https://sass-lang.com/documentation</a></p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>모듈 설치 및 적용</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark"><code>npm i node-sass sass-loader --save-dev</code></span>
                  </li>
                  <li>
                    <span class="text-dark">.vue 파일 컴포넌트의 &lt;style <span class="text-danger">lang="scss"</span>&gt;적용</span>
                  </li>
                </ol>
                <pre class="prettyprint linenums">
&lt;style lang="scss"&gt;
$color: #000;
.foo {
  background-color: $color
}  
&lt;/style&gt;</pre
                >
              </li>
              <li>
                <h4>
                  <strong>(에러 1) Syntax Error: TypeError: this.getOptions is not a function</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark">설치 시 2021-02-06 시점, <code>sass-loader</code>가 11.x.x대 버전이 설치 되어서 버전 문제였음.</span>
                  </li>
                  <li>
                    <span class="text-dark">11.x.x대 버전을 7.1.0 로 교체하여 다시 설치함.</span>
                  </li>
                </ol>
                <pre class="prettyprint linenums">
npm uninstall -D sass-loader
npm i -D sass-loader@7.1.0</pre
                >
              </li>
              <li>
                <h4>
                  <strong>(에러 2) Error: Node Sass version 5.0.0 is incompatible with ^4.0.0</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark">설치 시 2021-02-06 시점, <code>node-sass</code>가 5.x.x대 버전이 설치 되어서 버전 문제였음.</span>
                  </li>
                  <li>
                    <span class="text-dark">5.x.x대 버전을 4.14.1 로 교체하여 다시 설치함.</span>
                  </li>
                </ol>
                <pre class="prettyprint linenums">
npm uninstall -D node-sass
npm i -D node-sass@4.14.1</pre
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
  name: 'SetScssError',
})
export default class SetScssError extends Vue {
  private mounted() {
    window.prettyPrint();
  }
  private isMobile() {
    const UserAgent = navigator.userAgent;
    if (
      UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null ||
      UserAgent.match(/LG|SAMSUNG|Samsung/) != null
    ) {
      return true;
    } else {
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 400px;
  height: 400px;
  img {
    width: 400px;
    height: 400px;
  }
}
</style>
