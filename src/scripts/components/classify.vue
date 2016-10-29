<template>
  <div class="classifySection">
    <ul class="shopUl">
      <li v-for="shop in shoplist" v-bind:class="classindex == $index ? 'active' : ''"
      v-on:click="changShop($index)" v-link="{path:shop.path}">{{shop.name}}</li>
    </ul>
    <div id="classify-scroll">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Vue from "../libs/vue.js";
import commonUtil from "../utils/commonUtil";
import { classifyChanger } from "../vuex/actions";
import { getTabindex } from "../vuex/getters";
export default {
  vuex :{
    getters:{
      classindex:getTabindex
    },
    actions:{
      classChange:classifyChanger
    }
  },
  data() {
    return {
      shoplist:[
        {name:'小裙子',path:'/classifyBox/'},
        {name:'上衣',path:'/classifyBox/classifyJacket'},
        {name:'下装',path:'/classifyBox/classifyPants'},
        {name:'外套',path:'/classifyBox/classifyCoat'},
        {name:'配件',path:'/classifyBox/classifyParts'},
        {name:'包包',path:'/classifyBox/classifyBag'},
        {name:'装扮',path:'/classifyBox/classifyAttire'},
        {name:'居家宅品',path:'/classifyBox/classifyHome'},
        {name:'办公文具',path:'/classifyBox/classifyStationery'},
        {name:'数码周边',path:'/classifyBox/classifyNumeral'},
        {name:'游戏专区',path:'/classifyBox/classifyPlay'}
      ]
    }
  },
  ready: function() {
    this.classChange(1);
    Vue.nextTick(function(){
      commonUtil.isAlloaded('#classify-scroll',function(){
        new IScroll('#classify-scroll',{
          click:true
        })
      })
    })
  },

  methods: {
    changShop(i){
      // this.bur = i;
    }
  }
}
</script>
