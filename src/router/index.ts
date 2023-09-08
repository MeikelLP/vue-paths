import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'

const routes = [
  {
    path: '/dependencies',
    name: 'Dependencies',
    component: () => import('@/views/DependenciesView.vue')
  },
  {
    path: '/dependencies-relative',
    name: 'DependenciesRelative',
    component: () => import('../views/DependenciesView.vue')
  },
  {
    path: '/js-relative',
    name: 'JavascriptRelative',
    component: () => import('../views/ViewJavascript.vue')
  },
  {
    path: '/js',
    name: 'Javascript',
    component: () => import('@/views/ViewJavascript.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  }
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
