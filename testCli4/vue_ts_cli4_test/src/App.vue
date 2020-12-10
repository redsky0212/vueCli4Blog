<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="msg" :prop-test.sync="aaa" :sync-test="bbb" @update:sync-test="changeB" />
    <p style="color:red;">{{ aaa }}</p>
    <p style="color:blue;">{{ bbb }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  private msg = 'Welcome to Your Vue.js + TypeScript App';
  private aaa = 'fjkdsajf';
  private bbb = 'bbb';

  private changeB(val: string) {
    this.bbb = val;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
