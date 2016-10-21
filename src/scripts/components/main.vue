<template>
  <div class="main-container">
      <header>
          <ul>
              <li class="iconfont">&#xe610;</li>
              <li>
                  <span>彭展</span>
                  <span class="active">刘东</span>
              </li>
              <li class="iconfont">&#xe689;</li>
          </ul>
      </header>
      <nav>
          <ul id="swiper-nav">
              <li v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
          </ul>
      </nav>
      <section>
        <div class="swiper-container" id="index-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <section id="index-scroll">
                <ul>
                  <li v-for="l in list" v-link="{name:'goodsid',params:{id:l.id}}"><span><i><img v-bind:src="l.img" alt=""></i><b>{{l.title}}</b></span></li>
                </ul>
              </section>
            </div>
            <div class="swiper-slide">slider2</div>
            <div class="swiper-slide">slider3</div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
  var Vue = require('../libs/vue.js');
  var VueResource = require('../libs/vue-resource.js');
  Vue.use(VueResource);

  var mySwiper = null;

  export default {
    data() {
      return {
        list: [],
        curIndex: 0,
        indexNav: ['足球现场', '足球生活', '足球小姐']
      }
    },

    ready: function() {
      var that = this;
      this.$http.get('/mock/list.json')
        .then((res) => {
          this.list = res.data.data;

          setTimeout(function(){
            new IScroll('#index-scroll',{
               click:true
            });
          }, 500);

          mySwiper = new Swiper("#index-swiper", {
            onSlideChangeStart: function(){
              that.curIndex = mySwiper.activeIndex;
            }
          });
        })
    },

    methods: {
      switchSwiper(index) {
        this.curIndex = index;
        mySwiper.slideTo(index);
      }
    }
  }
</script>
