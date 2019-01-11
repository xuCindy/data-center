<template>
  <div id="app">
    <data-header/>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import DataHeader from 'components/data-header/data-header'

  export default {
    name: 'app',
    components: {
      DataHeader
    }
  }
</script>

<style lang="stylus">

</style>
