import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

//    "@vue/cli-plugin-babel": "^4.5.9",  添加jsx支持必须有babel插件, core-js