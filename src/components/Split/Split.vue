<template>
  <div class="split">
    {{title}}
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .split
    width 100%
    height 17px
    background #f3f5f7
    text-indent 15px
    line-height 16px
    font-size 12px
    color #999
</style>
