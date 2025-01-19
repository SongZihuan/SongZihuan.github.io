import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { clearPlaceholderLoading } from '@/utils/placeholder-loading'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/index',
    redirect: '/'
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/notfound.vue'),
    meta: {
      title: '4404 Error - Page Not Found',
      wechat: true,
      notfound: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta.title && typeof to.meta.title === 'string') {
    document.title = to.meta.title
  }
  clearPlaceholderLoading()
})
export default router
