<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>프론트앤드 개발 시 기본적인 개발환경 이해를 위한 정리</strong><br />
        <a href="https://www.zerocho.com/category/JavaScript/post/5b67e7847bbbd3001b43fd73" target="_blank">javascript모듈시스템이해 참조 링크</a><br />
        <a href="https://dkwjdi.tistory.com/203" target="_blank">참조링크 : 프론트앤드 개발에 Node.js가 필요한 이유</a><br />
        <a href="https://semver.org/lang/ko/" target="_blank">참조링크 : 유의적 버전(버전관리 규칙중 하나)</a><br />
        <a href="https://d2.naver.com/helloworld/12864" target="_blank">참조링크: Javascript표준을 위한 움직임, 모듈시스템 관련</a>
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

            <h2 class="panel-title"><strong>Node.js를 이용하여 개발 필요성</strong></h2>
            <p class="panel-subtitle">
              프론트앤드 개발 시
              <code>Node.js</code>
              를 이용하여 개발환경을 구성하는 이유, 필요성 정리
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>최신스팩으로 개발할 수 있다.</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark">javascript의 발전에 비해 브라우저의 지원 속도는 항상 뒤쳐진다.</span>
                    <span class="text-dark">그로인해 바벨 같은 도구의 도움이 필요하다. 또한 웹팩, NPM 같은 노드 기술로 좀 더 자동화된 프론트앤드 개발환경을 갖출 수 있다.</span>
                  </li>
                  <li>
                    <span class="text-dark">Typescript, SASS 같은 고수준 프로그래밍 언어를 사용하려면 전용 트랜스파일러가 필요한데, 그것역시 Node.js환경이 뒷받침 되어야 한다.</span>
                  </li>
                </ol>
              </li>
              <li>
                <h4>
                  <strong>빌드 자동화</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark">과거처럼 코딩 결과물을 브라우저에 바로 올리는 경우는 거의 없다.</span>
                    <span class="text-dark">파일을 압축하고, 코드를 난독화하고, 폴리필을 추가하는 등 개발 이외의 작업을 거친 후 배포한다.</span><br />
                    <span class="text-dark">Node.js는 이러한 일련의 빌드 과정을 이해하는데 적지않은 역할을 하고 있다.</span>
                    <span class="text-dark">이 뿐만 아니라 라이브러리 의존성을 해결하고,</span>
                    <span class="text-dark">각종 테스트를 자동화하는데도 사용할 수 있다.</span>
                  </li>
                </ol>
              </li>
              <li>
                <h4>
                  <strong>개발 환경 커스터마이징</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">각 프론트앤드 프레임워크에서 제공하는 도구를 사용하면 손쉽게 개발환경을 갖출 수 있다.</span>
                    <span class="text-dark"><code>React.js의 CRA(create-react-app), Vue.js의 vue-cli</code></span>
                  </li>
                  <li>
                    <span class="text-dark">하지만 각 프로젝트 형편에 따라 여러가지 환경을 달리 셋팅해야할 필요성 있다.</span>
                  </li>
                  <li>
                    <span class="text-dark">만약 자동화된 도구를 사용할 수 없는 환경이라면 직접 환경을 구축해야 하는 상황도 있을 수 있다.</span>
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

            <h2 class="panel-title"><strong>Node.js설치 및 프로젝트 생성</strong></h2>
            <p class="panel-subtitle"><code>https://nodejs.org</code>에서 설치</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>Node.js설치</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>LTS</code>버전은 안정적이어서 서버로 사용할때 좋음</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>Current</code>버전은 불안정할 수 있지만 최신기능을 사용할 수 있음</span>
                  </li>
                  <li>
                    <span class="text-dark">설치 후 터미널창에서 아래와 같이 'node'라고 코드를 입력하면 REPL(read-eval-print loop)이라는 즉시 결과를 확인할 수 있는 프로그램을 실행된다.</span><br />
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
                    <span class="text-dark">기본 명령어는 <code>npm 명령어</code> 이렇게 사용하고, package.json의 scripts부분에 생성한 명령어는 <code>npm run 명령어</code> 이렇게 사용한다.</span>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>패키지(라이브러리) 설치하는 다양한 방법</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">CDN을 이용하여 외부 라이브러리를 가져다 쓰는 방법.</span>
                    <pre class="prettyprint">&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</pre>
                  </li>
                  <li>
                    <span class="text-dark">직접 다운로드하는 방법.</span><br />
                    <span class="text-dark">CDN을 사용하지 않기 때문에 외부서버 장애와 독립적으로 웹 어플리케이션을 제공할 수 있으나 지속적인 업데이트를 귀찮게 해줘야 한다.</span>
                  </li>
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
                  <strong>npm 설치 시 유의적 버전 관련 설명</strong>
                </h4>
                <ul>
                  <li><a href="https://semver.org/lang/ko/" target="_blank">참조링크URL: 유의적 버전(버전관리 규칙중 하나)</a></li>
                  <li>
                    <pre class="prettyprint">
// npm install vue 설치하면 package.json파일에 아래와 같이 버전이 표시된다.
"dependencies": {
  "vue": "^2.6.12"
}</pre
                    >
                    <span class="text-dark">이와같이 표시되는 버전은 "유의적 버전"(sementic version)의 의미이다.</span><br />
                    <span class="text-dark">유의적 버전은 <strong>주(major), 부(Minor), 수(Patch)</strong>세 가지 숫자를 조합해 버전을 관리한다.</span>
                  </li>
                  <li>
                    <span class="text-dark">각 버전을 변경하는 기준은 다음과 같다.</span><br />
                    <pre class="prettyprint">
* 주 버전(Major Version): 기존 버전과 호환되지 않게 변경한 경우
* 부 버전(Minor Version): 기존 버전과 호화되면서 기능이 추가된 경우는
* 수 버전(Patch Version): 기존 버전과 호환되면서 버그를 수정한 경우</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark">버전 범위 표기는 아래와 같이 한다.</span><br />
                    <pre class="prettyprint">
// 가장 단순한 표기법은 범위없이 표기하는 형태이다.
1.2.3

// 특정 버전보다 높거나 낮을경우 표기
&gt;1.2.3
&gt;=1.2.3
&lt;1.2.3
&lt;=1.2.3

// 틸트(~)와 캐럿(^)을 이용해 범위를 명시
~1.2.3
^1.2.3</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark"><strong>틸트(~)</strong>는 마이너 버전이 명시되어 있으면 패치버전만 변경한다.</span>
                    <ul>
                      <li>예를들어 ~1.2.3 표기는 1.2.3부터 1.3.0미만 까지를 포함한다.</li>
                      <li>마이너 버전이 없으면 마이너 버전을 갱신한다.</li>
                      <li>~0표기는 0.0.0부터 1.0.0미만 까지를 포함한다.</li>
                    </ul>
                  </li>
                  <li>
                    <span class="text-dark"><strong>캐럿(^)</strong>은 정식버전에서 마이너와 패치버전을 변경한다.</span>
                    <ul>
                      <li>예를들어 ^1.2.3표기는 1.2.3부터 2.0.0미만 까지의 버전을 포함한다.</li>
                      <li>정식버전 미만인 0.x버전은 패치만 갱신한다.</li>
                      <li>예를들어 ^0표기는 0.0.0부터 0.1.0미만 까지를 포함한다.</li>
                    </ul>
                  </li>
                  <li>
                    <span class="text-dark">참고로 Node.js는 예전에 틸트를 이용해 버전을 관리했지만 현재는 캐럿을 이용해 버전을 관리한다.</span><br />
                    <span class="text-dark">이유는 여러 라이브러리들이 부버전이 변하더라도 하위 호환성을 지키지 않고 배포하는 경우가 빈번했기 때문.</span>
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

            <h2 class="panel-title"><strong>웹팩</strong></h2>
            <p class="panel-subtitle">
              프론트앤드 개발 시
              <code>웹팩</code>
              이 왜 필요한지 배경부터 사용법 등 알아보기
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>웹팩이 왜 필요했는지 배경</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark">
                      javascript를 사용하는 예전방식은 js파일을 html파일에서 로드하여 불러와 사용하는 방식, 이때 js파일의 함수들이 모두 전역이어서 전역스콥 오염문제가 있음.
                    </span>
                  </li>
                  <li>
                    <span class="text-dark">그래서 개선된 방식의 사용방법으로 <code>IIFE(Immediately Invoked Function Expressions)(즉시실행함수)</code>방법을 사용함.</span>
                    <pre class="prettyprint">
// IIFE표현식의 가장 기본적인 형태
(function() {
  // Do fun stuff
})()</pre
                    >
                    <span class="text-dark">이렇게 하면 함수 안에 독립된 스콥이 생성되므로 전역스콥이 오염되지 않는다.</span>
                  </li>
                </ol>
              </li>
              <li>
                <h4>
                  <strong>좀 더 발전된 다양한 모듈 시스템 관련</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>AMD, CommonJS, UMD 모듈</code></span>
                  </li>
                  <li>
                    <span class="text-dark"><strong>AMD(Asynchronous Module Definition)</strong>모듈 관련</span>
                    <ul>
                      <li>
                        <strong>AMD</strong>의 근간이 되는 3가지 개념
                        <ul>
                          <li>
                            <strong>동적 로딩</strong><br />
                            <span>&lt;script&gt;태그는 페이지 렌더링을 방해한다. HTTP요청, 다운로드, 파싱 등 실행하는동안 브라우저는 다른 동작을 멈춘다.</span>
                            <br />
                            <span>그래서&lt;body&gt;태그 마지막에 배치하기도 한다.</span>
                            <br />
                            <span>하지만 페이지 렌더링을 빨리할 수는 있어도 첫 인터랙션 까지의 시간은 변함이 없다.</span>
                            <span>그래서 좀 더 최적화를 위한 첫 렌더링과 인터랙션에 필요한 javascript를 먼저 로딩하는 점진적인 방식이 필요하다.</span>
                            <br />
                            <span>동적로딩(Dynamic Loading, Lazy Loading)은 렌더링 방해를 하지 않으면서 필요한 파일만 로딩할 수 있다.</span>
                            <pre class="prettyprint">
// 가장 기초적인 script태그를 생성하여 추가하는 방법
var scriptEl = document.createElement('script');
scriptEl.type = 'text/javascript';
scriptEl.src = 'example.js';
document.getElementByTagName('head')[0].appendChild(scriptEl);</pre
                            >
                            <span>이 방법을 응용하여 함수로 따로 만들 수 있다.</span>
                            <pre class="prettyprint">
function loadScript(url, callback) {
  var scriptEl = document.createElement('script');
  scriptEl.type = 'text/javascript';
  scriptEl.onload = function() {
    callback();
  };
  scriptEl.src = url;
  document.getElementByTagName('head')[0].appendChild(scriptEl);
}

loadScript('example.js', function() {
  // example.js가 로딩 완료된 시점에 실행
});

</pre
                            >
                            <span>하지만 로드할 js파일이 많을경우 콜백 지옥에 빠질 수 있다.</span>
                            <pre class="prettyprint">
loadScript('file1.js', function() {
  loadScript('file2.js', function() {
    loadScript('file3.js', function() {
      loadScript('file4.js', function() {
        // 콜백지옥
      });
    });
  });
});</pre
                            >
                            <span><strong>AMD</strong>는 이런 문제를 자연스럽게 해결했다.</span>
                          </li>
                          <li>
                            <strong>의존성 관리</strong><br />
                            <span>javascript는 스크립트 간의 의존성을 파악하기 힘들다.</span>
                            <span>그래서 include나 import같은 명시적인 키워드가 필요하다. 예를들면 아래와 같은 코드</span>
                            <pre class="prettyprint">
// 모듈 정의 예시
defineModule('util', {
  trim: function() {},
  extend: function() {}
});

// 모듈 가져와 사용 예시
var util = loadModule('util');
util.trim();</pre
                            >
                          </li>
                          <li>
                            <strong>모듈화</strong><br />
                            <span>스크립트의 변수, 함수들은 전역공간을 오염시키면 안된다. 그래서 모듈화가 필요.</span>
                            <br />
                            <span>기본적인 모듈 패턴은 다음과 같이 클로저를 이용하고, 외부에 노출할 변수,함수를 골라 return하는 형태이다.</span>
                            <pre class="prettyprint">
var foo = (function() {
  var i = 0;

  function init() {
    reset();
  }

  function reset() {
    i = 0;
  }

  function increase() {
    i++;
  }

  function decrease() {
    i--;
  }

  function get() {
    return i;
  }

  return {
    init: init,
    increase: increase,
    decrease: decrease,
    get: get
  };
}());

// 사용하는 부분
foo.increase();
console.log(foo.get()); // 1
foo.decrease();
console.log(foo.get()); // 0

// foo.i와 foo.reset()은 return하지 않았기 때문에 외부에 노출되지 않음.
console.log(foo.i); // undefined
foo.reset();  // error</pre
                            >
                            <span>위 모듈을 조금 응용하여 클래스처럼 사용할 수도 있다.</span>
                            <pre class="prettyprint">
var Foo = (function() {
  var NAME = 'Foo';

  // 생성자 함수
  function Foo() {
    this.i = 0;
  }

  Foo.prototype.getClassName = function() {
    return NAME;
  };

  Foo.prototype.increase = function() {
    this.i++;
  };

  Foo.prototype.decrease = function() {
    this.i--;
  };

  return Foo;
}());

var foo = new Foo();</pre
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <code>AMD</code>를 사용한 가장 유명한 스크립트는 <code>RequireJS</code>이다.
                        <br />
                        <a href="https://d2.naver.com/helloworld/591319" target="_blank">참조링크 : naver D2(AMD, RequireJS관련 자세한 설명)</a>
                        <pre class="prettyprint">
// RequireJS define 사용방식
// myModule.js
define(['jquery', 'redsky'], function($, R) {
  console.log($);
  console.log(R);
  return {
    a: $,
    b: R,
  };
});

// 다른파일에서 myModule.js파일을 가져와 사용할때
require(['myModule', 'TweenMax'], function(my, T) {
  console.log(my.a);  // jquery
  console.log(my.b);  // redsky
  console.log(T); // TweenMax
  console.log(jquery);  // undefined도는 에러발생
});</pre
                        >
                        쓰고자하는 남의 코드들을 define의 첫번째 인자 배열에 나열한 후, 두번째 인자인 콜백 함수에서 매개변수로 받아서 사용한다.
                        <br />
                        남의 모듈을 명시적으로 알려주고, 사용하지 않는 것들은 접근되지 않게 하기 때문에 유용하다.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span class="text-dark"><strong>CommonJS</strong>모듈 관련</span>
                    <ul>
                      <li><code>Node.js</code>에서 채택한 방식</li>
                      <li>
                        CommonJS의 모듈화 방식의 예시는 아래와 같다.
                        <pre class="prettyprint">
// myModule.js
// module.exports로 모듈화시키고 싶은 변수를 묶어준다.
const $ = require('jquery');
const R = require('redsky');
module.exports = {
  a: $,
  b: R,
};

// 모듈을 사용하는쪽.
const my = require('myModule');
console.log(my.a, my.b);</pre
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span class="text-dark"><strong>UMD</strong> 모듈시스템</span>
                    <ul>
                      <li><code>AMD, CommonJS</code>를 쓰는 두 그룹으로 나누어지다보니 서로 호환이 안 되게 되었습니다. 그래서 나온것이 <code>UMD</code>입니다.</li>
                      <li><code>UMD</code>는 정해진 코드라기 보다는 디자인 패턴에 가깝다.</li>
                      <li>
                        모든 경우를 커버할 수 있는 모듈을 작성한다. 아래 예시 참조
                        <pre class="prettyprint">
// myModule.js
(function(root, factory) {
  if(typeof define === 'function' &amp;&amp; define.amd) {  // AMD
    define(['jquery', 'redsky'], factory);
  } else if(typeof module === 'object' &amp;&amp; module.exports) { // CommonJS
    module.exports = factory(require('jquery'), require('redsky'));
  } else {  // window
    root.moModule = factory(root.$, root.R);
  }
})(this, function($, R){
  return {
    a: $,
    b: R,
  };
});</pre
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span class="text-dark"><strong>ES2015 표준 모듈시스템</strong></span>
                    <br />
                    <a href="https://www.zerocho.com/category/EcmaScript/post/579dca4054bae71500727ab9" target="_blank">
                      참조링크: ES2015모듈시스템 관련 참조 블로그
                    </a>
                    <ul>
                      <li>ES2015에서 모듈시스템 자체 지원 시작.</li>
                      <li>바벨이나 웹팩에서는 ES2015표준모듈시스템을 사용하는 것이 일반적이다.</li>
                      <li>일부 브라우저만 지원</li>
                      <li>모든 브라우저 지원을 위하여 웹팩이 필요</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>웹팩</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><a href="https://webpack.js.org" target="_blank">참조링크: webpack</a></span>
                    <span class="text-dark">웹팩 설명 페이지 참조</span>
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
  name: 'UnderstandDevelop',
})
export default class UnderstandDevelop extends Vue {
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
