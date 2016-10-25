<template>
   <div class="buy-container">
      <header>
         <img src="/images/back1.png" />
         <h2>购物车</h2>
         <p>编辑</p>
      </header>
      <section id="buy-scroll">
         <div>
            <ul>
               <li v-for="item in buylist">
                  <div class="part1">
                     <img v-bind:src="item.choose? '/images/sel-order.png':'/images/unsel.png'" v-on:click="choose($index)"/>
                     <h2>{{item.store}}</h2>
                     <p>{{item.deliverway}}</p>
                     <i>本单免邮</i>
                  </div>
                  <div class="part2">
                     <img v-bind:src="item.choose? '/images/sel-order.png':'/images/unsel.png'" v-on:click="choose($index)" />
                     <img v-bind:src="item.img" />
                     <div>
                        <div>
                           <p>{{item.name}}</p>
                           <span>款式:</span>
                           <span>{{item.size}}</span>
                        </div>
                        <div>
                           <i>￥{{item.price}}</i>
                           <img src="/images/cart-decrease.png" v-on:click="decrease($index)"/>
                           <b>{{item.number}}</b>
                           <img src="/images/cart-increase.png" v-on:click="increase($index)"/>
                        </div>
                     </div>
                  </div>
                  <div class="part3">
                     <span>小计:</span>
                     <i>￥{{item.total}}</i>
                  </div>
               </li>
            </ul>
         </div>
      </section>
      <footer>
         <img v-bind:src="chooseall? '/images/sel-order.png':'/images/unsel.png'" v-on:click="chooseAll" />
         <b>全选</b>
         <div>
            <span>合计:</span>
            <i>￥{{total}}</i>
         </div>
         <button>去结算({{buynum}})</button>
      </footer>
   </div>
</template>

<script type="text/javascript">
import { getUserName } from '../vuex/getters';
import { setUserName } from '../vuex/actions';;
var timer="";

export default{
   data(){
      return{
         buylist:[],
         total:0,
         chooseall:true,
         buynum:0
      }
   },
   vuex:{
      actions:{
         setName:setUserName
      },
      getters:{
         getName:getUserName
      }
   },
   ready:function () {
      var that=this;
      this.$http.get('/mock/buy.json').then((res)=>{
         this.buylist=res.data.goodslist;
         //计算总价格和购买件数
         this.total=0;
         for (let i = 0; i < this.buylist.length; i++) {
            this.total=this.total+this.buylist[i].total;
            this.buynum=this.buylist.length;
         }

         let imgs=that.buylist.length*5+2;
         //判断图片是否加载完成
         timer=setInterval(function () {
            if (imgs==document.getElementsByTagName('img').length) {
               new IScroll('#buy-scroll',{
                  click:true
               });
               console.log("加载完成");
               clearInterval(timer);
            }
         },200);
      });
   },
   methods:{
      choose(index){
         this.buylist[index].choose=!this.buylist[index].choose;
         //计算总价格和购买件数
         this.total=0;
         this.buynum=0;
         for (let i = 0; i < this.buylist.length; i++) {
            if (this.buylist[i].choose) {
               this.total=this.total+this.buylist[i].total;
               this.buynum=this.buynum+this.buylist[i].number;
            }
         }
         let flag=0;
         for (let i = 0; i < this.buylist.length; i++) {
            if (this.buylist[i].choose) {
               flag++;
            }
         }
         if (flag==this.buylist.length) {
            this.chooseall=true;
         }else {
            this.chooseall=false;
         }
      },
      chooseAll(){
         this.chooseall=!this.chooseall;
         if (this.chooseall) {
            for (let i = 0; i < this.buylist.length; i++) {
               this.buylist[i].choose=true;
            }
            //计算总价格和购买件数
            this.total=0;
            this.buynum=0;
            for (let i = 0; i < this.buylist.length; i++) {
               if (this.buylist[i].choose) {
                  this.total=this.total+this.buylist[i].total;
                  this.buynum=this.buynum+this.buylist[i].number;
               }
            }
         }else {
            for (let i = 0; i < this.buylist.length; i++) {
               this.buylist[i].choose=false;
            }
            //计算总价格和购买件数
            this.total=0;
            this.buynum=0;
            for (let i = 0; i < this.buylist.length; i++) {
               if (this.buylist[i].choose) {
                  this.total=this.total+this.buylist[i].total;
                  this.buynum=this.buynum+this.buylist[i].number;
               }
            }
         }
      },
      decrease(index){
         if (this.buylist[index].number>1) {
            this.buylist[index].choose=true;
            this.buylist[index].number--;
            this.buylist[index].total=this.buylist[index].number*this.buylist[index].price;
            //计算总价
            this.total=0;
            this.buynum=0;
            for (let i = 0; i < this.buylist.length; i++) {
               if (this.buylist[i].choose) {
                  this.total=this.total+this.buylist[i].total;
                  this.buynum=this.buynum+this.buylist[i].number;
               }
            }
         }
      },
      increase(index){
         this.buylist[index].choose=true;
         this.buylist[index].number++;
         this.buylist[index].total=this.buylist[index].number*this.buylist[index].price
         //计算总价
         this.total=0;
         this.buynum=0;
         for (let i = 0; i < this.buylist.length; i++) {
            if(this.buylist[i].choose){
               this.total=this.total+this.buylist[i].total;
               this.buynum=this.buynum+this.buylist[i].number;
            }
         }
      }
   }
}
</script>
