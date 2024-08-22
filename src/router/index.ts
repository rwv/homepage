import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SupportMeView from '@/views/SupportMeView.vue'
import WeChatSponsorCodeView from '@/views/WeChatSponsorCodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: SupportMeView
    },
    {
      path: '/sponsor/wechat',
      name: 'sponsorWechatCode',
      component: WeChatSponsorCodeView
    },
    // Redirect to Blog
    {
      path: '/:year(2\\d{3})/:month(\\d{2})/:day(\\d{2})/:any(.*)*',
      redirect: (to) => {
        const pathname = to.path
        const blogUrl = `https://blog.rwv.dev${pathname}`
        location.replace(blogUrl)
        return '/'
      }
    },
    {
      // /search/screens -> /search?q=screens
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
