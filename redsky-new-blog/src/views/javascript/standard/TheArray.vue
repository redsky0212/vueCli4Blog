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
              <strong>Method</strong>정리
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle">여러가지 <strong>Method</strong>의 사용법 정리.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>Array.<code>from()</code></strong>
                </h4>
                <ul>
                  <li>Array.from() 메서드는 <strong>유사 배열 객체</strong>나 <strong>반복 가능한 객체</strong>를 얕게 복사해 새로운<code>Array</code>로 만든다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">Array.from( arrayLike[, mapFn[, thisArg]] )</span>, <strong>반환값: 새로운배열</strong>.<br />
                    * <span class="text-primary">arrayLike</span> : 유사배열객체<br />
                    * <span class="text-primary">mapFn</span> : 배열의 모든 요소에 대해 호출 맵핑 함수.(Array.prototype.map())<br />
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
                <h4>
                  <strong>Array.<code>isArray()</code></strong>
                </h4>
                <ul>
                  <li>Array.isArray() 메서드는 인자가 Array인지 판별.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">Array.isArray( obj )</span>, <strong>반환값: boolean값</strong>.<br />
                    * <span class="text-primary">obj</span> : 체크할 객체
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Array.<code>of()</code></strong>
                </h4>
                <ul>
                  <li>Array.of() 메서드는 입력한 인자로 새로운 배열을 생성한다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">Array.of( element0[, element1[, ...[, elementN]]] )</span>, <strong>반환값: 새로운배열</strong>.<br />
                    * <span class="text-primary">element0...N</span> : 배열의 값.
                  </li>
                </ul>
                <pre class="prettyprint linenums">
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>concat()</code></strong>
                </h4>
                <ul>
                  <li>원본 배열에 인자로 넘겨준 배열을 서로 합쳐서 <code>새 배열</code>을 반환한다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.concat( value1[, value1[, ...[, valueN]]] )</span>, <strong>반환값: 새로운배열</strong>.<br />
                    * <span class="text-primary">value0...N</span> : 합쳐질 (배열 또는 값)들.
                  </li>
                  <li>특징1 : 기존 배열을 변경하지 않는다, 인자가 없으면 기존배열을 단순 얕은 복사본 배열을 반환한다.</li>
                  <li>특징2 : 얕은 복사 이므로 내부의 내부 배열이나 객체는 기존 배열의 내부 배열이나 객체와 참조관계를 유지한다.</li>
                </ul>
                <pre class="prettyprint linenums">
const alpha1 = ['a', 'b', 'c'];
const numeric = [1, 2, 3];
alpha1.concat(numeric);
// 결과: ['a', 'b', 'c', 1, 2, 3]

const alpha2 = ['a', 'b', 'c'];
alpha2.concat(1, [2, 3]);
// 결과: ['a', 'b', 'c', 1, 2, 3]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>copyWithin()</code></strong>
                </h4>
                <ul>
                  <li>원본 배열에 특정 index 위치의 값을 다른 index 위치에 복사해서 넣을때 사용</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.copyWithin( target[, start[, end]] )</span>, <strong>반환값: 수정된 원본배열</strong>.<br />
                    * <span class="text-primary">target</span> : 수정될 대상 위치 index값.(음수값을 입력하면 배열 끝에서부터 계산 )<br />
                    * <span class="text-primary">start</span> : 복사할 대상 위치 시작 index값<br />
                    * <span class="text-primary">end</span> : 복사할 대상 위치 끝 index값(넣지 않으면 start부터 뒤로 모두 복사 됨)<br />
                  </li>
                  <li>특징1 : 기존 배열을 변경하지 않는다, 인자가 없으면 기존배열을 단순 얕은 복사본 배열을 반환한다.</li>
                  <li>특징2 : 얕은 복사 이므로 내부의 내부 배열이나 객체는 기존 배열의 내부 배열이나 객체와 참조관계를 유지한다.</li>
                </ul>
                <pre class="prettyprint linenums">
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 TypedArray는 Array의 하위 클래스
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 아직 ES2015를 사용할 수 없는 환경에서
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>entries()</code></strong>
                </h4>
                <ul>
                  <li>원본 배열에 대한 키/값 쌍을 가지는 새로운 <code>Array Iterator</code>객체를 반환한다.</li>
                  <li><span>구문 : </span><span class="text-success">array.entries()</span>, <strong>반환값: 새 Iterator객체</strong>.</li>
                  <li>특징 : 반환된 Iterator객체는 <code>for문</code>에서 유용하게 사용할 수 있음</li>
                </ul>
                <pre class="prettyprint linenums">
// index, element 이터레이팅에 편함.
const a = ['a', 'b', 'c'];
for (const [index, element] of a.entries()) {
  console.log(index, element);
}
// 0 'a'
// 1 'b'
// 2 'c'

// for...of사용
var a2 = ['a', 'b', 'c'];
var iterator = a2.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>every()</code></strong>
                </h4>
                <ul>
                  <li>원본배열이 인자로 넘겨준 함수를 통과하는지 테스트</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.every(callback[, thisArg])</span>, <strong>반환값: boolean</strong>.<br />
                    * <span class="text-primary">callback</span> : 배열 모든요소를 테스트 할 함수. 세가지 인수 받음(currentValue[처리할 현재요소], index[현재index값], array[원본배열])<br />
                    * <span class="text-primary">thisArg</span> : callback안에서 this로 사용할 값<br />
                  </li>
                  <li>특징1 : 빈 배열이면 무조건 true.</li>
                  <li>특징2 : callback결과 모두 true일때만 최종 true이고 나머지는 모두 false.</li>
                </ul>
                <pre class="prettyprint linenums">
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>fill()</code></strong>
                </h4>
                <ul>
                  <li>원본 배열에 첫번째 인자로 주어진 값으로 바꾸는것.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.fill(value[, start[, end]])</span>, <strong>반환값: 수정된 원본 배열</strong>.<br />
                    * <span class="text-primary">value</span> : 변경할 값<br />
                    * <span class="text-primary">start</span> : 시작 index, 기본값은 0<br />
                    * <span class="text-primary">end</span> : 끝 index, 기본값은 this.length<br />
                  </li>
                </ul>
                <pre class="prettyprint linenums">
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]</pre
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
