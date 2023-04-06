import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'

Vue.use(VueRouter)

const routes = [
  { path: '/main', component: MainPage },
  { path: '/', redirect: '/main' }
]

const router = new VueRouter({
  routes
})

export default router
