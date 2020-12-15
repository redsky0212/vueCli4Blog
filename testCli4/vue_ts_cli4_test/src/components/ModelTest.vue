<template>
  <div>
    <button @click="onClick">값변경</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Model, Vue } from "vue-property-decorator";

@Component
export default class ModelTest extends Vue {
  @Model("change", { type: Number }) private value!: number;

  private onClick(): void {
    const num: number = this.value;
    this.onChange(num + 1);
  }
  @Emit("change")
  private onChange(num: number) {
    return num;
  }
}
</script>

<style></style>
