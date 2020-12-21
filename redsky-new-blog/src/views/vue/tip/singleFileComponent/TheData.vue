<template>
  <div class="row">
    <div class="col-md-12">
      <section class="panel">
        <header class="panel-heading">
          <div class="panel-actions">
            <a href="#" class="fa fa-caret-down"></a>
            <a href="#" class="fa fa-times"></a>
          </div>

          <h2 class="panel-title">Headings</h2>
          <p class="panel-subtitle">All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>
        </header>
        <div class="panel-body">
          <h1>h1. Heading 1</h1>
          <h2>h2. Heading 2</h2>
          <h3>h3. Heading 3</h3>
          <h4>h4. Heading 4</h4>
          <h5>h5. Heading 5</h5>
          <h6>h6. Heading 6</h6>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheData extends Vue {}
</script>
