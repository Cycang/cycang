<template>
  <div class="livBox">
    <header class="liveBoxHeader">
      <span></span>
      <ul>
        <li v-for="l in liveList" v-on:click="liveSwiper($index)" v->{{l}}</li>
      </ul>
      <span></span>
    </header>
    <nav class="liveBoxNav">
      <img src="/images/1.png" alt="">
    </nav>
    <section class="liveBoxSection">
      <div class="swiper-container" id="index-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <section id="index-scroll">
              <ul>
                <li v-for="l in list" v-link="{name: 'detail', params: {id: l.id}}"><span><i><img v-bind:src="l.img" alt=""></i><b>{{l.title}}</b></span></li>
              </ul>
            </section>
          </div>
          <div class="swiper-slide" id="lifescroll">
            <!-- <section id="waterfall"></section> -->
          </div>
          <div class="swiper-slide">
            <!-- <section id="css3waterfall">
              <div class="cont">
                <div class="pic">
                  <div v-for="item in beautylist">
                    <span>
                      <img v-bind:src="item.img" />
                      <i v-html="item.title"></i>
                    </span>
                  </div>
                </div>
              </div>
            </section> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import commonUtil from "../utils/commonUtil";
import waterfall from "../utils/waterfall.util.js";

var mySwiper = null;
export default {
  data(){
    return {
      liveList:['直播','新帖','热帖']
    }
  }
}
</script>
