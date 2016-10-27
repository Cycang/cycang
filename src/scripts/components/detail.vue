<template>
   <div class="detail-container">
      <header>
         <img src="/images/back1.png" >
         <h2>{{goodsInfor.result.product_info.name}}</h2>
         <img src="/images/home.png" >
      </header>
      <section id="detail-scroll">
         <div class="scrol-container">
            <div class="part1">
               <img src="/images/1476170715116.jpg" />
               <p>{{goodsInfor.result.product_info.name}}</p>
               <b>{{goodsInfor.result.product_info.price_gap_string}}</b>
               <p>
                  由 <i> {{goodsInfor.result.product_info.supplier_name}}</i> 发货
               </p>
            </div>
            <div class="part2">
               <h2>款式</h2>
               <ul>
                  <li v-for="item in goodsInlor.result.stock_info"
                  v-bind:class="cur==$index? 'active':''"
                  v-on:click="chooseSize($index)">
                     {{item.attribute}}
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
               <img src="/images/service_icon.png"  />
               <b>联系客服</b>
            </li>
            <li>
               <img src="/images/fav_not.png"  />
               <b>收藏</b>
            </li>
            <li>
               <img src="/images/cate-cart.png"  />
               <b>购物车</b>
            </li>
         </ul>
         <button type="button">加入购物车</button>
      </footer>
   </div>
</template>
<script type="text/javascript">
   var Vue = require('../libs/vue.js');
   var VueResource = require('../libs/vue-resource.js');
   var myScroll=null;
   Vue.use(VueResource);

   export default{
      data(){
         return{
            goodsInfor:{},
            cur:0,
            number:1,
            more:false,
            moreInfor:{}
         }
      },
      ready:function () {
         this.$http.get('/mock/detail.json').then((res)=>{
            this.goodsInfor=res.data;
            setTimeout(function () {
               myScroll=new IScroll('#detail-scroll',{
                  click:true
               });
            },500);
         });
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
               console.log(res.data);
               setTimeout(function () {
                  myScroll.refresh();
               },500);
            });
         }
      }
   }
</script>
