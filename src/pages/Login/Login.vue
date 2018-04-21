<template>
  <div class="html">
    <div class="body1">
      <div class="top">
        <a href="javascript:;" class="arrows" @click="$router.back()"><span> &#139</span></a>
        <a href="javascript:;" class="register"><span>注册</span></a>
      </div>
      <div class="bottom">
        <a href="javascript:;" class="commonReg" @click="login=true"><span>普通登录</span><i v-show= "login"></i></a>
        <a href="javascript:;" class="phoneReg" @click="login=false"><span>手机动态密码登录</span><i v-show= "!login"></i></a>
      </div>
    </div>
    <div class="body2" :class="{on: login}">
      <div class="top">
        <span>&#9851</span>
        <input type="text" placeholder="手机号/邮箱/用户名" v-model="name">
      </div>
      <div class="top">
        <span>&#9775</span>
        <input type="text" placeholder="输入密码" v-model="pwd">
      </div>
      <div class="bottom">
        <p>忘记密码?</p>
        <span @click="loginSend">登&nbsp;&nbsp;&nbsp;录</span>
      </div>
    </div>
    <div class="body2" :class="{on: !login}">
      <div class="top">
        <span>&#9851</span>
        <input type="text" placeholder="手机号/邮箱/用户名" v-model="phone">
      </div>
      <div class="top">
        <span>&#9775</span>
        <input type="text" placeholder="输入图片内容">
        <img src="http://localhost:3000/captcha" alt="" class="code" v-model="captcha" @click="updateCaptcha">
      </div>
      <div class="top">
        <span>&#9775</span>
        <input type="text" placeholder="动态密码" v-model="captcha">
        <button class="pwd" @click="sendCode">{{computeTime ? `已发送(${computeTime})s` : '获取验证码'}}</button>
      </div>
      <div class="bottom">
        <p>忘记密码?</p>
        <span @click="loginSend">登&nbsp;&nbsp;&nbsp;录</span>
      </div>
    </div>
    <div class="body3">
      <p>合作网站登录</p>
      <ul>
        <li><img src="./image/login_ico4.png" alt=""></li>
        <li><img src="./image/login_ico2.png" alt=""></li>
      </ul>
    </div>
    <AlertTip v-if="isShowAlert" :alertText="alertText" @closeTip="closeTip"/>
  </div>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip.vue'

  import {loginPwd, loginSms, sendCode} from '../../api'
  export default {
    data(){
      return{
        login: true,
        phone: '', //手机号
        code: '', //短信验证码
        name: '', //用户名
        pwd: '',//密码
        captcha: '',//图形验证码
        computeTime: 0, //倒计时事件
        showPwd: false,//是否显示密码
        alertText: '', //显示警告框
        isShowAlert: false //显示警告框
      }
    },
    computed: {
      rightPhone(){//以1开头，11位数字
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      async sendCode(){
        this.computeTime = 30
        const intervalId = setInterval(()=>{
          this.computeTime--
          if(this.computeTime === 0){
            clearInterval(intervalId)
          }
        },1000)
        //发送ajax请求，发送验证码短信
//        const result = await sendCode(this.phone)
//        if(result.code ===1){
//          //显示提示
//          this.showAlert(result.msg)
//          //停止计时
//          clearInterval(intervalId)
//          this.computeTime = 0
//        }
      },
      showAlert(text){
        this.isShowAlert = true
        this.alertText = text
      },
      updateCaptcha(event){
        event.target.src = 'http://localhost:3000/captcha?' + Date.now()
      },
      async loginSend(){
        this.showAlert('验证码不正确')




        let result
        //前台表单验证，如果不通过显示对应提示
        if(!this.login) {//phone, code

          const {rightPhone, phone, code} = this
          if (!rightPhone) {
            this.showAlert('手机号不正确')
            this.isShowAlert=true
            return
          } else if (!/^\d{6}$/.test(code)) {
            this.showAlert('验证码不正确')
            this.isShowAlert=true
            return
          }

          //请求手机号/验证码登陆
          const result = await loginSms({phone, code})
          if(result.code === 1){ //失败
            this.showAlert(result.msg)
          }else { //成功
            //将user保存到vuex中
            const user = result.data
            this.$store.dispatch('saveUserInfo', user)
            //回退到上一个路由
            this.$router.replace('/profile')
          }

        }else {//name, pwd, captcha

          const{name, pwd ,captcha} = this
          if (!name) {
            this.showAlert('必须指定用户名')
            return
          } else if (!pwd) {
            this.showAlert('必须指定密码')
            return
          }else if (!captcha) {
            this.showAlert('必须指定验证码')
            return
          }
          //请求用户/密码登录
          result = await loginPwd({name, pwd ,captcha})

        }
//        if(result.code === 1){ //失败
//          this.showAlert(result.msg)
//        }else { //成功
//          //将user保存到vuex中
//          const user = result.data
//          this.$store.dispatch('saveUserInfo', user)
//          //回退到上一个路由
//          this.$router.replace('/profile')
//        }
      },
      closeTip(){
        this.isShowAlert = false
        this.alertText = ''
      }
    },
    components: {
      AlertTip
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .html
    display flex
    flex-direction column
    .body1
      width: 100%
      background url("./image/bg.png")
      background-size 100% 100%
      height 180px
      .top
        .arrows
          float left
          span
            font-size 40px
            margin 0 0 0 15px
            color white
        .register
          float right
          margin 18px 10px 0 0
          span
            font-size 15px
            color white
      .bottom
        margin-top 136px
        width: 100%
        height 44px
        line-height 44px
        text-align center
        background rgba(255,255,255,0.3)
        .commonReg
          float left
          display block
          width: 50%
          color white
          font-size 15px
          position relative
          i
            border-style: solid solid solid;
            border-color: transparent transparent  white;
            border-width 10px
            position absolute
            bottom  0px
            left 50%
            margin-left -10px
        .phoneReg
          float right
          display block
          width: 50%
          color white
          font-size 15px
          position relative
          i
            border-style: solid solid solid;
            border-color: transparent transparent  white;
            border-width 10px
            position absolute
            bottom  0px
            left 50%
            margin-left -10px
    .body2
      height 180px
      width 90%
      margin-left 5%
      &.on
        display none
      .top
        display flex
        flex-direction row
        padding 8px 0
        border-bottom 1px solid #eee
        position relative
        span
          font-size 30px
          color #ccc
        input
          margin-left 10px
          width 50%
          outline none
        input::-webkit-input-placeholder
          color #ccc
          font-size 15px
        .pwd
          font-size 14px
          color red
          border 1px solid red
          padding 6px 5px
          border-radius 5px
          position absolute
          right 0
        .code
          width 85px
          height 30px
          position absolute
          right 0
      .bottom
        display flex
        flex-direction column
        p
          font-size 14px
          color #898989
          text-align right
          padding 13px 10px 10px 0
        span
          width 100%
          background #2ec975
          text-align center
          padding 12px 0
          color white
          border-radius 5px
  .body3
      margin-top 120px
      height 100px
      p
        color #d7d7d7
        text-align center
      ul
        width: 100%
        display flex
        flex-direction row
        li
          width 33.33%
          margin-top 5%
          img
            width: 50%
            margin-left 30%
</style>
