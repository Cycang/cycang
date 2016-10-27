<template>
  <div class="zhuce-container">
    <header>
      <div class="header-back">
      <a href="javascript:history.back();"></a>
      </div>
      <span>注册账号</span>
    </header>
    <section>
        <div class="yan-phone">
          <input type="text" name="name" value=""placeholder="手机号">
        </div>
        <div class="yanzheng">
          <input type="text" name="name" value=""placeholder="验证码">
          <div class="yanzhengma" id="yanzhengma">
            <i></i>
          </div>
        </div>
        <div class="duanxin">
          <input type="text" name="name" value=""placeholder="短信验证码">
          <div class="yan-duanxin">
          <a>获取验证码</a>
          </div>
        </div>
        <div class="password">
          <input type="passord" name="name" value=""placeholder="密码">
        </div>
        <div class="passworder">
          <input type="password" name="name" value=""placeholder="确认密码">
        </div>
        <div class="yaoqingma">
          <input type="text" name="name" value=""placeholder="基友邀请码(选填)">
        </div>
        <div class="click-login">
          <span v-link="{path:'/login'}">
            已有账号？点我登录
          </span>
        </div>
        <div class="zhuce" id="zhuce">
          <span>
            注册
          </span>
        </div>
    </section>
  </div>
</template>
<script>
  export default{
    ready(){
      random();
      $("#yanzhengma").on("click",function(){
        random();
      });
      function random(){

        var arr=[];
        var str="";
        for(let i=0;i<4;i++){
          arr[i]=Math.floor(Math.random()*10);
        }
        $("#yanzhengma i").html(arr);
      }
      $("#zhuce").on("click",function(){

      });


    }
  }
</script>
