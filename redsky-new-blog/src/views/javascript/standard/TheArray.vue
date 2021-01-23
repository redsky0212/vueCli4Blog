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
            <h2 class="panel-title">
              <strong>Array Method</strong> 요약
              <!-- <span class="text-danger">(사라질 예정)</span> -->
            </h2>
          </header>
          <div class="panel-body">
            <div id="treeBasic">
              <ul>
                <li class="colored-icon" v-for="(menu, index) in menuList" :key="index">
                  <button @click="moveContents" type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn-default" v-html="menu[0]"></button>
                  : {{ menu[1] }}
                </li>
              </ul>
            </div>
          </div>
        </section>
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
                  <li class="arr_desc">Array.from() 메서드는 <strong>유사 배열 객체</strong>나 <strong>반복 가능한 객체</strong>를 얕게 복사해 새로운<code>Array</code>로 만든다.</li>
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
                  <li class="arr_desc">Array.isArray() 메서드는 인자가 Array인지 판별.</li>
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
                  <li class="arr_desc">Array.of() 메서드는 입력한 인자로 새로운 배열을 생성한다.</li>
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
                  <li class="arr_desc">원본 배열에 인자로 넘겨준 배열을 서로 합쳐서 <code>새 배열</code>을 반환한다.</li>
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
                  <li class="arr_desc">원본 배열에 특정 index 위치의 값을 다른 index 위치에 복사해서 넣을때 사용</li>
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
                  <li class="arr_desc">원본 배열에 대한 키/값 쌍을 가지는 새로운 <code>Array Iterator</code>객체를 반환한다.</li>
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
                  <li class="arr_desc">원본배열이 인자로 넘겨준 함수를 통과하는지 테스트</li>
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
                  <li class="arr_desc">원본 배열에 <strong>첫번째 인자 값</strong>을 특정위치에 바꾸는것.</li>
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
              <li>
                <h4>
                  <strong>Array.prototype.<code>filter()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">원본 배열에서 인자로 주어진 함수의 테스트를 통과한 것만 모아서 <code>새 배열</code>로 반환한다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.filter(callback(element[, index[, array]])[, thisArg])</span>, <strong>반환값: 새로운 배열</strong>.<br />
                    * <span class="text-primary">callback</span> : 테스트할 함수. 인자값 element[현재요소], index[현재index], array[호출한 배열]<br />
                    * <span class="text-primary">thisArg</span> : callback함수 안에서 this로 사용할 값.<br />
                  </li>
                </ul>
                <pre class="prettyprint linenums">
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered 는 [12, 130, 44]

/**
 * 검색 조건에 따른 배열 필터링(쿼리)
 */
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>find()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">원본 배열에서 인자로 주어진 함수의 테스트를 통과한 것 중에서 첫번째 요소만 반환.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.find(callback(element[, index[, array]]) [, thisArg])</span>, <strong>반환값: 첫번째 요소 하나</strong>.<br />
                    * <span class="text-primary">callback</span> : 테스트할 함수. 인자값 element[현재요소], index[현재index], array[호출한 배열]<br />
                    * <span class="text-primary">thisArg</span> : callback함수 안에서 this로 사용할 값.<br />
                  </li>
                  <li>특징 : callback함수에 만족하는 첫번째 요소 하나만 반환한다.</li>
                  <li><strong>비슷한 메소드1</strong> : <code>Array.prototype.findIndex()</code> [find()와 똑같으나 반환값이, 찾은 요소의 index값]</li>
                </ul>
                <pre class="prettyprint linenums">
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>findIndex()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc"><code>Array.prototype.find()</code>와 똑같지만 반환값이 찾은 요소의 index값. 만족 index가 없으면 -1 반환.</li>
                </ul>
                <pre class="prettyprint linenums">
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>flat()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">원본 배열이 하위가 깊은 중첩 배열일 경우 평탄화 시켜서 <code>새 배열</code>을 반환 해주는 메소드.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.flat([depth])</span>, <strong>반환값: 새 배열</strong>.<br />
                    * <span class="text-primary">depth</span> : 중첩 배열의 깊이 값. 기본은 1.<br />
                  </li>
                </ul>
                <pre class="prettyprint linenums">
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 배열 구멍 제거
const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]

// flat()메서드를 사용하지 않고 reduce와 concat으로 똑같은 로직 구현한 로직.
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>flatMap()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">원본 배열이 하위가 깊은 중첩 배열일 경우 평탄화 시켜서 <code>새 배열</code>을 반환 해주는 메소드.</li>
                  <li><code>flat()</code>메소드와 똑같으나 depth대신 map함수 실행 결과 반환값을 평탄화 값에 넣는다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.flatMap(callback(element[, index[, array]]) [, thisArg])</span>, <strong>반환값: 새 배열</strong>.<br />
                    * <span class="text-primary">callback</span> : 테스트할 함수. 인자값 element[현재요소], index[현재index], array[호출한 배열]<br />
                    * <span class="text-primary">thisArg</span> : callback함수 안에서 this로 사용할 값.<br />
                  </li>
                  <li>특징 : <code>flat()</code>과 <code>map()</code>를 합쳐놓은 메소드라고 생각하면 됨.</li>
                </ul>
                <pre class="prettyprint linenums">
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

// flatMap은 모든 depth를 평탄화 시키므로 아래와 같이 값이 들어감.
arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// return값을 배열로 감싸면 한 레벨만 평탄화 됨.
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>forEach()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">원본 배열 각각의 요소를 모두 순회하여 callback함수를 실행한다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.forEach(callback(element[, index[, array]]) [, thisArg])</span>, <strong>반환값: undefined</strong>.<br />
                    * <span class="text-primary">callback</span> : 각 요소에 대해 실행할 함수. 인자값 element[현재요소], index[현재index], array[호출한 배열]<br />
                    * <span class="text-primary">thisArg</span> : callback함수 안에서 this로 사용할 값.<br />
                  </li>
                  <li>특징 : 초기화 되지 않은 값요소는 반복callback을 생략한다.</li>
                  <li>특징 : <code>forEach()</code>메소드는 중간에 멈출 수 없다.</li>
                  <li>
                    중간에 멈출 수 있는 반복문 :
                    <code>일반 for문</code>
                    <code>Array.prototype.every()</code>
                    <code>Array.prototype.some()</code>
                    <code>Array.prototype.find()</code>
                    <code>Array.prototype.findIndex()</code>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// 3과7 사이값은 값이 없기때문에 반복에서 제외 되었다.
const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach(function(element){
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)
// 1
// 3
// 7
// numCallbackRuns: 3</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>includes()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">배열이 특정 요소를 포함하고 있는지 여부를 판별.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.includes(value[, fromIndex])</span>, <strong>반환값: boolean</strong>.<br />
                    * <span class="text-primary">value</span> : 찾을 값 (문자일때는 대소문자 구분한다.)<br />
                    * <span class="text-primary">fromIndex</span> : 검색 시작할 index값<br />
                  </li>
                </ul>
                <pre class="prettyprint linenums">
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>indexOf()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">배열에서 지정된요소를 찾고(찾은 첫번째것만), index값을 반환한다. 없으면 -1을 반환한다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.indexOf(searchElement[, fromIndex])</span>, <strong>반환값: 배열 index값</strong>.<br />
                    * <span class="text-primary">searchElement</span> : 찾을 값<br />
                    * <span class="text-primary">fromIndex</span> : 검색 시작할 index값<br />
                  </li>
                </ul>
                <pre class="prettyprint linenums">
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>join()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">배열의 모든 요소를 연결해서 문자열로 만든다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.join([separator])</span>, <strong>반환값: 문자열</strong>.<br />
                    * <span class="text-primary">separator</span> : 각 요소를 합칠때 연결할 구분자<br />
                  </li>
                </ul>
                <pre class="prettyprint linenums">
var a = ['바람', '비', '불'];
var myVar1 = a.join();      // myVar1에 '바람,비,불'을 대입
var myVar2 = a.join(', ');  // myVar2에 '바람, 비, 불'을 대입
var myVar3 = a.join(' + '); // myVar3에 '바람 + 비 + 불'을 대입
var myVar4 = a.join('');    // myVar4에 '바람비불'을 대입</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>keys()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">배열의 index값을 가지는 <code>새 배열</code>을 만든다.</li>
                  <li><span>구문 : </span><span class="text-success">array.keys()</span>, <strong>반환값: Array Iterator</strong></li>
                </ul>
                <pre class="prettyprint linenums">
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2'] // Object는 빈값을 무시한다.
console.log(denseKeys);  // [0, 1, 2] // Array는 빈값을 무시하지 않는다.</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>lastIndexOf()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">배열에서 지정된요소를 찾고(찾은 마지막것만), index값을 반환한다. 없으면 -1을 반환한다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.lastIndexOf(searchElement[, fromIndex])</span>, <strong>반환값: index값</strong>.<br />
                    * <span class="text-primary">searchElement</span> : 찾을 값<br />
                    * <span class="text-primary">fromIndex</span> : 검색 시작할 index값<br />
                  </li>
                </ul>
                <pre class="prettyprint linenums">
var array = [2, 5, 9, 2];
array.lastIndexOf(2);     // 3
array.lastIndexOf(7);     // -1
array.lastIndexOf(2, 3);  // 3
array.lastIndexOf(2, 2);  // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3

// 검색값을 모두 찾기 예제
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>map()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">원본 배열 각각의 요소를 모두 순회하여 callback함수를 실행해서 얻은 값을 반환하고 모아서<code>새 배열</code>을 만든다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.map(callback(element[, index[, array]]) [, thisArg])</span>, <strong>반환값: 새 배열</strong>.<br />
                    * <span class="text-primary">callback</span> : 각 요소에 대해 실행할 함수. 인자값 element[현재요소], index[현재index], array[호출한 배열]<br />
                    * <span class="text-primary">thisArg</span> : callback함수 안에서 this로 사용할 값.<br />
                  </li>
                  <li>특징1 : <code>forEach</code>와 다른점은 새 배열을 만든다는 점이다.</li>
                  <li>특징2 : 원본 배열을 손상하지 않는다.</li>
                </ul>
                <pre class="prettyprint linenums">
// 값을 제곱근 해서 새배열 만들기
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots는 [1, 2, 3]
// numbers는 그대로 [1, 4, 9]

// 배열 속 객체를 재구성 하기
var kvArray = [{key:1, value:10},
               {key:2, value:20},
               {key:3, value: 30}];

var reformattedArray = kvArray.map(function(obj){
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
// reformattedArray는 [{1:10}, {2:20}, {3:30}]
// kvArray는 그대로
// [{key:1, value:10},
//  {key:2, value:20},
//  {key:3, value: 30}]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>pop()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">원본 배열의 <strong>마지막 값</strong>을 제거한다(원본배열손상). 반환값은 제거한 값을 반환.</li>
                  <li><span>구문 : </span><span class="text-success">array.pop()</span>, <strong>반환값: 제거한 값</strong>.<br /></li>
                  <li>특징 : 빈배열은 undefined반환</li>
                </ul>
                <pre class="prettyprint linenums">
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin' ]
console.log(popped); // 'sturgeon'</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>push()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">원본 배열 맨 뒤에 요소를 추가.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.push(element1[, ...[, elementN]])</span>, <strong>반환값: length값</strong>.<br />
                    * <span class="text-primary">elementN</span> : 배열에 추가할 요소<br />
                  </li>
                </ul>
                <pre class="prettyprint linenums">
var sports = ['축구', '야구'];
var total = sports.push('미식축구', '수영');

console.log(sports); // ['축구', '야구', '미식축구', '수영']
console.log(total);  // 4</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>reduce()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">배열에 <strong>리듀서함수</strong>를 실행하여 하나의 결과값을 반환한다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.reduce(callback[, initialValue])</span>, <strong>반환값: 누적계산의 결과값</strong>.<br />
                    * <span class="text-primary">callback(리듀서함수)</span> : 각 요소에 대해 실행할 함수. 인자값 accumulator[누적된값], currentValue[현재값], currentIndex[현재index],
                    array[원본배열]<br />
                    * <span class="text-primary">initialValue</span> : callback처음 호출할때 accumulator에 제공되는 시작값<br />
                  </li>
                </ul>
                <pre class="prettyprint linenums">
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>reduceRight()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">배열에 <strong>리듀서함수</strong>를 실행하여 하나의 결과값을 반환한다.(오른쪽에서 왼쪽으로)</li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>reverse()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">원본 배열의 순서를 반전시킨다. 원본배열손상</li>
                  <li><span>구문 : </span><span class="text-success">array.reverse()</span>, <strong>반환값: 순서가 반전된 배열</strong>.<br /></li>
                </ul>
                <pre class="prettyprint linenums">
const a = [1, 2, 3];
console.log(a); // [1, 2, 3]

a.reverse();
console.log(a); // [3, 2, 1]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>shift()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">원본 배열의 <strong>첫번째 값</strong>을 제거한다(원본배열손상). 반환값은 제거한 값을 반환.</li>
                  <li><span>구문 : </span><span class="text-success">array.shift()</span>, <strong>반환값: 제거한 값</strong>.<br /></li>
                  <li>특징 : 빈배열은 undefined반환</li>
                </ul>
                <pre class="prettyprint linenums">
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ' + myFish);
// "제거전 myFish 배열: angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('myFish after: ' + myFish);
// "제거후 myFish 배열: clown,mandarin,surgeon"

console.log('Removed this element: ' + shifted);
// "제거된 배열 요소: angel"</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>slice()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">배열의 시작index부터 끝index까지 얕은복사를 해서 <code>새로운배열</code>로 반환한다.</li>
                  <li><span>구문 : </span><span class="text-success">array.slice(begin[, end])</span>, <strong>반환값: 추출한 새 배열</strong>.<br /></li>
                  <li>특징1 : 끝index는 포함하지 않는다.</li>
                  <li>특징2 : 끝index를 셋팅하지 않으면 배열의 마지막까지 복사한다.</li>
                </ul>
                <pre class="prettyprint linenums">
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>some()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">배열의 순회하면서 callback함수의 판별결과에 따라 true, false를 반환한다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.some(callback(element[, index[, array]]) [, thisArg])</span>, <strong>반환값: boolean</strong>.<br />
                    * <span class="text-primary">callback</span> : 각 요소에 대해 실행할 함수. 인자값 element[현재요소], index[현재index], array[호출한 배열]<br />
                    * <span class="text-primary">thisArg</span> : callback함수 안에서 this로 사용할 값.<br />
                  </li>
                  <li>특징 : callback함수 결과가 모두 만족되면 true, 하나라도 아니면 false를 반환한다.</li>
                </ul>
                <pre class="prettyprint linenums">
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>sort()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">배열의 순회하면서 적절한 위치에 정렬하여 그 배열을 반환한다. 기본정렬방식은 유니코드 코드 포인트를 따른다.(원본배열손상)</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.sort([compareFunction])</span>, <strong>반환값: 정렬되어진 배열</strong>.<br />
                    * <span class="text-primary">compareFunction</span> : 정렬 순서를 정의하는 함수<br />
                  </li>
                  <li>특징 : compareFunction이 없으면 문자열로 변환하여 유니코드 코드 포인트 순서로 문자열을 비교하여 정렬한다.</li>
                  <li>
                    compareFunction
                    <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">[Array Sort메서드 참조]</a>
                    <ul>
                      <li>compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.</li>
                      <li>
                        compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다. 참고 : ECMAscript 표준은 이러한 동작을 보장하지 않으므로 모든
                        브라우저(예 : Mozilla 버전은 적어도 2003 년 이후 버전 임)가 이를 존중하지는 않습니다.
                      </li>
                      <li>compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다.</li>
                      <li>compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야합니다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다.</li>
                    </ul>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>splice()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">기존 배열에 값을 삭제, 추가 교체 를 하여 변경한다.</li>
                  <li>
                    <span>구문 : </span><span class="text-success">array.splice(start[, deleteCount[, item1[, item2[, ...]]]])</span>, <strong>반환값: 제거된 요소를 가지고있는 배열</strong>.<br />
                    * <span class="text-primary">start</span> : 변경을 시작할 index값<br />
                    * <span class="text-primary">deleteCount</span> : 시작index에서 부터 제거할 요소의 수.<br />
                    * <span class="text-primary">item1, item2...</span> : 배열에 추가할 요소. 아무것도 없으면 제거만 한다.<br />
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// 사이에 'drum' 끼워넣기
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

// 3번째 한개 제거
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]</pre
                >
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>toLocaleString()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">...</li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>toSource()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">...</li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>toString()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">...</li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>unshift()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">...</li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>Array.prototype.<code>values()</code></strong>
                </h4>
                <ul>
                  <li class="arr_desc">...</li>
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
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TheSlot extends Vue {
  private menuList = [];

  private mounted() {
    this.getArrayMethodList();
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

  private getArrayMethodList() {
    const elem: HTMLElement[] = Array.from(document.querySelectorAll('li>h4>strong'));
    const elemDesc: HTMLElement[] = Array.from(document.querySelectorAll('.arr_desc'));
    const returnArr: any[] = [];
    elem.forEach((el: HTMLElement, index) => {
      const str = el.textContent as string;
      const idx: number = str.lastIndexOf('.');
      const first = str.substr(0, idx + 1);
      const last = str.substr(idx + 1);
      returnArr.push([`${first}<strong><code>${last}</code></strong>`, elemDesc[index].textContent as string]);
    });
    this.$set(this, 'menuList', returnArr);
  }

  private moveContents(e: Event) {
    const elem: HTMLElement[] = Array.from(document.getElementsByTagName('h4'));
    const contents: string = (e.currentTarget as HTMLElement).textContent as string;
    const arr = elem.filter((el: HTMLElement) => {
      if ((el.textContent as string).trim() === contents.trim()) {
        return el;
      }
    });

    if (arr.length > 0) {
      const element: HTMLElement = arr[0];
      const y = element.getBoundingClientRect().top + window.scrollY - 130;
      window.scroll({
        top: y,
        behavior: 'smooth',
      });
    }
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
div.panel-body {
  scroll-margin-top: 300px;
}
</style>
