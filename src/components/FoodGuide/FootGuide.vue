<template>
  <footer class="foot">
    <a href="###" class="guide" :class="{on: $route.path === '/home'}" @click="goto('/home')">
      <span class="icon">
        <i class="iconfont icon-aipinpaidianpuxiangqingmaishouzhuye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="###" class="guide" :class="{on: $route.path === '/list'}" @click="goto('/list')">
      <span class="icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="###" class="guide" :class="{on: $route.path === '/cart'}" @click="goto('/cart')">
      <span  class="icon">
        <i class="iconfont icon-gouwugouwuchedinggou"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="###" class="guide" :class="{on: $route.path === '/login'}" @click="goto('/login')">
      <span class="icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .foot
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    bottom 0
    width 100%
    height 46px
    display flex
    .guide
      flex 1
      flex-direction column
      align-items center
      text-align center
      color #999999
      display flex
      margin-top 3px
      &.on
        color #BDE1B3
      span
        font-size 2px
        margin 2px 0
        i
          font-size 24px
</style>
