<template>
  <div class="list" v-if="classify.categorys">
    <div class="list_left">
      <ul>
        <li v-for="(category, index) in classify.categorys" :key="index" :class="{on:indexFlag === index}" @click="changeIndex(index)">
          {{category.name}}
        </li>
      </ul>
    </div>
    <div class="list_right" v-for="(cate, index) in classify.categorys[indexFlag].cate_list" :key="index">
      <div class="right_tittle" >
        <span>{{cate.title}}</span>
        <img :src="cate.rigth_img.image" alt="">
      </div>
      <ul>
        <li v-for="(l,index) in cate.list" :key="index">
          <img :src="l.logo || l.photo" alt="">
          <span>{{l.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('getClassify')
    },
    data(){
      return {
        indexFlag: 0
      }
    },
    computed:{
      ...mapState(['classify'])
    },
    watch: {
      classify(value){
        this.$nextTick(()=>{
          new BScroll('.list_left',{
            click: true
          })
        })
      }
    },
    methods: {
      changeIndex(index){
        this.indexFlag = index
        console.log(index);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .list
    height 100%
    .list_left
      border-right: 5px solid #f3f4f5;
      position fixed
      top 40px
      width 70px
      height 100%
      ul
        text-align center
        height 120%
        li
          box-sizing border-box
          width 70px
          height 50px
          line-height 20px
          font-size 13px
          padding 15px 0
          text-overflow ellipsis
          white-space nowrap
          &.on
            color red
            background #f3f4f5
    .list_right
      margin-left 75px
      border-top 5px solid #f3f4f5
      .right_tittle
        display flex
        justify-content space-between
        margin-top 10px
        padding 0 10px
        span
          font-size 12px
        img
          width 46px
          height 10px
      ul
        display flex
        flex-wrap wrap
        li
          box-sizing border-box
          padding 5px
          width 33.3333%
          margin-top 20px
          text-align center
          span
            font-size 13px
</style>
