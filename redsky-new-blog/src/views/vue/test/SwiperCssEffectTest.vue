<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>Swiperjs를 사용해보고 그것을 이용하여 다양한 css효과를 테스트 해보자.</strong><br />
        <a href="https://swiperjs.com/" target="_blank">참조: https://swiperjs.com/</a>
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

            <h2 class="panel-title"><strong>Swiper</strong></h2>
            <p class="panel-subtitle"><a href="https://www.npmjs.com/package/swiper" target="_blank">https://www.npmjs.com/package/swiper</a></p>
          </header>
          <div class="panel-body">
            <div class="well well-sm">
              <p>Swiper 사용예제</p>
              <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                  <!-- Slides -->
                  <div class="swiper-slide">
                    <img :src="require('@/assets/images/projects/food1.jpg')" alt="음식사진1" />
                  </div>
                  <div class="swiper-slide">
                    <img :src="require('@/assets/images/projects/food2.jpg')" alt="음식사진2" />
                  </div>
                  <div class="swiper-slide">
                    <img :src="require('@/assets/images/projects/food3.jpg')" alt="음식사진3" />
                  </div>
                  <div class="swiper-slide">
                    <img :src="require('@/assets/images/projects/food4.jpg')" alt="음식사진4" />
                  </div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <!-- If we need scrollbar -->
                <div class="swiper-scrollbar"></div>
              </div>
            </div>
            <ul>
              <li>
                <h4>
                  <strong>Swiper 처음 기본 셋팅</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>Swiper Asset</code>다운로드 사이트 : <a href="https://unpkg.com/swiper/" target="_blank">https://unpkg.com/swiper/</a></span>
                  </li>
                  <li>
                    <span class="text-dark">npm 설치 : <code>npm install swiper</code></span>
                  </li>
                  <li>
                    <span class="text-dark">설치한 Swiper가져와 사용하기</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// import Swiper Js
import Swiper from 'swiper';
// Swiper 스타일 가져오기
import 'swiper/swiper-bundle.css';

const swiper = new Swiper(...);</pre
                >
                <ul>
                  <li>
                    <span class="text-dark"><code>Swiper</code>는 기본적으로 추가모듈 없이 기본 모듈만 가지고 있다.</span>
                  </li>
                  <li>
                    <span class="text-dark">따라서 추가 모듈은 따로 가져와서 구성 해줘야 한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper(...);</pre
                >
                <ul>
                  <li>
                    <span class="text-dark">따로 따로가 아닌 <code>모든 모듈</code>을 가져오려면 <code>swiper/bundle</code>을 사용한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// init Swiper:
const swiper = new Swiper(...);</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Swiper HTML 레이아웃 기본 구성</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">HTML 기본 레이아웃 구성.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;!-- Slider main container --&gt;
&lt;div class="swiper-container"&gt;
  &lt;!-- Additional required wrapper --&gt;
  &lt;div class="swiper-wrapper"&gt;
    &lt;!-- Slides --&gt;
    &lt;div class="swiper-slide"&gt;Slide 1&lt;/div&gt;
    &lt;div class="swiper-slide"&gt;Slide 2&lt;/div&gt;
    &lt;div class="swiper-slide"&gt;Slide 3&lt;/div&gt;
    ...
  &lt;/div&gt;
  &lt;!-- If we need pagination --&gt;
  &lt;div class="swiper-pagination"&gt;&lt;/div&gt;

  &lt;!-- If we need navigation buttons --&gt;
  &lt;div class="swiper-button-prev"&gt;&lt;/div&gt;
  &lt;div class="swiper-button-next"&gt;&lt;/div&gt;

  &lt;!-- If we need scrollbar --&gt;
  &lt;div class="swiper-scrollbar"&gt;&lt;/div&gt;
&lt;/div&gt;</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Swiper CSS 스타일 / 크기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">
                      <a href="https://swiperjs.com/swiper-api#styles" target="_blank">Swiper CSS 스타일</a> 외에도 Swiper의 크기를 설정하려면 몇 가지 사용자 지정으로 스타일을 추가해야 한다.
                    </span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
.swiper-container {
  width: 600px;
  height: 300px;
}</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Swiper 초기화, 실제 사용 예제</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">JS 에서 Swiper초기화 예제</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});</pre
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
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

@Component({
  name: 'SwiperCssEffectTest',
})
export default class SwiperCssEffectTest extends Vue {
  private _swiper: Swiper | null = null;
  private mounted() {
    window.prettyPrint();

    this._swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    this.$nextTick(() => {
      if (this.isMobile()) {
        if (document.querySelector('.swiper-container')) {
          (document.querySelector('.swiper-container') as HTMLElement).style.width = '100%';
        }
        const elemArr = (document.querySelectorAll('.swiper-container img') as unknown) as HTMLElement[];
        elemArr.forEach((elem: HTMLElement) => {
          elem.style.width = '100%';
        });
      }
    });
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
