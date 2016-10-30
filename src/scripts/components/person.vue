<template>
  <div class="person-container">
    <header>
      <div class="headerback">
        <a href="javascript:history.go(-1);"></a>
      </div>
      <div class="person-message">
        <p>个人资料</p>
      </div>
      <div class="header-edit" v-on:click="bianji">
        <p>编辑</p>
      </div>
    </header>

    <section>
      <div class="touxiang">
        <p>
        头像
         </p>
         <div class="touxiang-img">
           <img src="/images/user_icon.png" alt="" />
         </div>
      </div>
      <div class="zhanghao" id="zhanghao">
        <p>会员账号</p>
        <i>{{zhanghao}}</i>
      </div>
      <div class="nicheng" id="nicheng">
        <p>昵称</p>
        <i>{{nicheng}}</i>
      </div>
      <div class="youxiang" id="youxiang">
        <p>邮箱</p>
        <i>{{youxiang}}</i>
      </div>
      <div class="qq" id="qq">
        <p>QQ账号</p>
        <i>{{QQ}}</i>
      </div>
      <div class="xiugaimima">
        <p>修改密码</p>

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
      zhanghao:'',
      nicheng:'',
      youxiang:'',
      QQ:'',
      pwd:''
    }
    },
    ready:function(){
      var zhanghao=this.$route.params.zhanghao;
      var person=JSON.parse(localStorage.getItem(zhanghao));
      this.nicheng=person.nicheng;
      this.zhanghao=zhanghao;
      this.QQ=person.QQ;
      this.youxiang=person.youxiang;

    },
    methods:{
      bianji:function(){
        this.$router.go({path:'/bianji',params:{zhanghao:this.zhanghao}});
      }
    }
  }

</script>
