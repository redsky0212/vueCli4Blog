<template>
  <input type="text" :value="value" @input="onInput" />
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Model } from "vue-property-decorator";

@Component
export default class TextInput extends Vue {
  @Model("input", { type: String }) readonly value!: string;

  @Emit("input")
  onInput(event: Event) {
    const elem: HTMLInputElement = event.target as HTMLInputElement;
    const val: string = elem.value;
    return val;
  }
}
</script>

<style></style>
