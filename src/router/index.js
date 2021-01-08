import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Test', component: Test},
  { path: '/radio', name: 'Radio', component: ()=>import('../views/RadioTest.vue')},
  { path: '/Home', name: 'Home', component: Home},
  { path: '/about', name: 'About',
      // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
