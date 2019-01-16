<template>
  <div class="user">
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
        list: [
          {
            text: '用户列表',
            path: '/user-list',
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
