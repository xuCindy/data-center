import Vue from 'vue'
import Router from 'vue-router'

const Access = () => import('components/access/access')
const Retrieval = () => import('components/retrieval/retrieval')
const Analysis = () => import('components/analysis/analysis')
const Relation = () => import('components/relation/relation')
const System = () => import('components/system/system')
const User = () => import('components/user/user')
// 系统管理
const SystemRole = () => import('components/system/role/role')
const SystemInterface = () => import('components/system/interface/interface')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/retrieval'
    },
    {
      path: '/access',
      component: Access,
      name: 'access'
    },
    {
      path: '/retrieval',
      component: Retrieval
    },
    {
      path: '/analysis',
      component: Analysis
    },
    {
      path: '/relation',
      component: Relation
    },
    {
      path: '/system-role',
      component: System,
      children: [
        {
          path: '/system-role',
          component: SystemRole
        },
        {
          path: '/system-interface',
          component: SystemInterface
        }
      ]
    },
    {
      path: '/user',
      component: User
    }
  ]
})
