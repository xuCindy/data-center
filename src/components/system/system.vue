<template>
    <div class="system">
        <div class="system-left">
            <router-link tag="div" to="/system-role">111111111111111111111111</router-link>
            <router-link tag="div" to="/system-interface">222222222222222</router-link>
        </div>
        <div class="system-right">
            <router-view/>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.system
  display: flex
  .system-left
    width: 268px
    text-align: left
  .system-right
    flex: 1  
</style>
