<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    
    <span>{{ propTest2 }}</span>
    <input type="text" value="" @input="onChange" />
    <span>{{ testbbb }}</span>
    <input type="text" :value="testbbb" @input="onChange2" />
    <button @click="testEmit">testEmit</button>
    <input type="text" value="" ref="testRef" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, PropSync, Ref, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @PropSync('test') propTest2!: string;
  @Prop() testbbb!: string;

  @Emit('test-emit')
  private testEmit() {
    this.refVar.focus();
    return 'aaaaaa';
  }

  @Ref('testRef') readonly refVar!: HTMLInputElement;

  private onChange( event: any ) {
    const elem: HTMLInputElement = event.target as HTMLInputElement;
    const val: string = elem.value;
    this.propTest2 = val;
  }
  
  private onChange2( event: any ) {
    const elem: HTMLInputElement = event.target as HTMLInputElement;
    const val: string = elem.value;
    console.log('1=====>' + val);
    this.$emit('uptate:testbbba', val);
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
