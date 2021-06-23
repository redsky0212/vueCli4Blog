<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>웹팩 설정방법 이해하기</strong><br />
        <a href="https://webpack.js.org" target="_blank">webpack공식사이트</a><br />
        <a href="https://webpack.kr/configuration" target="_blank">참조링크 : 웹팩설정한글사이트 참조</a><br />
        <a href="https://joshua1988.github.io/webpack-guide" target="_blank">참조링크 : 웹팩 핸드북</a><br />
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

            <h2 class="panel-title"><strong>웹팩 설정</strong></h2>
            <p class="panel-subtitle">
              기본적으로 webpack은 설정 파일이 따로 필요가 없다. 기본설정 엔트리
              <code>src/index.js</code>, 번들링 결과물은 <code>dist/main.js</code>로 되어있다.
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>웹팩 설정 파일</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">
                      보통 프로젝트에서 좀 더 디테일한 웹팩 설정을 하려면 프로젝트 루트에
                      <code>webpack.config.js</code>파일을 생성하여 설정 내용을 적용하면 된다.
                    </span>
                  </li>
                  <li>
                    <span class="text-dark">혹시 설정파일명을 다르게 사용하려면</span><br />
                    <span class="text-dark">명령 프롬프트에 --config 플래그를 사용하여 변경할 수 있다.</span>
                    <pre class="prettyprint">
"scripts": {
  "build": "webpack --config prod.config.js"
}</pre
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>설정 옵션</strong>
                </h4>
                <ul>
                  <li>
                    <h5>
                      <strong><span class="text-danger">mode</span></strong>
                    </h5>
                    <span><code>mode</code>옵션을 사용하면 webpack에 내장된 최적화 기능을 사용할 수 있습니다.</span>
                    <ul>
                      <li><span class="text-warning">타입 :</span> string</li>
                      <li><span class="text-warning">기본값 :</span> 'production'</li>
                      <li><span class="text-warning">설정값 :</span> 'production' | 'none' | 'development'</li>
                      <li>
                        <span class="text-warning">적용 예 :</span>
                        <pre class="prettyprint">
// webpack.config.js 파일에서 설정하기
module.exports = {
  mode: 'development',
};

// CLI 명령으로 인수 전달 방법
webpack --mode=development</pre
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- <div class="panel-actions"> -->
            <!-- <a href="javascript:void(0)" class="fa fa-caret-up"></a> -->
            <!-- <a href="#" class="fa fa-times"></a> -->
            <!-- </div> -->

            <h2 class="panel-title"><strong>...</strong></h2>
            <p class="panel-subtitle">...</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>...</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">...</span>
                  </li>
                  <li>
                    <span class="text-dark">...</span>
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
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'WebpackConfiguration',
})
export default class WebpackConfiguration extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>
<style scoped>
.panel-actions a {
  font-size: 22px;
}

#eventTargetform {
  background-color: green;
  position: relative;
  width: 150px;
  height: 150px;
  text-align: center;
  cursor: pointer;
  color: black;
}
#eventTargetDiv {
  background-color: blue;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 100px;
  height: 100px;
}
#eventTargetP {
  background-color: red;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0;
}
</style>
