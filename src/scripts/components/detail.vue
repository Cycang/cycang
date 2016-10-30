<template>
   <div class="detail-container">
      <header>
         <a href="javascript:history.go(-1)"><img src="/images/back1.png"></a>
         <h2 v-for="item in goodsInfor">{{item.result.product_info.name}}</h2>
         <img src="/images/home.png"  v-link="{path: '/index'}">
      </header>
      <section id="detail-scroll">
         <div class="scrol-container">
            <div class="part1" v-for='item in goodsInfor'>
               <img src="/images/1476170715116.jpg" />
               <p>{{item.result.product_info.name}}</p>
               <b>{{item.result.product_info.price_gap_string}}</b>
               <p>
                  由 <i> {{item.result.product_info.supplier_name}}</i> 发货
               </p>
            </div>
            <div class="part2">
               <h2>款式</h2>
               <ul>
                  <li v-for="item in goodsInlor"
                  v-bind:class="cur==$index? 'active':''"
                  v-on:click="chooseSize($index)">
                     {{item.result.stock_info.attribute}}
                  </li>
               </ul>
               <div>
                  <div>
                     <span>数量</span>
                     <img src="/images/cart-decrease.png" v-on:click="cartDecrease"/>
                     <b>{{number}}</b>
                     <img src="/images/cart-increase.png" v-on:click="cartIncrease" />
                  </div>
                  <p>
                     提示：普通商品享有质量问题7天退货，签收后3个工作日之内可换货，其他特殊商品（如手办）的售后以页面说明为准。
                  </p>
               </div>
            </div>
            <div class="part3">
               <template v-if="!more">
                  <h2>图文详情</h2>
                  <p v-on:click="loadMore">继续上拉,查看更多内容哦~</p>
               </template>
               <div v-else>
                  <p>{{moreInfor.title}}</p>
                  <ul>
                     <li v-for="item in moreInfor.imglist">
                        <img v-bind:src="item" />
                     </li>
                  </ul>
                  <div class="recommend">
                     <p>购买该商品的顾客还买了:</p>
                     <ul>
                        <li v-for="item in moreInfor.recommend">
                           <img v-bind:src="item.imgurl"/>
                           <p>{{item.text}}</p>
                           <i>{{item.price}}</i>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <footer>
         <ul>
            <li>
               <a href="https://static.meiqia.com/dist/standalone.html?eid=17853&metadata=%7B%22%5Cu5546%5Cu54c1%5Cu94fe%5Cu63a5%22%3A%22http%3A%5C%2F%5C%2Fcycang.com%5C%2Findex.php%3Fa%3Dp%26id%3D2855%22%7D">
               <img src="/images/service_icon.png" v-link={path:'./service'} />
               <b>联系客服</b>
               </a>
            </li>
            <li>
               <img :src="isstore? '/images/fav_is.png' :'/images/fav_not.png'" v-on:click="store" />
               <b>收藏</b>
            </li>
            <li>
               <img src="/images/cate-cart.png" v-link={path:'/index/buy'} />
               <b>购物车(<i>{{cartnum}}</i>)</b>
            </li>
         </ul>
         <button type="button" v-on:click="addcart" >加入购物车</button>
      </footer>
   </div>
</template>
<script type="text/javascript">
  import Vue from "../libs/vue.js";
  import VueRouter from "../libs/vue-router.js";
   import {getUserName} from '../vuex/getters';
   var myScroll=null;
   var timer="";
   export default{
      data(){
         return{
            name:'11',
            goodsInfor:[],
            cur:0,
            number:1,
            more:false,
            moreInfor:{},
            isstore:false,
            cartnum:0
         }
      },
      vuex:{
         getters:{
            getName:getUserName
         }
      },
      ready:function () {
         var that=this;
         this.$http.get('/mock/detail2.json').then((res)=>{
            this.goodsInfor=res.data;
            Vue.nextTick(function () {
               let imgs=document.getElementsByTagName('img');
               let iscomplete=0;
               timer=setInterval(function () {
                  for (let i = 0; i < imgs.length; i++) {
                     if (imgs[i].complete) {
                        iscomplete++;
                        if (iscomplete==imgs.length) {
                           clearInterval(timer);
                           myScroll=new IScroll('#detail-scroll',{
                              probeType:3,
                              click:true,
                              mouseWheel: true
                           });
                           myScroll.on('scroll',function () {
                              var y=this.y,
                                  maxY=this.maxScrollY-y;
                              // console.log(y+" "+maxY);
                              if (maxY>=60) {
                                 that.more=true;
                                 that.$http.get('/mock/detail-more2.json').then((res)=>{
                                    that.moreInfor=res.data;
                                    Vue.nextTick(function () {
                                       let imgs=document.getElementsByTagName('img');
                                       let iscomplete=0;
                                       timer=setInterval(function () {
                                          for (var i = 0; i < imgs.length; i++) {
                                             if (imgs[i].complete) {
                                                iscomplete++;
                                                if (iscomplete==imgs.length) {
                                                   clearInterval(timer);
                                                   myScroll.refresh();
                                                }
                                             }
                                          }
                                       },100);
                                    });
                                 });
                              }
                           });
                        }
                     }
                  }
               },100);
            });
         });
         this.name=this.getName;
         if (this.name&&localStorage.getItem(name)) {
            let goodsCart=JSON.parse(localStorage.getItem(name));
            this.cartnum=goodsCart.goods.length;
         }
      },
      methods:{
         chooseSize(index){
            this.cur=index;
         },
         cartDecrease(){
            if (this.number>1) {
               this.number--;
            }
         },
         cartIncrease(){
            this.number++;
         },
         scroll(){
            console.log(this);
         },
         loadMore(){
            this.more=true;
            this.$http.get('/mock/detail-more.json').then((res)=>{
               this.moreInfor=res.data;
               Vue.nextTick(function () {
                  let imgs=document.getElementsByTagName('img');
                  let iscomplete=0;
                  timer=setInterval(function () {
                     for (var i = 0; i < imgs.length; i++) {
                        if (imgs[i].complete) {
                           iscomplete++;
                           if (iscomplete==imgs.length) {
                              clearInterval(timer);
                              myScroll.refresh();
                           }
                        }
                     }
                  },100);
               });
            });
      },
         store(){
            this.isstore=!this.isstore;
         },
         //添加购物车
         addcart(){
            this.cartnum=this.cartnum+1;
            //判断用户是否登录是否存在
            if(this.name){
               //存在此用户并且，之前添加过商品
               if (localStorage.getItem(name)) {
                  let flag=true;
                     let goodsCart=JSON.parse(localStorage.getItem(name));
                     for (var i = 0; i < goodsCart.goods.length; i++) {
                        if (goodsCart.goods[i].id==this.goodsInfor[0].result.product_info.product_id) {
                           goodsCart.goods[i].num+=this.number;
                           flag=false;
                           return;
                        }
                     }
                     if (flag) {
                        goodsCart.goods.push({id:this.goodsInfor[0].result.product_info.product_id,num:this.number});
                     }
                  goodsCart=JSON.stringify(goodsCart);
                  localStorage.setItem(name,goodsCart);
               }else {//存在此用户但是以前没有添加过商品
                  let goodsCart={
                     user:'',
                     goods:[{id:-1,num:-1}]
                  }
                  goodsCart.user=this.name;
                  goodsCart.goods.push({id:this.goodsInfor[0].result.product_info.product_id,num:this.number});
                  goodsCart=JSON.stringify(goodsCart);
                  localStorage.setItem(name,goodsCart);
               }
            }else {//用户没有登录
            }
         }
      }
   }
</script>
