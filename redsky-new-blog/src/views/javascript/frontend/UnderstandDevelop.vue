<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>프론트앤드 개발 시 기본적인 개발환경 이해를 위한 정리</strong><br />
        <a href="https://www.zerocho.com/category/JavaScript/post/5b67e7847bbbd3001b43fd73" target="_blank">javascript모듈시스템이해 참조 링크</a><br />
        <a href="https://dkwjdi.tistory.com/203" target="_blank">참조링크 : 프론트앤드 개발에 Node.js가 필요한 이유</a>
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
                    <span class="text-dark">Typescript, SASS 같은 고수준 프로그래밍 언어를 사용하려면 전용 트래스파일러가 필요한데, 그것역시 Node.js환경이 뒷받침 되어야 한다.</span>
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
                    <span class="text-dark">파일을 압축하고, 코드를 난독화하고, 폴리필을 추가하는 등 개발 이외의 작업을 거친 후 배포한다.</span>
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
                    <span class="text-dark"><code>LTS</code>버전은 안정적이어서 서버로 사용할때 좋음</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>Current</code>버전은 불안정할 수 있지만 최신기능을 사용할 수 있음</span>
                  </li>
                </ul>
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
