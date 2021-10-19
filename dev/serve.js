import Vue from 'vue';
import Dev from './serve.vue';
import router from './router'

import '@/assets/styles/index.css';

import SvgIcon from '@/components/SvgIcon.vue';
Vue.component('svg-icon', SvgIcon)

// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import FeComponents from '@/entry.esm';
Vue.use(FeComponents);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(Dev),
}).$mount('#app');
