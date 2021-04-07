import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import App from './App.vue'
import router from './router'
import Multiselect from 'vue-multiselect'
import dlgs from '@/components/dlgs';

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.component('multiselect', Multiselect)

Vue.prototype.$dlgs = dlgs;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

import './common/axiosSetup.js'
//    "@vue/cli-plugin-babel": "^4.5.9",  添加jsx支持必须有babel插件, core-js