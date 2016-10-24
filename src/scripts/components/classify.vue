<template>
  <div class="classifySection">
    <ul class="shopUl">
      <li v-for="shop in shoplist" v-bind:class="bur == $index ? 'active' : ''"
      v-on:click="changShop($index)" v-link="{path:shop.path}">{{shop.name}}</li>
    </ul>
    <div id="classify-scroll">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
import commonUtil from "../utils/commonUtil";
export default {
  data() {
    return {
      bur: 0,
      shoplist:[
        {name:'小裙子',path:'/'},
        {name:'上衣',path:'/classifyJacket'},
        {name:'下装',path:'/classifyPants'},
        {name:'外套',path:'/classifyCoat'},
        {name:'配件',path:'/classifyParts'},
        {name:'包包',path:'/classifyBag'},
        {name:'装扮',path:'classifyAttire'},
        {name:'居家宅品',path:'/classifyHome'},
        {name:'办公文具',path:'/classifyStationery'},
        {name:'数码周边',path:'/classifyNumeral'},
        {name:'游戏专区',path:'/classifyPlay'}
      ]
    }
  },
  ready: function() {
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
      this.bur = i;
    }
  }
}
</script>
