<template>
  <ul class="sidebar-menu">
    <li class="item" v-for="(item,index) in list" :key="index">
      <router-link :to="item.path" class="title" tag="div">
        <span class="text">{{item.text}}</span>
        <Icon type="ios-arrow-forward" v-if="item.child && item.child.length"></Icon>
      </router-link>
      <ul class="sub-item" v-if="item.child && item.child.length">
        <li v-for="(childItem,index) in item.child" :key="index">
          <router-link :to="childItem.path" v-if="childItem.path">{{childItem.text}}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      list: {
        type: Array
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .sidebar-menu
    width: 100%
    font-size: $font-size-medium-x
    .title
      padding-left: 28px
      color: $color-text
      height: 44px
      line-height: 44px
      cursor: pointer
      &.active
        background-color: $color-background-navActive
        border-right: 6px solid $color-background-navBorder

</style>
