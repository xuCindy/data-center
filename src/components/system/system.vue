<template>
  <div class="system">
     <div class="system-left">
       <sidebar :list="list"></sidebar>
    </div>
    <div class="system-right">
      <router-view/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Sidebar from 'components/sidebar/sidebar'

  export default {
    data() {
      return {
        list: [
          {
            text: '角色管理',
            path: '/system-role',
          },
          {
            text: '接口管理',
            path: '/system-interface',
          },
          {
            text: '功能管理',
            path: '/system-role',
          },
          {
            text: '数据接入管理',
            path: '/system-role',
          },
          {
            text: '代码表管理',
            path: '/system-role',
          },
          {
            text: '共享请求系统管理',
            path: '/system-role',
          },
          {
            text: '共享接口信息管理',
            path: '/system-role',
          },
          {
            text: '共享数据管理',
            path: '/system-role',
          }
        ]
      }
    },
    components: {
      Sidebar
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  .system
    display: flex
    .system-left
      width: 268px
      height 100%
      padding-top: 30px
      overflow: hidden
      text-align: left
      background: $color-background-leftSide
      border-right: 1px solid $color-border-leftSide
    .system-right
      flex: 1
</style>
