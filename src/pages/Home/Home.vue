<template>
  <div>
    <div class="app">
      <img src="./images/01.jpg" alt="">
    </div>
    <div class="main">
      <div class="main_header">
        <div class="header_top">
          <div class="top">
            <div class="header_city">
              <span>狗狗</span>
              <span>|</span>
              <span>重庆</span>
              <i></i>
            </div>
            <div class="header_search">
              <input type="text" value="搜索商品和品牌">
              <span>
              <i class="iconfont icon-sousuosearch82"></i>
            </span>
            </div>
            <div class="header_info">
         <span>
           <i class="iconfont icon-xiaoxi"></i>
         </span>
            </div>
          </div>
        </div>
        <div class="header_bottom">
          <ul class="header_scroll">
            <li class="on">
              首页
              <i></i>
            </li>
            <li>狗狗主粮</li>
            <li>零食</li>
            <li>医疗保健</li>
            <li>玩具</li>
            <li>外出</li>
            <li>服饰城</li>
          </ul>
        </div>
      </div>
      <div class="main_body">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./images/1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./images/2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./images/3.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./images/4.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./images/5.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./images/6.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./images/7.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./images/8.jpg" alt=""></div>
          </div>
          <div class="swiper-pagination">
        </div>
      </div>
        <div class="main_icon">
          <ul>
            <li>
              <img src="./images/02.jpg" alt="">
            </li>
            <li>
              <img src="./images/02.jpg" alt="">
            </li>
            <li>
              <img src="./images/02.jpg" alt="">
            </li>
            <li>
              <img src="./images/02.jpg" alt="">
            </li>
            <li>
              <img src="./images/02.jpg" alt="">
            </li>
            <li>
              <img src="./images/02.jpg" alt="">
            </li>
            <li>
              <img src="./images/02.jpg" alt="">
            </li>
            <li>
              <img src="./images/02.jpg" alt="">
            </li>
            <li>
              <img src="./images/02.jpg" alt="">
            </li>
            <li>
              <img src="./images/02.jpg" alt="">
            </li>
          </ul>
        </div>
        <div class="main_new">
          <img src="./images/03.gif" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted(){
      new BScroll('.header_bottom',{
        scrollX: true,
        scrollY: false
      })
      new Swiper('.swiper-container', {
        loop : true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    img
      width 100%
  .main_header
    height 86px
    .header_top
      height 41px
      padding 5px 10px
      .top
        padding 8px 0
        display flex
        justify-content space-between
        .header_city
          position relative
          margin-right 18px
          span
            font-size 14px
            color #898989
            line-height 25px
          i
            position: absolute;
            top: 11px;
            right: -14px;
            border-width: 4px;
            font-size: 0;
            line-height: 0;
            border-style: solid solid dotted;
            border-color: #898989 transparent transparent;
        .header_search
          position relative
          width 63%
          input
            width 100%
            min-width 100px
            height 25px
            border-radius 5px
            font-size 14px
            background #E9E9E9
            color #898989
            text-indent 10px
          span
            position absolute
            right 0
            top 0
            i
              font-size 16px
              line-height 25px
              color #898989
        .header_info
          color #898989
          margin-left 4px
          line-height 25px
          i
            font-size 18px
            line-height 25px
            color #898989
    .header_bottom
      height 35px
      line-height 35px
      width 100%
      overflow hidden
      ul
        position relative
        text-align center
        width 140%
        display flex
        li
          width 20%
          font-size 14px
          color #666
          i
            position absolute
            bottom: 1px;
            left: 4%;
            width 6%
            height 2px
            background #459d36
          &.on
            color #459D36
  .main_body
    .swiper-container
      img
        width 100%
    .main_icon
      ul
        width 100%
        display flex
        flex-wrap wrap
        li
          width 20%
          img
            width 100%


</style>
