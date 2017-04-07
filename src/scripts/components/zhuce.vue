<template>
  <div class="zhuce-container">
    <header>
      <div class="header-back">

      </div>
      <span>注册账号</span>
    </header>
    <section>
        <div class="yan-phone">
          <input type="text" name="name" value="" v-model="zhanghao" placeholder="手机号">
        </div>
        <div class="yanzheng">
          <input type="text" name="name" value="" v-module="yanzheng" placeholder="验证码">
          <div class="yanzhengma" v-on:click="yanzhen">
            <i>{{yanzhengma}}</i>
          </div>
        </div>
        <div class="duanxin">
          <input type="text" name="name" value=""placeholder="短信验证码">
          <div class="yan-duanxin">
          <a>获取验证码</a>
          </div>
        </div>
        <div class="password">
          <input type="password" name="name" v-model="pwd" value=""placeholder="密码">
        </div>
        <div class="passworder">
          <input type="password" name="name" v-model="queding" value=""placeholder="确认密码">
        </div>
        <div class="yaoqingma">
          <input type="text" name="name" value=""placeholder="基友邀请码(选填)">
        </div>
        <div class="click-login">
          <span v-link="{path:'/login'}">
            已有账号？点我登录
          </span>
        </div>
        <div class="zhuce" v-on:click="zhuce">
          <span>
            注册
          </span>
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
          yanzhengma:'3245',
          yanzheng:'',
          zhanghao:'',
          nicheng:'',
          youxiang:'',
          QQ:'',
          pwd:'',
          queding:''
      }
    },
    ready:function(){

      console.log(this.yanzhengma);
      var that=this;
    },
    methods:{
      yanzhen:function(){
        var arr=[];
        var str="";
        for(let i=0;i<4;i++){
          arr[i]=Math.floor(Math.random()*10);
        }
        str=arr.join("");
        this.yanzhengma=str;
      },
      zhuce:function(){
        var that=this;
        var person={
          nicheng:'未命名的小仓',
          youxiang:'',
          QQ:'',
          pwd:''
        };
        if(localStorage.length == 0){
          person.pwd=that.pwd;
          localStorage.setItem(that.zhanghao,JSON.stringify(person));
          that.$router.go({name:'/index/my',params:{zhanghao:this.zhanghao}});
        }else{
          var value = localStorage.getItem(this.zhanghao);
          console.log(value);
          if(value == ''||value===null){
            person.pwd=that.pwd;
            localStorage.setItem(that.zhanghao,JSON.stringify(person));
            that.$router.go({path:'/my',params:{zhanghao:this.zhanghao}});
          }else{
              alert("用户已存在")
          }
        }


      }
    }
  }
</script>
