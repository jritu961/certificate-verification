import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import router from '@/router/index';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.prototype.$spinner = {
    color: 'rgb(51, 102, 255)',
    backgroundColor: 'white',
    blur: '9px',
    height: 100,
    width: 100,
};
Vue.use(VueLoading);

Vue.use(Router);
Vue.use(Toast, { timeout: 2000, position: POSITION.TOP_CENTER });

new Vue({
    VueLoading,
    render: (h) => h(App),
    router,
}).$mount('#app');