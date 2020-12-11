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
```vue
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SampleComponent extends Vue {}
</script>
/* // 위 코드의 Vue 객체형식
export default {
  name: 'SampleComponent'
};
*/
```
* @Component데코레이터에 Vue 컴포넌트 객체 자체 옵션을 설정할 수 있다. 
  - 많이사용하는 것들
    - Child Components, Directives, Filters, Mixins, Data, DOM, Life-cycle Hooks, Asset, Configuration
```vue
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
```vue
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SampleComponent extends Vue {
  @Prop(Number) readonly propA: number | undefined
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}
</script>
/* // 위 코드의 Vue 객체형식으로 변환하면...
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
*/
```

## @Watch
* api : @Watch(path: string, opitons: WatchOptions = {})  // 첫번째인자: 모니터링 대상, 두번째인자: 옵션
  - 옵션 immediate: 최초 컴포넌트 생성 시에도 호출할것인지여부
  - 옵션 deep: 모니터링 대상값의 내부까지 모두 모니터링할것인지 여부 (json, array일경우)
* 지정대상을 모니터링해서 값이 변경 되었을때 호출.
* 같은 대상을 여러번 watch하게 코딩이 되었을 경우 맨 마지막 watch만 실행됨.
```vue
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
/* // 위 코드의 Vue 객체형식으로 변환하면...
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
*/
```

## @PropSync
* 일반적으로 @Prop으로 부모로부터 넘겨져 온 값은 자식컴포넌트에서 변경할 수 없다.
* 하지만 부모컴포넌트에서 .sync로 넘어온 props는 @PropSync로 받고 값을 변경할 수 있다.
* @PropSync로 받지않고 일반 @Prop으로 받았을경우에는 update이벤트로 부모props값을 변경할 수 있다.
```vue
<!-- 부모컴포넌트 -->
<!-- 아래 두 코드는 같은 의미의 코드이다. -->
<template>
  <ChildComponent :childValue.sync="value" />
  <ChildComponent :childValue="value" @update:커스텀="value = $event" />
</template>
```
```vue
<!-- 자식컴포넌트 -->
<!-- @PropSync를 사용한 코드 -->
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
```vue
<!-- 자식컴포넌트 -->
<!-- @PropSync를 사용하지 않은 코드 -->
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
```vue
<template>
  <doggie :size.sync="size" />
</template> 
<script>
export default { 
  data: { size: 'little' }
} 
</script>

<!-- children component -->
<!-- 핵심은 input value에 props를 셋팅한것 -->
<template> 
  <input :value="size" @input="$emit('update:size', $event.target.value)" />
</template> 
<script>
export default { props: ['size'], }
</script>
```