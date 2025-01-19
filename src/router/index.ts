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
  const websiteName = import.meta.env.VITE_WEBSITE_NAME

  if (to.meta.title && typeof to.meta.title === 'string') {
    if (websiteName !== '') {
      document.title = websiteName + '-' + to.meta.title
    } else {
      document.title = to.meta.title
    }
  } else if (websiteName !== '') {
    document.title = websiteName
  } else {
    document.title = 'Hello'
  }
  clearPlaceholderLoading()
})
export default router
