<template>
  <div>
    <div class="all_tittle">
      <a href="###" class="all_back" @click="$router.back()"></a>
      <span>{{text}}</span>
      <a href="###" class="all_icon" @click="changeShow"></a>
    </div>
    <transition name="fade">
      <div class="all_show" v-show="allShow">
        <a href="###">
        <span class="show_icon icon1"></span>
        <p>首页</p>
      </a>
        <a href="###">
          <span class="show_icon icon2"></span>
          <p>首页</p>
        </a>
        <a href="###">
          <span class="show_icon icon3"></span>
          <p>首页</p>
        </a>
        <a href="###">
          <span class="show_icon icon4"></span>
          <p>首页</p>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        allShow: false
      }
    },
    props: {
      text: String
    },
    methods: {
      changeShow(){
        this.allShow = !this.allShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .all_tittle
    bottom-border-1px(#f3f3f3)
    height 50px
    display flex
    justify-content space-between
    line-height 50px
    padding 0 10px
    font-size 18px

    .all_back
      background-image url("./images/img.png")
      background-size 234px 159px
      height 20px
      width 11px
      background-position -201px -10px
      margin-top 17px
    .all_icon
      background-image url("./images/img.png")
      background-size 234px 163px
      height 20px
      width 20px
      background-position -217px -10px
      margin-top 17px
  .all_show
    bottom-border-1px(#d7d7d7)
    width 100%
    height 50px
    display flex
    box-sizing border-box
    padding 2px 0
    overflow hidden
    &.fade-enter-active, &.fade-leave-active
     transition all 0.3s
    &.fade-enter, &.fade-leave-to
      height 0
    a
      flex 1
      text-align center
      font-size 13px
      display block
      .show_icon
        background-image url("./images/img.png")
        background-size 234px 163px
        width 25px
        height 25px
        display inline-block
      .icon1
        background-position -172px -7px
      .icon2
        background-position -172px -49px
      .icon3
        background-position -172px -90px
      .icon4
        background-position -172px -133px

</style>
