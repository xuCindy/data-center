<template>
  <div class="container">
    <div class="container-left" ref="menuWrapper" v-if="isShow">
      <transition name="fade">
        <div class="wrapper">
          <slot></slot>
        </div>
      </transition>
    </div>
    <div class="show-menu" @click="showToggle" ref="showBtn">
      显示
    </div>
    <div class="container-right" ref="contentWrapper">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isShow: true,
      }
    },
    methods: {
      showToggle() {
        this.isShow = !this.isShow
        if (this.isShow) {
          this.$refs.showBtn.style.left = '268px'
        } else {
          this.$refs.showBtn.style.left = 0
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  .container
    display: flex
    position: absolute
    top: $height-header
    bottom: 0
    width: 100%
    overflow: hidden
    background: $color-background
    .show-menu
      position: absolute
      bottom: 80px
      left: 268px
    .container-left
      width: 268px
      height 100%
      .wrapper
        width: 268px
        height 100%
        padding-top: 30px
        overflow: hidden
        text-align: left
        background: $color-background-leftSide
        border-right: 1px solid $color-border-leftSide
      .fade-enter-active, .fade-leave-active
        transition: opacity .5s
      .fade-enter, .fade-leave-to
        opacity: 0
    .container-right
      flex: 1

</style>
