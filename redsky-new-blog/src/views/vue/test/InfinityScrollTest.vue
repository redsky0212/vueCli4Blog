<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>Vue를 이용한 화면에서 Vuex와 함께 무한 스크롤 로딩을 구현 테스트.</strong></p>
    </blockquote>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              웹서핑 검색중 하나의 소스 참조<br />
              <a href="https://stackoverflow.com/questions/41830731/push-to-vuex-store-array-not-working-in-vuejs" target="_blank">
                https://stackoverflow.com/questions/41830731/push-to-vuex-store-array-not-working-in-vuejs
              </a>
              <!-- <span class="text-danger">(사라질 예정)</span> -->
            </h2>
            <p class="panel-subtitle"><code>vue 무한스크롤 검색</code></p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>Vuex Store</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><strong>Vuex Store</strong>에 <code>customers</code>라는 object[] 타입의 배열이 있다고 가정.</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>customers</code>상태값에 계속 추가해서 값을 넣는 <code>addCustomer mutation</code>을 생성.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
var store = new Vuex.Store({
  state: {
    customers: [
      { id: '1', name: 'user 1',},
    ]
  },
  mutations: {
     addCustomer (state, customer) {
      // mutate state
      state.customers.push(customer)
    }
  }
})</pre
                >
              </li>
              <li>
                <h4>
                  <strong>vue 화면쪽 부분</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">vue 화면쪽 mounted에서 ajax호출 후 값을 추가해서 넣는 소스</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
mounted: function() {
  this.$http.get('http://localhost/facebook-login/api/get_customers.php')
  .then(response => {
    return response.data;
  })
  .then(data => {
    store.commit('addCustomer', { id: '2', name: 'User 2'})
  });
}</pre
                >
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'InfinityScrollTest',
})
export default class InfinityScrollTest extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>
