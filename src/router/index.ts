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
    path: '/message',
    component: () => import('@/views/message.vue'),
    meta: {
      title: '电子信箱'
    }
  },
  {
    path: '/msg',
    redirect: '/message'
  },
  {
    path: '/mail',
    redirect: '/message'
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/notfound.vue'),
    meta: {
      title: '404 Error - Page Not Found',
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
  const websiteName = window.title

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
