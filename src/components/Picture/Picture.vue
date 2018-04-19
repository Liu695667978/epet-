<template>
  <div class="main_pic" v-if="pic">
    <img :src="pic.cover.image" alt="">
    <div class="pic_text">
      <div class="ft12">
        <div>{{pic.title}}</div>
        <div>
          <span>{{pic.video_size}}</span>
          <span class="ml10 mr10">|</span>
          <span>{{pic.time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pic: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main_pic
    .pic_text
      .ft12
        padding-bottom 8px
        font-size 12px
        div
          text-align center
          margin-top 10px
          .ml10
            margin 0 10px
</style>
