<template>
  <div class="main-container">
    <!-- 搜索框部分 -->
    <header  class="main-header">
      <div class="main-search">
        <span></span>
        <input type="text" placeholder="请输入关键字" name="name" value="">
      </div>
    </header>
    <section>
      <div class="main-scroll">
        <div class="c_banner-wrap">
          <!-- banner图部分 -->
          <div class="swiper-container" id="banner-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="banner in bannerInfo">
                <img v-bind:src="banner.image" alt="此图片无法展示，请重新加载。" />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="cyc_nav">
          <dl class="nav-dl"v-link="{path: '/list'}" v-for="ch in channelInfo">
            <dt><img v-bind:src="ch.image" alt="" /></dt>
            <dd>{{ch.channel_name}}</dd>
          </dl>
        </div>
        <div class="c_act_wrap">
          <div class="swiper-container" id="act-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="a in actInfo"><img v-bind:src="a.icon_url" alt="" /></div>
            </div>
          </div>
        </div>
        <div class="seckill-floor">
          <div class="title-wrap">
            <span class="title">
              <span class="title-name"> 闪购-距结束</span>
              <span class="cyc_seckill_time">
                <i class="hour">{{hour}} : </i>
                <i class="minute">{{minute}} : </i>
                <i class="seconds">{{seconds}}</i>
              </span>
            </span>
            <span class="cyc_more">查看更多</span>
          </div>
          <div class="seckill-slide">
            <div class="seckill-slide-box">
              <div class="seckill-slide-scroll">
                <dl class="seckill-slide-dl" v-for="s in seckillInfo"  v-link="{path:'/detail'}">
                  <dt><img v-bind:src="s.figure" alt="" /></dt>
                  <dd>
                    <b class="seckill-cover_price">￥{{s.cover_price}}</b>
                    <i class="seckill-origin_price">￥{{s.origin_price}}</i>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="hot-sale-floor">
          <div class="title-wrap">
            <span class="title">
              新品推荐
            </span>
            <span class="cyc_more">查看更多</span>
          </div>
          <div class="hot-sale-box">
            <dl class="hot-sale-dl" v-for="h in hotInfo" v-link="{path:'/detail'}">
              <dt><img v-bind:src="h.figure" alt="" /></dt>
              <dd>
                <span>{{h.name}}</span>
                <b>￥{{h.cover_price}}</b>
              </dd>
            </dl>
          </div>
        </div>
        <div class="cyc_hot_title-wrap">
          <span class="title">
            这里都是卖得棒棒哒
          </span>
          <span class="cyc_more"></span>
        </div>
        <div class="hot-good-floor">
          <dl v-for="r in recommendInfo" v-link="{path:'/detail'}">
            <dt><img v-bind:src="r.figure" alt="" /></dt>
            <dd>
              <span>{{r.name}}</span>
              <b>￥{{r.cover_price}}</b>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
  import { tabChange } from '../vuex/actions';

  var banSwiper = null,
      actSwiper = null,
      secSwiper = null;
  export default {
    vuex: {
      actions: {
        change: tabChange
      }
    },
    data(){
      return {
        bannerInfo: [],
        channelInfo: [],
        actInfo: [],
        seckillInfo: [],
        hotInfo: [],
        recommendInfo: [],
        hour:23,
        minute:59,
        seconds:59
      }
    },
    ready(){
      var that = this;
      that.change(1);
      this.$http.get('/mock/main.json')
        .then((res) => {
          that.bannerInfo = res.data.result.banner_info;
          that.channelInfo = res.data.result.channel_info;
          that.actInfo = res.data.result.act_info;
          that.seckillInfo = res.data.result.seckill_info.list;
          that.hotInfo = res.data.result.hot_info;
          that.recommendInfo = res.data.result.recommend_info;
          banSwiper = new Swiper('#banner-swiper', {
            loop: true,
            autoplay: 5000,
            pagination: '.swiper-pagination'
          });

          actSwiper = new Swiper('#act-swiper', {
            loop: true,
            autoplay: 2000,
            pagination : '.swiper-pagination'
          });

          secSwiper = new Swiper('#sec-swiper', {
          });
        });

        setInterval(function () {
          if (that.seconds > 0) {
            that.seconds -= 1;
          }else{
            that.seconds = 59;
            if(that.minute > 0){
              that.minute -= 1;
            }else{
              that.seconds =59;
              that.hour -= 1;
            }
          }
        },1000);
    }

  }
</script>
