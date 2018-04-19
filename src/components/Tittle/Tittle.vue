<template>
  <div class="pic_tittle" v-if="tittle">
    <div class="pic_left">
      <img :src="tittle.left.img.image" alt="">
    </div>
    <div class="pic_right">
      <img :src="tittle.right.img.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tittle: Object,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pic_tittle
    position relative
    .pic_left
      margin-left 10px
      img
        width 188px
    .pic_right
      position absolute
      right 0
      top 10px
      width 60px
</style>
