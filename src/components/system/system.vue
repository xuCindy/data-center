<template>
  <div class="system">
    <container>
      <sidebar :list="list"></sidebar>
    </container>
  </div>
</template>

<script type="text/ecmascript-6">
  import Sidebar from 'components/sidebar/sidebar'
  import Container from 'base/container/container'

  export default {
    data() {
      return {
        isShow: true,
        list: [
          {
            text: '角色管理',
            path: '/s-role',
          },
          {
            text: '接口管理',
            path: '/s-interface',
          },
          {
            text: '功能管理',
            path: '/s-func',
          },
          {
            text: '数据接入管理',
            path: '/s-access',
          },
          {
            text: '代码表管理',
            path: '/s-code',
          },
          {
            text: '共享请求系统管理',
            path: '/s-request',
          },
          {
            text: '共享接口信息管理',
            path: '/s-info',
          },
          {
            text: '共享数据管理',
            path: '/s-data',
          }
        ]
      }
    },
    components: {
      Sidebar,
      Container
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
