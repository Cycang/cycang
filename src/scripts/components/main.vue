<template>
  <div class="main-container">
    <header  class="main-header">
      <div class="main-search">
        <span></span>
        <input type="text" placeholder="请输入关键字" name="name" value="">
      </div>
    </header>
    <section>
      <div class="main-scroll">
        <div class="c_banner-wrap">
          <div class="swiper-container" id="banner-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="banner in bannerInfo"><img v-bind:src="banner.image" alt="" /></div>
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
                <i class="hour">13:</i>
                <i class="minute">20:</i>
                <i class="seconds">24</i>
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

  var banSwiper = null,
      actSwiper = null;
  export default {
    data(){
      return {
        bannerInfo: [],
        channelInfo: [],
        actInfo: [],
        seckillInfo: [],
        hotInfo: [],
        recommendInfo: []
      }
    },
    ready(){
      var that = this;
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
            autoplay: 3000,
            pagination : '.swiper-pagination'
          });

          actSwiper = new Swiper('#act-swiper', {
            loop: true,
            autoplay: 2000,
            pagination : '.swiper-pagination'
          });
        })
    }

  }
</script>
