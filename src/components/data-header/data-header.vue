<template>
  <div class="header">
    <div class="logo">
      <img src="./img/logo.png" width="44" height="44" class="logo-img"/>
      <h1 class="logo-text">全国固定污染源数据中心</h1>
    </div>
    <div class="tab">
      <router-link
        tag="div"
        v-if="userInfo.roleId !== 3"
        class="tab-item"
        to="/access"
        :class="{active: this.$route.meta.topMenu === 'access'}"
      >
        <img src="./img/monitor.png" class="tab-img"/>
        <span class="tab-link">数据接入</span>
      </router-link>
      <router-link
        tag="div"
        class="tab-item"
        to="/retrieval"
        :class="{active: this.$route.meta.topMenu === 'retrieval'}"
      >
        <img src="./img/search.png" class="tab-img"/>
        <span class="tab-link">数据检索</span>
      </router-link>
      <router-link
        tag="div"
        class="tab-item"
        to="/analysis"
        :class="{active: this.$route.meta.topMenu === 'analysis'}"
      >
        <img src="./img/census.png" class="tab-img"/>
        <span class="tab-link">统计分析</span>
      </router-link>
      <router-link
        tag="div"
        v-if="userInfo.roleId !== 3"
        class="tab-item"
        to="/relation"
        :class="{active: this.$route.meta.topMenu === 'relation'}"
      >
        <img src="./img/connect.png" class="tab-img"/>
        <span class="tab-link">关联管理</span>
      </router-link>
      <router-link
        tag="div"
        v-if="userInfo.roleId !== 3"
        class="tab-item" to="/user-list"
        :class="{active: this.$route.meta.topMenu === 'user'}"
      >
        <img src="./img/user.png" class="tab-img"/>
        <span class="tab-link">用户管理</span>
      </router-link>
      <router-link
        tag="div"
        v-if="userInfo.roleId !== 3"
        class="tab-item" to="/s-role"
        :class="{active: this.$route.meta.topMenu === 'system'}"
      >
        <img src="./img/system.png" class="tab-img"/>
        <span class="tab-link">系统设置</span>
      </router-link>
    </div>
    <div class="exit" @click="exitLogin">注销</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapMutations} from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },

    methods: {
      ...mapMutations({
        setUserInfo: 'SET_USERINFO'
      }),
      exitLogin() {
        this.setUserInfo({})
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .header
    position: relative
    display: flex
    width: 100%
    height: $height-header
    background: $color-background-header

    .logo
      margin-left: 30px
      width: 380px
      text-align: left
      .logo-img
        display: inline-block
        vertical-align: top
        margin-top: 18px
        margin-right: 8px
        height: 44px
        line-height: 44px
      .logo-text
        display: inline-block
        vertical-align: top
        font-size: $font-size-large-x
        color: #fff
        line-height: $height-header

    .tab
      display: flex
      flex: 1
      font-size: $font-size-medium-x

      .tab-item
        flex: 1
        max-width: 120px
        padding: 8px 20px 0
        text-align: center
        display: table-cell
        .tab-img
          display: block
          margin: 0 auto
          width: 42px
          height: 42px
          vertical-align: top
        .tab-link
          display: block
          line-height: 26px
          color: $color-nav

        &.active
          // box-sizing: border-box
          background-color: #3281bd
          border-bottom: 5px solid #ffb946
          .tab-link
            color: $color-nav-active

    .exit
      width: 200px
      padding-right: 40px
      color: #fff
      line-height: 80px
      text-align: right
      font-size: $font-size-medium-x
      cursor: pointer
</style>
