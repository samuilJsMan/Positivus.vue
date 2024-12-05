import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import NotCreatedPage from '@/components/NotCreatedPage.vue'
const routes: Array<RouteRecordRaw> = [
  //{ path:`/`, redirect:`/home`},
  { path: '/home', component:MainPage},
  { path: `/:notFound(.*)`, component:NotCreatedPage, name:`212`}
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

