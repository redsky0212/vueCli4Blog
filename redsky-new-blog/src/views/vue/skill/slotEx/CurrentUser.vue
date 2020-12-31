<template>
  <div class="container">
    <header>
      <slot name="header" :slotdata="user"></slot>
    </header>
    <main>
      <slot :slotdata="user"></slot>
    </main>
    <footer>
      <slot name="footer" :slotdata="user"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CurrentUser extends Vue {
  private user: any = { firstName: 'aaa', lastName: 'bbb' };
}
</script>
