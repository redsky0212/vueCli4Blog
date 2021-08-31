<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>VSCode에서 SVN 설치, 사용해 보기</strong><br />
        <a href="https://marketplace.visualstudio.com/vscode" target="_blank">vscode확장팩 URL : https://marketplace.visualstudio.com/vscode</a><br />
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

            <h2 class="panel-title"><strong>SVN 확장팩 설치하기</strong></h2>
            <p class="panel-subtitle">
              네트워크가 연결되어 있을 경우와 그렇지 않은 경우가 있다.
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>네트워크가 연결되어 있는 경우</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">빨간색 Extensions 아이콘을 누르고 svn은 검색한다.</span><br />
                    <div>
                      <figure class="profile-picture">
                        <img src="@/assets/images/vscode-extension.png" alt="vscode툴에서 svn확장팩 선택 위치 참조 이미지" />
                      </figure>
                    </div>
                    <ol>
                      <li>
                        <strong>검색된 svn중에 Integrated Subversion source control Chris Johnston을 설치한다. </strong>
                      </li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>네트워크가 없는 오프라인일 경우</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">비주얼스튜디오코드 익스텐션 마켓 페이지에서 직접 파일을 다운로드 받을 수 있다.</span><br />
                    <ul>
                      <li>
                        <strong>사이트URL : <a href="https://marketplace.visualstudio.com/vscode" target="_blank">https://marketplace.visualstudio.com/vscode</a></strong>
                      </li>
                      <li>
                        <span class="text-dark">사이트 진입 후 SVN을 검색하고 클릭!</span>
                        <div>
                          <figure class="profile-picture">
                            <img src="@/assets/images/vscode-extension-svn.png" alt="vscode extensions사이트에서 svn을 검색" />
                          </figure>
                        </div>
                      </li>
                    </ul>
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
  name: 'UseSvn',
})
export default class UseSvn extends Vue {
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
