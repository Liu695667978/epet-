<template>
 <div >
   <AllTittle text="全部品牌"/>
   <div class="letter" v-if="allBrand.brand">
      <ul>
        <li v-for="(brand, index) in allBrand.brand" :key="index">{{brand.order}}</li>
      </ul>
   </div>
   <div class="wrap">
     <div class="all_wrap">
       <div v-for="(brand, index) in allBrand.brand" :key="index">
         <Split :title="brand.order"/>
         <div>
           <div class="brand-wrapper clearfix" v-for="(list, index) in brand.list" :key="index">
             <div class="brand-img">
               <img :src="list.logo" alt="">
             </div>
             <div class="brand-name">
               <p class="f14">{{list.name}}</p>
               <p class="f12">{{list.address}}</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import Split from '../../components/Split/Split.vue'
  import AllTittle from '../../components/AllTittle/AllTittle.vue'
  export default {
    mounted(){
      this.$store.dispatch('getAllBrand', ()=>{
        this.$nextTick(() => {

//        this._initTops()
          this._initScroll()
        })
      })

    },
    data(){
      return{
        tops: [], //所有top值
        scrollY: 0 //当前y轴滚动坐标
      }
    },
    components: {
      Split,
      AllTittle
    },
    computed: {
      ...mapState(['allBrand']),
      currentsIndex(){
        const {tops, scrollY} = this
        return tops.findIndex((top, index) => {
          scrollY >= top && scrollY< top[index+1]
        })
      }
    },
    methods: {
//      _initTops(){
//        const tops = []
//        let top = 0
//        tops.push(top)
//        const wraps = this.$refs.all_wrap.getElementsByClassName('brand-wrapper')
//        Array.prototype.slice.call(wraps).forEach(wrap => {
//          top += wrap.clientHeight
//          tops.push(top)
//        })
//
//        this.tops = tops
//      },
      _initScroll(){
        new BScroll('.wrap' ,{
           scrollY:true,
          click:true
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.letter
  position fixed
  height 100%
  right 6px
  width 10px
  top 115px
  ul
    text-align center
    font-size 15px
.wrap
  height 100%
  .all_wrap
    height 140%
.brand-wrapper
  padding-bottom 10px
  border-bottom  1px solid #f1f1f1
.clearfix:after
  content "."
  display block
  height 0
  clear both
  visibility hidden
.brand-img
  width 30%
  max-width 150px
  height 50px
  border 1px solid #f3f4f5
  float left
  margin 10px 0 0 10px
  img
    height 100%
.brand-name
  float left
  text-align left
  margin: 20px 0 5px 20px
  .f12
    font-size 12px
    color #999
    margin-top 10px
  .f14
    font-size 14px
    color #333
</style>
