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
        <a></a>
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
        <div class="login-entry" id="login" >
          登录
        </div>
        <div class="login-zhuce">
          <div class="zhuce">
            <a v-link="{path:'/zhuce'}">注册账号</a>
          </div>
          <div class="remember">
            <a href="">忘记密码</a>
          </div>
          <div class="kefu">
            <a href="">联系客服</a>
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
  export default{
    data(){
      return{
        password: '',
        username: '',
        list: []
      }
    },
    ready(){
      var istrue=false;
      var that =this;
      $("#login").on("click",function(){
        that.$http.get('/mock/user-list.json')
        .then((res) => {
          that.list=res.data.data;
          console.log(that.list[0].phone);
          console.log(that.list[0].pwd);
          console.log(that.username);
          for(let i=0;i<that.list.length;i++){
            if(that.username==that.list[i].phone&&that.password==that.list[i].pwd){
              istrue=true;
            }
          }
          if(istrue){
            console.log(0);
            $("#login").attr("v-link","{path:'/my'}");
          }else{
            alert("用户名或密码不正确");
          }
        })
      });
    }
  }
</script>
