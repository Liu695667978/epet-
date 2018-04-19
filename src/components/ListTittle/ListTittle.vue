<template>
  <div class="tittle">
    <div class="tittle_left on">
      <span>分类</span>
    </div>
    <div class="tittle_right">
      <span>品牌</span>
    </div>
    <img src="./images/1.png" alt="">
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tittle
    bottom-border-1px(#cbcbcb)
    height 40px
    img
      width 14px
      position absolute
      top 13px
      right 10px
    .tittle_left
      display inline-block
      box-sizing border-box
      text-align right
      line-height 40px
      font-size 13px
      width 49%
      padding-right 5%
    .tittle_right
      display inline-block
      box-sizing border-box
      text-align left
      line-height 40px
      font-size 13px
      width 49%
      padding-left 5%
    .on
      span
        display inline-block
        width 26px
        height 40px
        padding 0 4px
        color red
        border-bottom 1px solid red
</style>
