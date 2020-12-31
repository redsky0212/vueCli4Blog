<template>
  <button>
    <slot>기본값</slot>
  </button>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheSlotChild extends Vue {}
</script>
