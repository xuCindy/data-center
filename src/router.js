import Vue from 'vue'
import Router from 'vue-router'

const Access = () => import('components/access/access')
const Retrieval = () => import('components/retrieval/retrieval')
const Analysis = () => import('components/analysis/analysis')
const Relation = () => import('components/relation/relation')
const System = () => import('components/system/system')
const User = () => import('components/user/user')
const Login = () => import('components/login/login')
// 系统管理
const SRole = () => import('components/system/s-role/s-role')
const SInterface = () => import('components/system/s-interface/s-interface')
const SAccess = () => import('components/system/s-access/s-access')
const SFunc = () => import('components/system/s-func/s-func')
const SCode = () => import('components/system/s-code/s-code')
const SRequest = () => import('components/system/s-request/s-request')
const SInfo = () => import('components/system/s-info/s-info')
const SData = () => import('components/system/s-data/s-data')


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
      path: '/s-role',
      component: System,
      children: [
        {
          path: '/s-role',
          component: SRole,
          meta: {
            topMenu: 'system'
          }
        },
        {
          path: '/s-interface',
          component: SInterface,
          meta: {
            topMenu: 'system'
          }
        },
        {
          path: '/s-access',
          component: SAccess,
          meta: {
            topMenu: 'system'
          }
        },
        {
          path: '/s-func',
          component: SFunc,
          meta: {
            topMenu: 'system'
          }
        },
        {
          path: '/s-code',
          component: SCode,
          meta: {
            topMenu: 'system'
          }
        },
        {
          path: '/s-request',
          component: SRequest,
          meta: {
            topMenu: 'system'
          }
        },
        {
          path: '/s-info',
          component: SInfo,
          meta: {
            topMenu: 'system'
          }
        },
        {
          path: '/s-data',
          component: SData,
          meta: {
            topMenu: 'system'
          }
        }
      ]
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
