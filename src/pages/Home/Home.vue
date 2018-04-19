<template>
  <div>
    <div class="app">
      <img src="./images/01 (35).jpg" alt="">
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
            <li v-for="(menu, index) in home.menus" :key="index" :class="{on: index === 0}">
              {{menu.menu_name}}
              <i></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_body">
        <div class="swiper-container">
          <div class="swiper-wrapper" v-if="carousel.data">
            <div class="swiper-slide" v-for="(img, index) in carousel.data['1'].value" :key="index">
              <img :src="img.image" alt="">
            </div>
          </div>
          <div class="swiper-pagination">
        </div>
      </div>
        <div class="main_icon">
          <ul v-if="home.datas">
            <li v-for="(menu, index) in home.datas[1].menus" :key="index">
              <img :src="menu.image" alt="">
            </li>
          </ul>
        </div>
        <div class="main_new" v-if="carousel.data">
          <img :src="carousel.data['2438'].value['0'].image" alt="">
        </div>
        <div class="main_list">
          <div class="list_title" v-if="carousel.data">
            <img :src="carousel.data['3'].surprise_icon.image" alt="">
            <div class="list_time">
              <p>{{carousel.data['3'].title}}</p>
              <p>17: 00</p>
            </div>
            <div class="list_more" v-if="carousel.data">
              <img :src="carousel.data['3'].right_image.image" alt="">
            </div>
          </div>
          <div class="list_item" v-if="carousel.data">
            <ul v-if="carousel.data">
              <li v-for="(good, index) in carousel.data['3'].goods" :key="index">
                <img :src="good.image.image" alt="">
                <span>￥{{good.sale_price}}</span>
                <p>{{good.little_price}}</p>
              </li>
            </ul>
          </div>
          <div class="flex" v-if="home.datas">
            <div>
              <img :src="home.datas[5].content_images[0][0].image1" alt="">
            </div>
            <div>
              <img class="dog" :src="home.datas[5].content_images[1][0].image1" alt="">
              <img class="dog" :src="home.datas[5].content_images[1][1].image1" alt="">
            </div>
          </div>
          <Split/>
          <div class="list_img" v-if="home.datas">
            <img :src="home.datas[7].value[0].image" alt="">
          </div>
          <Split/>
        </div>
        <div v-if="home.datas">
          <Tittle :tittle="home.datas[9].value"/>
          <Picture :pic="home.datas[10].value[0]"/>
        </div>

        <Split/>
        <div class="flexBox2" v-if="carousel.data">
          <div v-for="(top,index) in carousel.data['3110'].content_images[0]">
            <img :src="top.image" alt="">
          </div>
          <div v-for="(bottom,index) in carousel.data['3110'].content_images[1]">
            <img :src="bottom.image" alt="">
          </div>
        </div>
        <Split/>

        <div v-if="home.datas">
          <Tittle :tittle="home.datas[14].value"/>
          <div v-for="(data,index) in home.datas" :key="index">
            <div v-for="(pic,index) in data.content_images" :key="index">
              <img :src="pic[0].image">
            </div>
          </div>
        </div>
        <div v-if="home.datas">
          <Tittle :tittle="home.datas[46].value"/>
          <Picture :pic="home.datas[47].value[0]"/>
          <Split/>
        </div>
        <div v-if="home.datas">
          <Tittle :tittle="home.datas[49].value"/>
          <Picture :pic="home.datas[50].value[0]"/>
          <Split/>
        </div>

        <div class="copyright">
          <div class="links">
            <span class="cp" title="触屏版">触屏版</span>
            <span><a href="##">手机客户端</a></span>
            <span><a href="###">关于我们</a></span>
            <span><a href="##">联系我们</a></span>
          </div>
          <div class="company">
            © wap.epet.com 版权：重庆易宠科技有限公司
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from'swiper'
  import {mapState} from 'vuex'

  import 'swiper/dist/css/swiper.min.css'

  import Split from '../../components/Split/Split.vue'
  import Picture from '../../components/Picture/Picture.vue'
  import Tittle from '../../components/Tittle/Tittle.vue'

  export default {
    mounted(){
      //分发
      this.$store.dispatch('getHome')
      this.$store.dispatch('getCarousel')
      //头部横向滚动
      new BScroll('.header_bottom',{
        scrollX: true,
        scrollY: false
      })


    },
    //获取state数据
    computed: {
      ...mapState(['home', 'carousel']),
    },
    watch: {

      carousel(value){
        //监视有数据时banner轮播
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop : true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
          //监视有数据时每日疯抢横向滚动
          new BScroll('.list_item',{
            scrollX: true,
            scrollY: false
          })
        })
      }
    },
    components: {
      Split,
      Picture,
      Tittle
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
    .main_icon
      ul
        width 100%
        display flex
        flex-wrap wrap
        li
          width 20%
    .main_list
      .list_title
        position relative
        img
          width 85px
        .list_time
          display inline-block
          float right
          margin-right 60px
          p
            float left
            font-size 13px
        .list_more
          position absolute
          right 0
          top -21px
          z-index -100
          img
            width 60px
      .list_item
        overflow hidden
        margin-bottom 20px
        ul
          width 120%
          display flex
          li
            text-align center
            25%
            span
              color red
            p
              font-size 12px
              color #7e8c8d
        img
          width 85px
      .flex
        display flex
        div
          width 50%
  .flexBox2
    width 100%
    display flex
    flex-wrap wrap
    div
      width 50%
  .copyright
    .links
      display flex
      justify-content center
      font-size 14px
      padding 15px 0 5px
      span
        padding-right 10px
      .cp
        color red
    .company
      text-align center
      margin 0 10px 0 10px
      padding-bottom 80px
      font-size 12px
</style>
