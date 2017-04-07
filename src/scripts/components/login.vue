<template>
  <div class="login-container">
    <header>
      <div class="header-left">
        <a></a>
      </div>
      <div class="header-center">
        登录
      </div>
      <div class="header-right">
        <a href="/#!/index"></a>
      </div>
    </header>
    <section>
      <div class="login">
        <div class="login-img">
          <img src="/images/login_img.png" />
        </div>
        <div class="login-user">
              <input type="text" v-model="username" class="user-name" value="" placeholder="账号">
              <input type="password" v-model="password" class="user-pwd" value="" placeholder="密码">
        </div>
        <div class="login-entry" id="login" v-on:click="denglu">
          登录
        </div>
        <div class="login-zhuce">
          <div class="zhuce" v-link="{path:'/zhuce'}">
            <a>注册账号</a>
          </div>
          <div class="remember">
            <a href="#">忘记密码</a>
          </div>
          <div class="kefu">
            <a href="#">联系客服</a>
          </div>
        </div>

      </div>

      <div class="other-login">
        <div class="other-title">
          其他登录方式
        </div>
        <ul class="other">
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
var Vue = require('../libs/vue.js');
var VueResource = require('../libs/vue-resource.js');
var VueRouter=require('../libs/vue-router');
Vue.use(VueRouter);
Vue.use(VueResource);
  export default{
    data(){
      return{
        username:'',
        password:''

      }
    },
      methods:{

        denglu:function(){

          for(var i=0;i<localStorage.length;i++){
            var getKey=localStorage.key(i);
            if(this.password==JSON.parse(localStorage.getItem(getKey)).pwd&&this.username==getKey){
              this.$router.go({name:'/index/my',params:{zhanghao:this.username}});
            }
            else{
              console.log(0);
            }
          }

      }
    }
  }
</script>
