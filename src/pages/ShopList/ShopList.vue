<template>
  <div>
    <div class="tittle">
      <div class="tittle_left" :class="{on:$route.path==='/list/classify'}">
        <router-link to="/list/classify">
          <span>分类</span>
        </router-link>
      </div>
      <div class="tittle_right" :class="{on:$route.path==='/list/brand'}">
        <router-link to="/list/brand">
          <span>品牌</span>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tittle
    bottom-border-1px(#cbcbcb)
    position fixed
    width 100%
    background #fff
    height 40px
    z-index 100
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
