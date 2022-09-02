import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from '@/router/index'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(Router)





new Vue({
  render: h => h(App),
  router
}).$mount('#app')
