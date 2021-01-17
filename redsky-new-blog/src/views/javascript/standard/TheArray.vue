<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>Javascript <code>Array</code> 전역 객체는 배열을 생성할 때 사용하는 리스트 형태의 객체이다.</strong>
      </p>
    </blockquote>
    <div class="alert alert-danger">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      Array 객체의 <strong>Method</strong>를 사용법과 함께 정리
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
              Method
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle">여러가지 <strong>Method</strong>의 사용법 정리.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                Array.<code><strong>from()</strong></code>
                <ul>
                  <li>Array.from() 메서드는 <strong>유사 배열 객체</strong>나 <strong>반복 가능한 객체</strong>를 얕게 복사해 새로운<code>Array</code>로 만든다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">Array.from( arrayLike[, mapFn[, thisArg]] )</span>, <strong>반환값: 새로운배열</strong>.<br />
                    * <span class="text-primary">arrayLike</span> : 유사배열객체<br />
                    * <span class="text-primary">mapFn</span> : 배열의 모든 요소에 대해 호출 맵핑 함수.<br />
                    * <span class="text-primary">thisArg</span> : mapFn 실행 시에 this로 사용할 값.
                  </li>
                  <li><strong>Array.from(obj, mapFn, thisArg)</strong>는 중간에 다른 배열을 생성하지않는다는 점을 제외하면 <strong>Array.from(obj).map(mapFn, thisArg)</strong>와 같음.</li>
                </ul>
                <pre class="prettyprint linenums">
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]</pre
                >
                <pre class="prettyprint linenums">
// Set에서 배열 만들기
const s = new Set(['foo', window]);
Array.from(s);
// ["foo", window]</pre
                >
                <pre class="prettyprint linenums">
// map에서 배열 만들기
const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];</pre
                >
                <pre class="prettyprint linenums">
// arguments에서 배열 만들기 테스트
function f() {
  return Array.from(arguments);
}
f(1, 2, 3);</pre
                >
              </li>
              <li>
                Array.<code><strong>isArray()</strong></code>
                <ul>
                  <li>Array.isArray() 메서드는 인자가 Array인지 판별.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">Array.isArray( obj )</span>, <strong>반환값: boolean값</strong>.<br />
                    * <span class="text-primary">obj</span> : 체크할 객체
                  </li>
                </ul>
              </li>
              <li>
                Array.<code><strong>of()</strong></code>
                <pre class="prettyprint linenums">
// ...
// ...</pre
                >
              </li>
              <li>
                Array.prototype<code><strong>concat()</strong></code>
                <pre class="prettyprint linenums">
// ...
// ...</pre
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
export default class TheSlot extends Vue {
  private mounted() {
    this.arrayFromTest();
    window.prettyPrint();
  }

  private arrayFromTest() {
    const s = new Set(['foo', window]);
    Array.from(
      s,
      (item, index) => {
        const c = '';
      },
      s
    );
  }
}
</script>
