<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <span>{{ propTest2 }}</span>
    <input type="text" value="" @input="onChange" />
    <span>{{ testbbb }}</span>
    <input type="text" :value="testbbb" @input="onChange2" />
    <button @click="testEmit">testEmit</button>
    <input type="text" value="" ref="testRef" />
    <h2>v-model 테스트</h2>
    <input type="text" v-model="vmodelTestVar" />
    <p><span>현재 vmodelTestVar값 : </span>{{ vmodelTestVar }}</p>
    <h2>TextInput 컴포넌트로 v-model사용법</h2>
    <text-input v-model="vmodelTestVar" />
    <model-test v-model="modelTestVar2" />
    <p><span>@Model을 사용한 count값변경: </span>{{ modelTestVar2 }}</p>
  </div>
</template>

<script lang="ts">
import TextInput from "@/components/TextInput.vue";
import ModelTest from "@/components/ModelTest.vue";
import {
  Component,
  Emit,
  Prop,
  PropSync,
  Ref,
  Vue
} from "vue-property-decorator";

@Component({
  components: {
    TextInput,
    ModelTest
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @PropSync("test") propTest2!: string;
  @Prop() testbbb!: string;

  private vmodelTestVar = "a";
  private modelTestVar2 = 0;

  @Emit("test-emit")
  private testEmit() {
    this.refVar.focus();
    return "aaaaaa";
  }

  @Ref("testRef") readonly refVar!: HTMLInputElement;

  private onChange(event: any) {
    const elem: HTMLInputElement = event.target as HTMLInputElement;
    const val: string = elem.value;
    this.propTest2 = val;
  }

  private onChange2(event: any) {
    const elem: HTMLInputElement = event.target as HTMLInputElement;
    const val: string = elem.value;
    console.log("1=====>" + val);
    this.$emit("uptate:testbbba", val);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
