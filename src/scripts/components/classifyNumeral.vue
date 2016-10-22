<template>
    <div class="hot-sale">
      <p>热卖推荐</p>
      <ul class="hotSale">
        <li v-for="hot in hot_sale">
          <img v-bind:src="hot.figure"/>
          <p>￥{{hot.cover_price}}</p>
        </li>
      </ul>
    </div>
    <div class="comm-cat">
      <p>常用分类</p>
      <ul class="commUl">
        <li v-for="l in list">
          <img v-bind:src="l.pic"/>
          <p>{{l.name}}</p>
        </li>
      </ul>
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
          hot_sale: [{
            "product_id": "2704",
            "channel_id": "6",
            "brand_id": "230",
            "p_catalog_id": "3",
            "supplier_type": "1",
            "supplier_code": "0",
            "name": "中华风lolita -山海经 凤凰图 JSK",
            "cover_price": "300.00",
            "brief": "",
            "figure": "http://f.p.cycangcdn.com/1447239453626.jpg",
            "sell_time_start": "1447171200",
            "sell_time_end": "1447776000"
          }, {
            "product_id": "3571",
            "channel_id": "8",
            "brand_id": "259",
            "p_catalog_id": "12",
            "supplier_type": "2",
            "supplier_code": "1801005",
            "name": "【INFANTA.婴梵塔】学院风尖领外套/大衣",
            "cover_price": "287.00",
            "brief": "",
            "figure": "http://f.p.cycangcdn.com/1450433177397.jpg",
            "sell_time_start": "1450368000",
            "sell_time_end": "1450972800"
          }, {
            "product_id": "5181",
            "channel_id": "6",
            "brand_id": "394",
            "p_catalog_id": "10",
            "supplier_type": "2",
            "supplier_code": "1101037",
            "name": "【画影】汉元素 古风日常—— 仲夏 ",
            "cover_price": "250.00",
            "brief": "",
            "figure": "http://f.p.cycangcdn.com/1457504361484.jpg",
            "sell_time_start": "1457452800",
            "sell_time_end": "1458057600"
          }]
        }
      },

      ready: function() {
        var that = this;
        this.$http.get('/mock/classify.json')
          .then((res) => {
            this.list = res.data.result[9].child;
            setTimeout(function() {
              new IScroll('#index-scroll');
            }, 500);
          })
      }
  }
</script>
