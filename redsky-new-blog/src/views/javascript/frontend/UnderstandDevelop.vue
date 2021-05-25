<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>프론트앤드 개발 시 기본적인 개발환경 이해를 위한 정리</strong><br />
        <a href="https://www.zerocho.com/category/JavaScript/post/5b67e7847bbbd3001b43fd73" target="_blank">javascript모듈시스템이해 참조 링크</a>
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
                    <span class="text-dark">현재 클릭한 html 요소에 이벤트가 걸려 있는지 찾고 있으면 이벤트 실행, 없으면 한단계 상위 요소로 진행</span>
                  </li>
                  <li>
                    <span class="text-dark">상위 요소에 이벤트 여부에 따라 실행하고 또 다시 한단계 상위 요소로 진행</span>
                  </li>
                  <li>
                    <span class="text-dark">최 상단 조상 요소까지 계속 같은일 반복 진행</span>
                  </li>
                </ol>
                <div class="well well-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="353" height="216" viewBox="0 0 353 216">
                    <g id="dom" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                      <g id="event-order-bubbling.svg">
                        <path id="Rectangle-210" fill="#FFDE99" d="M159.488 140L174 186H60l14.512-46z" />
                        <path id="Rectangle-209" stroke="#CFCE95" stroke-width="18" d="M173.634 81H59.366l-16.09 51h146.447l-16.09-51z" />
                        <path id="Rectangle-208" stroke="#99C0C3" stroke-width="18" d="M193.014 29H39.986l-22.71 72h198.448l-22.71-72z" />
                        <path
                          id="Fill-46"
                          fill="#5A4739"
                          d="M121.5 141v13.816a4.5 4.5 0 11-9 0V141h9zm0-31v13h-9v-13h9zM117 20.53a4.471 4.471 0 013.362 1.3l17.64 17.64a4.5 4.5 0 01-6.364 6.364L121.5 35.698V92h-9V35.7l-10.138 10.136a4.5 4.5 0 11-6.363-6.364l17.639-17.64a4.477 4.477 0 013.363-1.3z"
                        />
                        <text id="1" fill="#5A4739" font-family="PTMono-Bold, PT Mono" font-size="14" font-weight="bold"><tspan x="210" y="105">그 위 부모</tspan></text>
                        <text id="2" fill="#5A4739" font-family="PTMono-Bold, PT Mono" font-size="14" font-weight="bold"><tspan x="185" y="136">부모</tspan></text>
                        <text id="3" fill="#EE6B47" font-family="PTMono-Bold, PT Mono" font-size="14" font-weight="bold"><tspan x="157" y="181">현재요소</tspan></text>
                      </g>
                    </g>
                  </svg>
                </div>
              </li>
              <li>
                <h4>
                  <strong>버블링 예제</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark">&lt;p&gt; 요소 이벤트 실행</span>
                  </li>
                  <li>
                    <span class="text-dark">&lt;div&gt; 요소 이벤트 실행</span>
                  </li>
                  <li>
                    <span class="text-dark">&lt;form&gt; 요소 이벤트 실행</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>document</code> 객체를 만날 때까지 계속 진행</span>
                  </li>
                </ol>
                <pre class="prettyprint linenums">
&lt;form onclick="alert('form')"&gt;FORM
  &lt;div onclick="alert('div')"&gt;DIV
    &lt;p onclick="alert('p')"&gt;P&lt;/p&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre
                >
                <div class="well well-sm">
                  <p>실제 테스트 해보기</p>
                  <form onclick="alert('form')" style="margin: 10px;border: 1px solid blue;">
                    FORM
                    <div onclick="alert('div')" style="margin: 10px;border: 1px solid blue;">
                      DIV
                      <p onclick="alert('p')" style="margin: 10px;border: 1px solid blue;">P</p>
                    </div>
                  </form>
                </div>
              </li>
              <li>
                <h4>
                  <strong>event.target 과 event.currentTarget 이해</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>event.target</code> : 실제 이벤트가 발생한 타깃요소(이벤트 발생의 가장 안쪽 요소). 변하지 않음.</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>event.currentTarget</code> : 이벤트가 발생한 대상 뿐만 아니라 버블링 되면서 event handler가 걸려있는(발생하는) 대상 요소를 가리킨다.</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>this</code> : event handler가 걸려있는 currentTarget에 따라 this는 달라진다. 즉 event.currentTarget === this</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;form id="eventTargetform" @click="clickEventTargetform"&gt;
  FORM
  &lt;div id="eventTargetDiv"&gt;
    DIV
    &lt;p id="eventTargetP"&gt;P&lt;/p&gt;
  &lt;/div&gt;
&lt;/form&gt;;</pre
                >
                <ul>
                  <li>
                    <span class="text-dark">이벤트 버블링이 발생하여 실제 클릭한 target과 이벤트가 발생한 요소(currentTarget)는 차이가 생길 수 있다.</span>
                  </li>
                </ul>
                <div class="well well-sm">
                  <p>click handler는 form요소에 걸려있는 상태임.</p>
                  <form id="eventTargetform" @click="clickEventTargetform">
                    FORM
                    <div id="eventTargetDiv">
                      DIV
                      <p id="eventTargetP">P</p>
                    </div>
                  </form>
                </div>
              </li>
              <li>
                <h4>
                  <strong>이벤트 버블링 중단하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-danger"><strong>꼭 필요한 경우를 제외하고 버블링은 막지 않는게 좋다.</strong> 이벤트 관련 오류가 생길 확률이 크다.</span><br />
                    버블링을 막아야 하는 경우라면 커스텀 이벤트를 사용하여 해결하는게 좋음.
                  </li>
                  <li>
                    <span class="text-dark"><code>event.stopPropagation()</code> : 현재 이벤트 이후의 전파를 막는다. (버블링, 캡처링 모두)</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>event.cancelBubble = bool;</code> : <strong>event.stopPropagation()</strong>의 별칭</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>event.stopImmediatePropagation()</code> : 특정 하나의 이벤트가 아닌 걸려있는 모든 이벤트를 막고자 할때 사용.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// ...
</pre
                >
                <ul>
                  <li>
                    <span class="text-dark">...</span>
                  </li>
                </ul>
                <div class="well well-sm">
                  <p>버블링 중단</p>
                </div>
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

            <h2 class="panel-title"><strong>이벤트 캡처링</strong></h2>
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
                    <span class="text-dark"><code>...</code>...</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// ...
</pre
                >
                <ul>
                  <li>
                    <span class="text-dark">...</span>
                  </li>
                </ul>
                <div class="well well-sm">
                  <p>...</p>
                </div>
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
