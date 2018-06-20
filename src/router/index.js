import Vue from 'vue'
import Router from 'vue-router'
import Paging from '@/components/Paging'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '分页',
      component: Paging
    }
  ]
})
