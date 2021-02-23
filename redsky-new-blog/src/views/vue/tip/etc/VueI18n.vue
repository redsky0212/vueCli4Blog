<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>Vue에서 i18n을 이용하여 쉽게 다국어 처리를 구현</strong><br />
        <a href="https://kazupon.github.io/vue-i18n/introduction.html#sponsors" target="_blank">Vue 다국어 참조 : https://kazupon.github.io/vue-i18n/introduction.html#sponsors </a><br />
        <a href="https://kazupon.github.io/vue-i18n/started.html" target="_blank">Vue 다국어 참조 : https://kazupon.github.io/vue-i18n/started.html </a><br />
        <a href="https://dong-queue.tistory.com/59" target="_blank">Vue 다국어처리 기초(블로그) : https://dong-queue.tistory.com/59 </a><br />
        <a href="https://dong-queue.tistory.com/64" target="_blank">Vue 다국어처리 JSON파일 이용한 관리(블로그) : https://dong-queue.tistory.com/64 </a><br />
        <a href="https://dong-queue.tistory.com/65" target="_blank">Vue 다국어처리 DB로 관리(블로그) : https://dong-queue.tistory.com/65 </a><br />
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

            <h2 class="panel-title"><strong>설치</strong></h2>
            <p class="panel-subtitle">다양한 설치 방법</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>다운로드 / CDN</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>Vue 다음에 vue-i18n을 로드하면 자동 설치.</code></span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;script src="https://unpkg.com/vue/dist/vue.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/vue-i18n/dist/vue-i18n.js"&gt;&lt;/script&gt;</pre
                >
              </li>
              <li>
                <h4>
                  <strong>NPM</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>npm i vue-i18n</code></span>
                  </li>
                  <li>
                    <span class="text-dark"><code>yarn add vue-i18n</code></span>
                  </li>
                  <li>
                    <span class="text-dark">npm 설치 후 사용할 수 있게 Vue.use() 해줌.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Vue Cli 3.x</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>vue add i18n</code></span>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>개발 직접 빌드</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>vue-i18n git에서 직접 clone해서 설치하는 방법</code></span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
git clone https://github.com/kazupon/vue-i18n.git node_modules/vue-i18n
cd node_modules/vue-i18n
npm install # or `yarn`
npm run build  # or `yarn run build`</pre
                >
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

            <h2 class="panel-title"><strong>i18n 사용하기 위한 준비</strong></h2>
            <p class="panel-subtitle">Vue에서 다국어 지원 사용을 위한 준비.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>사용 예</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">{{ $t('message.hello') }}</span>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>가장 기본적인 준비</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>main.js</code>파일에 <code>i18n</code>을 사용하기 위한 코딩을 한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'hello, redsky!',
    },
  },
  ko: {
    message: {
      hello: '안녕, 레드스카이!',
    },
  },
};
const i18n = new VueI18n({ locale: 'ko', messages });

// i18n추가
new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');</pre
                >
              </li>
              <li>
                <h4>
                  <strong>가장 기본적인 사용법</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>$t(다국어 코드)</code> 이와같은 형식으로 사용한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;p&gt;&#10100;&#10100; $t('message.hello') &#10101;&#10101;&lt;/p&gt;
&lt;/template&gt;</pre
                >
              </li>
              <li>
                <h4>
                  <strong>App.vue에 PC설정에 맞는 local이 자동 설정 적용해보기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">사용자가 직접 local을 바꾸고자 할때는 화면 이벤트를 설정하여 <code>this.$i18n.local에 바꿔적용하면 됨.</code></span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;template&gt;
...
&lt;/template&gt;
&lt;script&gt;
  export default {
    created () {
      let locale = navigator.language || navigator.userLanguage
      locale = locale.substring(0, 2)
      if (locale !== 'ko') locale = 'en' // 한국어가 아닌 경우 무조건 영어로 설정
      this.$i18n.locale = locale
    }
  }
&lt;/script&gt;</pre
                >
              </li>
              <li>
                <h4>
                  <strong>변수 사용해보기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">메시지 중간에 변수값이 들어가도록 설정해보기</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// 최초 설정부분에 변수를 받을 수 있게 user를 적용해놓고
const messages = {
  ko: {
    message: {
      hello: '안녕하세요. {user}님.'
    }
  }
}
// 사용할때 아래와 같이 사용
&lt;p&gt;&#10100;&#10100; $t('message.hello', &#10100; user: '펭수' &#10101;) &#10101;&#10101;&lt;/p&gt;
// output
안녕하세요. 펭수님.
                </pre>
                <ul>
                  <li>
                    <span class="text-dark">순서를 지정하여 값을 넣는 방법</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// 최초 설정부분에 변수를 받을 수 있게 user를 적용해놓고
const messages = {
  ko: {
    message: {
      hello: '안녕하세요. {0}님.'
    }
  }
}
// 사용할때 아래와 같이 사용
&lt;p&gt;&#10100;&#10100; $t('message.hello', ['펭수']) &#10101;&#10101;&lt;/p&gt;
// output
안녕하세요. 펭수님.
                </pre>
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
