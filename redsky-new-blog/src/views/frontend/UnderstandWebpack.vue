<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>웹팩 이해하기</strong><br />
        <a href="https://webpack.js.org" target="_blank">webpack공식사이트</a><br />
        <a href="https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d" target="_blank">참조링크 : zerocho웹팩설명 참조</a><br />
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

            <h2 class="panel-title"><strong>웹팩이란 ?</strong></h2>
            <p class="panel-subtitle">
              현재 webpack 5 까지 나옴(2021.06.22)
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>웹팩이란</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">모듈번들러(Module Bundler)</span>
                    <span class="text-dark">
                      애플리케이션을 구성하는 파일들(html, css, javascript, image등)을 각각 모듈로 보고 webpack에서 설정한 규칙에 따라 조합해서 병합된 결과물을 만드는 도구.
                    </span>
                  </li>
                  <li>
                    <span class="text-dark">[합치는 이유]</span><br />
                    <ol>
                      <li>
                        <strong>http/1.1 요청의 비 효율성 : </strong>
                        <span>하나의 커넥션에 하나의 요청을 하는 방식(요청이 많을 수록 비효율적이다)</span><br />
                        <span>http/2 에서는 하나의 커넥션에 동시에 여러요청을 할 수 있으나 아직은 무리(브라우저 호환)</span>
                      </li>
                      <li>
                        <span>어찌됐건 많은 요청은 애플리케이션의 부담.</span>
                      </li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>비슷한 다른 번들러</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">gulp, grunt</span>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Webpack장점</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">의존성 모듈관리</span>
                  </li>
                  <li>
                    <span class="text-dark">크로스 브라우징 대응</span>
                  </li>
                  <li>
                    <span class="text-dark">코드 스플리팅</span>
                  </li>
                  <li>
                    <span class="text-dark">http요청관리</span>
                  </li>
                  <li>
                    <span class="text-dark">변수의 유효범위관리 등등</span>
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

            <h2 class="panel-title"><strong>웹팩 사용</strong></h2>
            <p class="panel-subtitle">웹팩 사용을 위한 기본 구성 방법</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>Node.js 필수 설치</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><a href="https://nodejs.org" target="_blank">https://nodejs.org</a>에서 설치</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>Current</code>버전은 불안정할 수 있지만 최신기능을 사용할 수 있음</span>
                  </li>
                  <li>
                    <span class="text-dark">설치 후 터미널창에서 아래와 같이 크드를 입력하면 REPL(read-eval-print loop)라고 입력하고 즉시 결과를 확인할 수 있는 프로그램을 실행할 수 있다.</span><br />
                    <pre class="prettyprint linenums">
// node 를 입력하면 실행 됨.

C: \Users > node
Welcome to Node.js v16.0.0
Type ".help" for more information.
> 1+2
3

// .exit 명령을 실행하거나 ctrl+c 하면 REPL프로그램 빠져나감.
</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark">터미널창에서 node --version 또는 npm --version을 치면 버전이 표시되며 설치 된것을 알 수 있다.</span>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>프로젝트 생성</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>mkdir</code>을 입력하여 프로젝트 사용할 디렉토리를 생성한다.</span>
                  </li>
                  <li>
                    <span class="text-dark">생성한 디렉토리를 이동하여 <code>npm init</code>명령어로 프로젝트를 초기화하고 생성한다.</span>
                  </li>
                  <li>
                    <span class="text-dark">프로젝트를 생성하면 내부에 <code>package.json</code>파일이 만들어져있다.</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>npm</code>치면 명령어 목록이 나온다. 참조할 수 있다.</span>
                  </li>
                  <li>
                    <span class="text-dark">기본 명령어는 <code>npm 명령어</code> 이렇게 사용하고, package.json의 script부분에 생성한 명령어는 <code>npm run 명령어</code> 이렇게 사용한다.</span>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>라이브러리 설치</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">npm 을 이용하는 방법</span><br />
                    <span class="text-dark">Node.js가 설치되어있다면 <code>npm install명령어를 이용하여 손쉽게 라이브러리를 설치할 수 있다.</code></span>
                    <pre class="prettyprint">
// npm 명령어로 라이브러리 설치
npm install vue
// package.json에 설치된 라이브러리의 버전이 표시 되면서 확인할 수 있다.
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>웹팩 설치</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>npm i -D webpack webpack-cli</code> (웹팩4 부터는 webpack-cli를 따로 설치)</span><br />
                    (vue cli나 create react app을 사용할때는 webpack이 이미 설치 되어있으므로 따로 설치가 필요없다.)
                  </li>
                  <li>
                    <span class="text-dark"><code>webpack.config.js</code>(웹팩설정파일) 파일을 생성.</span><br />
                    <span class="text-dark">설정 파일명이 기본 webpack.config.js 이지만 이것을 다르게 적용 하려면 </span>
                    <span class="text-dark">명령 프롬크트에 실행할때 webpack --config webpack.config.prod.js라고 </span>
                    <span class="text-dark">파일명을 --config플래그를 사용하여 적용하면 된다.</span>
                    <br />
                    (웹팩 설정 부분은 따로 정리.)
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

            <h2 class="panel-title"><strong>웹팩 우선 빌드해보기</strong></h2>
            <p class="panel-subtitle">
              예제 프로젝트를 생성하여 임시 helloworld 만들어 보자.
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>개발환경구성</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark">
                      Node.js 컴퓨터에 설치.
                    </span>
                  </li>
                  <li>
                    <span class="text-dark">빈 폴더에 프로젝트를 생성하기 위해 아래코드 실행</span>
                    <pre class="prettyprint">
// node 프로젝트 생성
npm init -y</pre
                    >
                    <span class="text-dark">아래 명령어로 해당 폴더에 웹팩 설치와 lodash 라이브러리 설치</span>
                    <pre class="prettyprint">
// lodash라이브러리는 모듈 의존성을 구현해보기 위해 설치                    
npm i webpack webpack-cli -D
npm i lodash</pre
                    >
                  </li>
                </ol>
              </li>
              <li>
                <h4>
                  <strong>빌드할 파일 생성</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark">폴더에 <code>index.html</code>파일을 생성하고 아래내용 추가</span>
                    <pre class="prettyprint">
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Webpack Demo&lt;/title&gt;
    &lt;script src="https://unpkg.com/lodash@4.16.6"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src="src/index.js"&gt;&lt;/script&gt; 
  &lt;/body&gt;
&lt;/html&gt;</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark">프로젝트 루트레벨에 <code>src</code>폴더를 만들고 그 안에 <code>index.js</code>파일생성</span>
                    <pre class="prettyprint">
// index.js 파일
function component() {
  var element = document.createElement('div');

  /*lodash를 required 한 다음에 코딩*/
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark">위 파일 소스는 index.html의 일반적인 javascript소스코딩 형태이다.</span><br />
                    <span class="text-dark"><code>웹팩 빌드</code> 명령어를 실행하여 생성된 파일로 확인하기 위해서 아래와 같이 소스를 수정하여 모듈 형태로 코딩한다.</span>
                    <pre class="prettyprint">
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Webpack Demo&lt;/title&gt;
    &lt;!-- &lt;script src="https://unpkg.com/lodash@4.16.6"&gt;&lt;/script&gt; --&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- &lt;script src="src/index.js"&gt;&lt;/script&gt; --&gt;
    &lt;script src="dist/main.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre
                    >
                    <pre class="prettyprint">
// index.js 파일
// lodash를 가져온다.(빌드 시 의존성 확인)
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  /*lodash를 required 한 다음에 코딩*/
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark"><code>package.json</code>파일에 <code>build</code> 스크립트 추가</span>
                    <pre class="prettyprint">
// package.json
"scripts": {
  // webpack.config.js에 mode를 설정했으면 --mode값은 빼면된다.
  // "build": "webpack"
  "build": "webpack --mode=none"
}</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark"><code>webpack.config.js</code>파일을 생성하고 아래내용 추가</span>
                    <pre class="prettyprint">
// webpack.config.js
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark">명령창에서 <code>npm run build</code>라고 치면 webpack이 실행 되면서 빌드된다.</span>
                  </li>
                  <li>
                    <span class="text-dark">빌드 결과물이 어떤식으로 생성 되는지 확인해 보면서 공부해보자.</span>
                  </li>
                </ol>
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
  name: 'UnderstandWebpack',
})
export default class UnderstandWebpack extends Vue {
  private mounted() {
    window.prettyPrint();
    // 캡처링 이벤트 설정
    this.setCapturingEvent();
  }

  private destroyed() {
    document.removeEventListener('touchstart', this.touchStartHandler, { capture: true });
  }

  private setCapturingEvent() {
    document.addEventListener('touchstart', this.touchStartHandler, { capture: true });
  }

  private touchStartHandler(event: Event) {
    event.cancelBubble = true;
    console.log(`캡처링: ${event.currentTarget}`);
  }

  private onClickHandler(event: Event) {
    console.log(`DIV 클릭: ${event.currentTarget}`);
  }

  private onDivTouchStartHandler(event: Event) {
    console.log(`DIV 터치스타트: ${event.currentTarget}`);
  }

  private clickEventTargetform(event: Event) {
    if (event.target) {
      const self: HTMLElement = event.currentTarget as HTMLElement;
      const target: HTMLElement = event.target as HTMLElement;
      target.style.backgroundColor = 'yellow';

      // chrome needs some time to paint yellow
      setTimeout(() => {
        alert('target = ' + target.tagName + ', this(currentTarget)=' + self.tagName);
        target.style.backgroundColor = '';
      }, 0);
    }
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
