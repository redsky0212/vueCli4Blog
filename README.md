# vue 2, cli 4, nuxt X, 
* vue.js 끝장내기 실무 강좌 이 후 블로그 작성 예정 
## vue cli 4를 사용한 환경설정.
* vue cli가 설치되어있지 않다면 설치한다.
```
// cli가 설치되어있지 않다면 설치한다.
npm i @vue/cli -g
```
* vue프로잭트를 생성한다.
```
// vue 프로젝트 생성
vue create 생성프로젝트 폴더명
// vue 2, vue 3 선택 여부에 따라 코딩 방식과 지원되는 vue api가 다르기 때문에 상황에 맞게 메뉴얼로 선택하여 설치한다.
```
  - 여기서는 vue2, typescript, class방식코딩, eslint+prettier선택.
  - 프로잭트를 vue3으로 생성하면 새로운 api와 코딩방식이 좀 달라지므로 유의한다.
* typescript, class방식으로 진행할것이므로 아래 라이브러리를 추가 설치한다.
```
npm i vue-class-component vue-property-decorator
```
* vue cli로 설치했을경우 기본 src폴더를 alias "@"를 사용하여 루트로 바로 사용할 수 있다.
```javascript
import HelloComponent from '@/components/HelloComponent.vue';
```
* 기본 alias를 변경하고자 할때는 아래와 같은 방법으로 고쳐서 사용할 수 있다.
```javascript
// 아래 처럼 "@"가 아닌 "~"(물결 표시) 같은 별칭을 추가해서 사용할 수 있습니다.
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve("src"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
// 또는 아래와 같이 적용할 수도있다.
// 상단의 변수에 경로를 적어 따로 추가해서 사용할 수도 있습니다.
const path = require("path");
const vueSrc = "./src";

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, vueSrc),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
  outputDir: "./express/public",
};
```
* scss 사용 설정
  - vue-loader 덕분에 scss를 SFC에서 사용할 수 있다.
  - scss관련모듈설치
    - npm i -D node-sass sass-loader
  - 사용코드예제
  ```css
  // SFC에서 사용
  <style land="scss">
  $backgroundColor: red;
  
  .className: {
    background: $backgroundColor;
  }
  </style>

  // 전역 법위에서 사용방법
  // 하지만 이렇게 하면 계속 파일마다 반복적으로 넣어줘야한다.
  <style land="scss">
  @import "@/style/variables";
  @import "@/style/mixin";
  @import "@/style/functions";
  </style>

  // 전역 범위에서 사용방법 vue.config.js설정으로 적용
  // 이렇게 하면 모든 파일에서 다 전역으로 쓸 수 있다.
  // vue.config.js
  module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/_mixins.scss";
                `
            }
        }
    }
  }
  // 전역 설정된 scss사용방법 내용아래
  // style.variables.scss
  $bgColor: red;
  // .vue
  <script lang="scss">
    .className {
        background: $bgColor;
    }
  </script>
  ```

# vue-property-decorator 사용
* vue-property-decorator는 vue-class-component를 기반으로 제작되었다.
* 참조 url
  - [http://ccambo.github.io/Dev/Vue/6.How-to-use-vue-property-decorator/](http://ccambo.github.io/Dev/Vue/6.How-to-use-vue-property-decorator/)
## @Component
* (vue-class-component)의 데코레이터이다.
* javascript의 class를 Vue가 인식할 수 있게 변환하는 데코레이터.
```javascript
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SampleComponent extends Vue {}
</script>

// 위 코드의 Vue 객체형식
export default {
  name: 'SampleComponent'
};
```
* @Component데코레이터에 Vue 컴포넌트 객체 자체 옵션을 설정할 수 있다. 
  - 많이사용하는 것들
    - Child Components, Directives, Filters, Mixins, Data, DOM, Life-cycle Hooks, Asset, Configuration
```javascript
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    AppButton,
    ProductList
  },
  directives: {
    resize
  },
  filters: {
    dateFormat
  },
  mixins: [
    PageMixin
  ]
})
export default class SampleComponent extends Vue {}
</script>
```

## @Prop
* api : @Prop(options: (PropOptions | Constructor[] | Constructor) = {})
* 부모컴포넌트가 넘겨준 값
* 넘겨받은 props는 항상 `type, default, required`의 validate는 사용하는게 좋음.
```javascript
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SampleComponent extends Vue {
  @Prop(Number) readonly propA: number | undefined
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}
</script>
// 위 코드의 Vue 객체형식으로 변환하면...
<script>
export default {
  name: 'SampleComponent',
  props: {
    propA: {
      type: Number
    },
    propB: {
      default: 'default value'
    },
    propC: {
      type: [String, Boolean]
    }
  }
};
</script>
```

## @Watch
* api : @Watch(path: string, opitons: WatchOptions = {})  // 첫번째인자: 모니터링 대상, 두번째인자: 옵션
  - 옵션 immediate: 최초 컴포넌트 생성 시에도 호출할것인지여부
  - 옵션 deep: 모니터링 대상값의 내부까지 모두 모니터링할것인지 여부 (json, array일경우)
* 지정대상을 모니터링해서 값이 변경 되었을때 호출.
* 같은 대상을 여러번 watch하게 코딩이 되었을 경우 맨 마지막 watch만 실행됨.
```javascript
<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

@Component
export default class SampleComponent extends Vue {
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  @Watch('person', { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch('person')
  onPersonChanged2(val: Person, oldVal: Person) {}
}
</script>

// 위 코드의 Vue 객체형식으로 변환하면...
<script>
export default {
  name: 'SampleComponent',
  watch: {
    child: [
      {
        handler: 'onChildChanged',
        immediate: false,
        deep: false
      }
    ],
    person: [
      {
        handler: 'onPersonChanged1',
        immediate: true,
        deep: true
      },
      {
        handler: 'onPersonChanged2',
        immediate: false,
        deep: false
      }
    ]
  },
  methods: {
    onChildChanged(val, oldVal) {},
    onPersonChanged1(val, oldVal) {},
    onPersonChanged2(val, oldVal) {}
  }
};
</script>
```

## @PropSync
* 일반적으로 @Prop으로 부모로부터 넘겨져 온 값은 자식컴포넌트에서 변경할 수 없다.
* 하지만 부모컴포넌트에서 .sync로 넘어온 props는 @PropSync로 받고 값을 변경할 수 있다.
* @PropSync로 받지않고 일반 @Prop으로 받았을경우에는 update이벤트로 부모props값을 변경할 수 있다.

```javascript
// <!-- 부모컴포넌트 -->
// <!-- 아래 두 코드는 같은 의미의 코드이다. -->
<template>
  <ChildComponent :childValue.sync="value" />
  <ChildComponent :childValue="value" @update:커스텀="value = $event" />
</template>
```
```javascript
// <!-- 자식컴포넌트 -->
// <!-- @PropSync를 사용한 코드 -->
<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class SampleComponent extends Vue {
  @PropSync('value', { type: String }) 변수명1: string;
  ...
  // 화면 상황에 따라 특정 값 변경 적용
  updateValue(newVal: string) {
    this.변수명1 = newVal;   // 이 시점에서 부모 컴포넌트로 전달된다.
  }
}
</script>
```
```javascript
// <!-- 자식컴포넌트 -->
// <!-- @PropSync를 사용하지 않은 코드 -->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SampleComponent extends Vue {
  @Prop() value: string;
  ...
  // 화면 상황에 따라 값 변경 적용
  updateValue(newVal: string) {
    this.$emit('update:커스텀', newVal);  // 값 설정 및, 부모 컴포넌트로 이벤트 전달
  }
}
</script>
```
* 아래와 같이 사용할 수도있다.
```javascript
<template>
  <doggie :size.sync="size" />
</template> 
<script>
export default { 
  data: { size: 'little' }
} 
</script>

// <!-- children component -->
// <!-- 핵심은 input value에 props를 셋팅한것 -->
<template> 
  <input :value="size" @input="$emit('update:size', $event.target.value)" />
</template> 
<script>
export default { props: ['size'], }
</script>
```

## @Emit
* api: @Emit(eventName?: string)
* 부모에 설정된 event를 실행시키는 this.$emit의 데코레이터
  - 자식컴포넌트에서 @Emit의 인자로 eventName을 넘겨주지 않았을경우 메서드명이 이벤트명이 된다.
    - `메서드명의 카멜케이스는 부모컴포넌트에서는 캐밥케이스로 사용해줘야 한다.`
  - 자식컴퍼넌트에서 @Emit의 인자로 eventName을 넘겨줬을때는 넘겨준 eventName을 그대로 사용해줘야한다.
```javascript
// <!-- 부모컴포넌트 -->
<template>
  <HelloWorld @test-emit="emitHandler" />
</template>
<script lang="ts">
export default 부모컴포넌트 extends Vue {
  private emitHandler(val: string) {
    alert(val);
  }
}
</script>
```
```javascript
// <!-- 자식컴포넌트 -->
<template>
  <button @click="testEmit">emit테스트버튼</button>
</template>
<script lang="ts">
import { Vue, Emit, Component } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

  @Emit()
  private testEmit() {
    return 'aaaaaaaa';
  }
  // 또는 아래와 같이 사용한다.
  // @Emit('test-emit')
  // private testEmit() {
  //   return 'aaaaaaaa';
  // }

}
</script>
```
## @Ref
* api: @Ref(refKey?: string)
* $refs 와 대응되는 데코레이터.
* @Ref를 사용함으로 인하여 오타나 수정 관리가 더 쉬워진다.
* refKey를 인자로 넘겨주고 컴포넌트내부에서는 새로운 변수로 설정해서 사용할 수도있다.
```javascript
<template>
  <ChildComponent ref="childComponent" />
  <button ref="submitButton">submit버튼</button>
</template>
<script lang="ts">
import { Vue, Ref, Component } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

  @Ref() childComponent: ChildComponent;
  @Ref() submitButton: HTMLButtonElement;
  // 또는
  // @Ref('submitButton') submitButtonVar!: HTMLButtonElement; 
  // this.submitButtonVar 로 사용한다.

  private mounted() {
    // 자식컴포넌트의 내부 메서드 사용.
    this.childComponent.updateValue();
    // HTML Element의속성사용
    this.submitButton.focus();
  }

}
</script>
```

## @Model
* @Model데코레이터를 알기전에 v-model을 먼저 알아야한다.
* v-model
  - Form 요소의 양방향 데이타를 할 수 있다.
  - 컴포넌트에서는 v-model로 넘겨준 데이타를 양방향 연결을 한다.
  - 부모로부터 넘겨받은 props을 자식에서는 event로 올려줘서 데이터를 양방향으로 적용할 수 있다.
  - 이렇게 매번 props와 event로 값변경, 유지 하는것을 좀 더 간편하게 하는게 v-model이다.
  ```javascript
  // <!-- v-model을 사용하지 않은 소스 -->
  <template>
    <input type="text" :value="inputVal" @input="changeValue" />
  </template>
  <script lang="ts">
  export default class Test extends vue {
    private inputVal = '';

    private changeValue(event: any) {
      const elem: HTMLInputElement = event.target as HTMLInputElement;
      const val: string = elem.value;
      this.inputVal = val;
    }
  }
  </script>
  
  // <!-- v-model로 사용한 소스 -->
  <template>
    <input type="text" v-model="inputVal" />
  </template>
  <script lang="ts">
  export default class Test extends vue {
    private inputVal = '';
  }
  </script>
  ```
  - 위와같이 v-model을 사용하면 짧은 소스로 양방향 데이타 연계를 할 수 있다.
* 각각 Form요소마다 v-model적용시 사용되는 props, event 내용
```
input : (props: value, event: input)
input(checkbox, radio) : (props: checked, event: change)
select : (props: value, event: change)
```
* v-model사용시 문제점
  - IME입력(한글) 시 한글자 입력이 완료되어야 데이타에 적용되어서 한타임씩 늦게 적용되는듯한 현상이 있습니다. (이런경우에는v-model을 사용하지 않고 props, event를 직접연결해서 사용하기를 권고하고있습니다.)
  - 그래도 v-model로 사용하고자 할때는 input을 커스텀 컴포넌트로 만들어서 하는 방법도 있습니다.
  ```javascript
  // <!-- CustomInput.vue -->
  <template>
    <input :value="value" @input="onInput">
  </template>
  <script lang="ts">
  export default class Test extends vue {
    @Prop() value: string

    @Emit('input')
    private onInput(event: any) {
      const elem: HTMLInputElement = event.target as HTMLInputElement;
      const val: string = elem.value;
      return val;
    }
  }
  </script>

  // <!-- 부모컴포넌트에서 사용하는 예제 -->
  <template>
    <CustomInput v-model="inputVal" />
  </template>
  ```
  - input태그의 value값 변경으로 인하여 무한루프 또는 props변경관련 에러가 발생할 수 있다.
* @Model 사용해보기
  - api: @Model(event?: string, options:(PropOptions | Constructor[] | Constructor) = {}) 데코레이터
  - 그냥 input, input type=checkbox, radio, select 같은 tag에서 사용할때는 v-model attribute로 사용하면 된다.
  - 컴포넌트에 v-model로 속성을 넘겨줬을때 그 자식 컴포넌트에서 @Model을 사용하여 아래와 같이 사용하면 된다.
  ```javascript
  // 예제
  @Model('change', {type: Boolean}) checked!: boolean;
  // 위 예제는 아래 소스와 같은 의미이다
  export default {
    model: {
      prop: 'checked',
      event: 'change',
    },
    props: {
      checked: {
        type: Boolean,
      }
    }
  }
  ```
   ```javascript
  // 위와같이 model을 선언하고 사용하는 예제 소스
  // Tag는 일반 Tag이든 input, select Tag이든 사용법은 같다.
  <template>
    <div>
      <button @click="onClick">값변경</button>
    </div>
  </template>

  <script lang="ts">
  import { Component, Emit, Model, Vue } from "vue-property-decorator";

  @Component
  export default class ModelTest extends Vue {
    // 일반적으로 input, select태그에서 기본 설정되는 props, event는 있으나 아래와 같이 직접 이벤트를 설정해주면 그것을 사용한다.
    @Model("change", { type: Number }) private value!: number;

    @Emit("change")
    private onChange(num: number) {
      return num;
    }

    private onClick(event: Event): void {
      const num: number = this.value;
      this.onChange(num + 1);
    }
  }
  </script>
  ```
  ## @Provide / @Inject
  * props와 같은 부모로부터 받은 값을 자식으로 전달해주는 역할을 한다.
  * props와 다른것은 바로 직계 부모가 아닌 한참 위 부모로 부터도 데이터를 받을 수 있다는것이 차이점.
  * 일반적인 컴포넌트에서는 사용하지 않고 드러내지 않고 고급 라이브러리 개발 등 과 같은 특수한 경우에 사용.
  * 이것은 반응형이 아니다. 반응형으로 사용할때는 `@ProvideReactive / @InjectReactive`를 사용한다.
  * 부모가 Provide로 전해주고 자식이 Inject로 받는다.
  * 참조
    - [https://medium.com/witinweb/vue-js-provide-inject-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-743502dbb449](https://medium.com/witinweb/vue-js-provide-inject-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-743502dbb449)
    - [https://github.com/kaorun343/vue-property-decorator#Provide](https://github.com/kaorun343/vue-property-decorator#Provide)

## input tag buffer관련소스정리(그냥참조용)
* 아이폰의 커스텀 삭제버튼이 있는경우 처리 소스
```javascript
<input type="test" id="testInput" />
<button onclick="testFocus()">포커스이동</button>

function testFocus() {
  clearBuffer(document.getElementById('testInput));
}
function clearBuffer(currentInput) {
  var elem = document.createElement('INPUT');
  elem.type = 'text';
  elem.id = 'hidden_input_element';
  elem.style.position = 'absolute';
  elem.style.top = '-1000px';
  document.body.appendChild(elem);
  currentInput.value = '';
  document.getElementById('hidden_input_element').focus();
  currentInput.focus();
  document.getElementById('hidden_input_element').remove();
}
```