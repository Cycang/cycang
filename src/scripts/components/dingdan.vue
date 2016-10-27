<template>
  <div class="dingdan-container">
    <!-- 订单列表top -->
      <div class="dingdan-top">
        <div class="back" v-link="{path:'/my'}"><img src="/images/back1.png" alt="" /></div>
        <div class="ding">订单列表</div>
        <div class="search"><img src="/images/search2.png" alt="" /></div>
      </div>
      <!-- 订单列表nav -->
      <nav>
        <ul id="swiper-nav">
          <li v-for="nav in indexNav" v-on:click="switchSwiper($index)"  :class="curIndex==$index ? 'active' : ''" >{{nav}}</li>
        </ul>
      </nav>
      <section>
        <div class="swiper-container" id="index-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div id="navswiper">
                <img src="/images/list_empty.png" alt="" />
                <p>您还没有相关订单</p>
                <p>随便逛逛</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div id="navswiper">
                <img src="/images/list_empty.png" alt="" />
                <p>您还没有相关订单</p>
                <p>随便逛逛</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div id="navswiper">
                <img src="/images/list_empty.png" alt="" />
                <p>您还没有相关订单</p>
                <p>随便逛逛</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div id="navswiper">
                <img src="/images/list_empty.png" alt="" />
                <p>您还没有相关订单</p>
                <p>随便逛逛</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div id="navswiper">
                <img src="/images/list_empty.png" alt="" />
                <p>您还没有相关订单</p>
                <p>随便逛逛</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>
<script>
var mySwiper;
  export default{
    data(){
      return{
        curIndex:0,
          indexNav:[
            '全部','待付款','待发货','待收货','已完成'
          ]
      }
    },
    ready:function(){
      var that=this;
      this.curIndex=parseInt(this.$route.params.id) +1;
      mySwiper=new Swiper('#index-swiper',{
        onSlideChangeStart:function(){
          that.curIndex=mySwiper.activeIndex;
        }
      })
    },
    methods:{
      switchSwiper(index){
        this.curIndex=index;
        mySwiper.slideTo(index);
      }
    }
  }
</script>
