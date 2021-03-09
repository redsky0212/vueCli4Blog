<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>vue.config.js 는 옵션이 포함된 객체를 내보낸다.</strong>
      </p>
      <pre class="prettyprint">
// vue.config.js
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // options...
}</pre
      >
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>공식문서 :<a href="https://cli.vuejs.org/config/#vue-config-js" target="_blank">https://cli.vuejs.org/config/#vue-config-js</a></strong>
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
              기본 옵션
            </h2>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>baseUrl</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"
                      ><strong><code>Vue CLI 3.3</code> 부터 더 이상 사용되지 않음</strong>
                    </span>
                  </li>
                  <li>
                    <span class="text-dark"
                      ><strong>대신 <code>publicPath</code>를 사용한다.</strong>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>publicPath</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"> type: <code>string</code>, default값: <code>'/'</code> </span>
                  </li>
                  <li>
                    <span class="text-dark">
                      애플리케이션 빌드 기본 URL 설정.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>outputDir</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"> type: <code>string</code>, default값: <code>'dist'</code> </span>
                  </li>
                  <li>
                    <span class="text-dark"> <code>vue-cli-service build</code> 했을때, 빌드파일이 생성 될 디렉토리를 지정한다. </span>
                  </li>
                  <li>
                    <span class="text-dark"><code>config.output.path</code>를 직접 수정하지 않고 <code>outputDir</code>에서 수정한다.</span><br />
                    <span>발생 에러코드: <code>Configuration Error: Avoid modifying webpack output.path directly. Use the “outputDir” option instead</code></span>
                  </li>
                  <li>
                    <span class="text-dark"><code>outputDir: path.resolve(__dirname)</code>, 이와같이 루트만 설정하면 에러 발생</span><br />
                    <span>발생 에러코드: <code>Configuration Error: Do not set output directory to project root.</code></span>
                  </li>
                </ul>
                <pre class="prettyprint">
// outputDir변경 방법 예제
const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, '../priv/static');
};</pre
                >
              </li>
              <li>
                <h4>
                  <strong>assetsDir</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"> type: <code>string</code>, default값: <code>''</code> </span>
                  </li>
                  <li>
                    <span class="text-dark"><code>outputDir</code>내부에서 부터 아래로 생성된다.</span>
                  </li>
                  <li>
                    <span class="text-dark">프로젝트의 assets에서 사용된 js, image, css등 정적 파일들을 넣을 곳을 지정한다.</span>
                    <pre class="prettyprint">
// 이 경로는 outputDir의 내부에 생성되며 상대경로이다.
assetsDir: './test/asset',</pre
                    >
                  </li>
                </ul>
                <pre class="prettyprint">
...
...</pre
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

@Component
export default class DotEnv extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>
