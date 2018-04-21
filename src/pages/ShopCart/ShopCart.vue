<template>
  <div class="shop">
    <AllTittle text="购物车"/>
    <div class="shop_image">
      <img src="./images/cart-ico.png" alt="">
    </div>
    <div class="shop_text">
      <span>购物车是空的</span>
    </div>
    <div class="shop_button">
      <button class="shop_button_left">去逛逛</button>
      <button>我的收藏</button>
    </div>
  </div>
</template>
<script>
  import AllTittle from '../../components/AllTittle/AllTittle.vue'
  export default {
    components: {
      AllTittle
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shop
    width 100%
    display flex
    flex-direction column
    text-align center
    .shop_image
      width: 100%
      height 100px
      margin-top 50px
      position relative
      overflow hidden
      img
        width 100px
        position absolute
        bottom -20px
        margin-left -50px
    .shop_text
      margin-top 20px
      color #dbdbdb
    .shop_button
      margin-top 20px
      button
        color #999
        background white
        border 1px solid #999
        outline none
        padding 10px 15px
        border-radius 8px
        font-size 14px
      .shop_button_left
        padding 10px 22px
</style>
