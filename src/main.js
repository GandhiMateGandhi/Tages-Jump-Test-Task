import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vSelect from 'vue-select'
import "vue-select/src/scss/vue-select.scss";

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
