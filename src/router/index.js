import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Tool from '../tools/MappingTool.vue'
import QrcodeList from '../tools/QrcodeList.vue'
import NestView from '../views/NestView.vue'
import ChildView1 from '../views/ChildView1.vue'
import ChildView2 from '../views/ChildView2.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Test', component: Test},
  { path: '/tool', name: 'Tool', component: Tool},
  // { path: '/radio', name: 'Radio', component: ()=>import('../views/RadioTest.vue')},
  { path: '/Home', name: 'Home', component: Home},
  { path: '/about', name: 'About',
      // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // { path: '/css', name: 'CSS', component: () => import('../views/CSS.vue')},
  { path: '/nested', name: 'Nested', component: NestView,
    children: [
      {path: 'c1', name: 'ChildView1', component: ChildView1, children: [{path: 'c2', name: 'ChildView2', component: ChildView2},]}
    ]
  },
  { path: '/qrcode', name: 'Qrcode', component: QrcodeList}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
