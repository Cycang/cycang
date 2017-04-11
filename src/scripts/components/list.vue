<template>
  <div class="list-container">
    <div class="list-top">
      <header class="list-header">
        <i class="list-back" @click="back"></i>
        <div class="list-search">
          <span @click="searchPro"></span>
          <input v-model="message" type="text" placeholder="请输入关键字" name="name" value="">
        </div>
        <i class="list-home" v-link="{path: '/index'}"></i>
      </header>
      <div class="list-nav">
        <span @click="changeList" class="{{cur==0?'active':''}}" data-index="0">综合排序</span>
        <span @click="sortPrice" class="{{cur==1?'active':''}}" data-index="1">价格<i></i></span>
        <select v-model="selected" @change="selectPrice" class="{{cur==2?'active':''}}" data-index="2" class="nav-select">
          <option selected>筛选</option>
          <option v-for="o in options">{{o}}</option>
        </select>
      </div>
    </div>
    <div class="list-scroll" id="list-scroll">
      <div class="scroll-box">
        <div>
          <dl v-for="l in list" v-link="{path: '/detail'}">
            <dt><img v-bind:src="l.figure" alt="" /></dt>
            <dd>
              <span>{{l.name}}</span>
              <b>￥{{l.cover_price}}</b>
            </dd>
          </dl>
        </div>
        <div class="foot">
          <img v-bind:src="imgArrow" />
          <span>上拉加载更多...</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import commonUtil from "../utils/commonUtil.js";
  import Vue from "../libs/vue.js";
  var myScroll = null;

  export default {
    data() {
        return {
          cur: 0,
          list: [],
          copyList: [],
          counter: 0,
          message: '',
          options: [
            "0-15", "15-30", "30-50", "50-70", "70-100", "100以上"
          ],
          selected: '',
          hanPri: [],
          tenPri: [],
          searchProduct: [],
          imgArrow: './images/arrow.png'
        }
      },
      ready() {
        var that = this;
        this.$http.get('/mock/list.json')
          .then((res) => {
            that.list = res.data.result.page_data;
            Vue.nextTick(function() {
              commonUtil.isAlloaded('#list-scroll', function() {
                myScroll = new IScroll('#list-scroll', {
                  probeType: 3,
                  mouseWheel: true,
                  click: true
                });

                myScroll.scrollTo(0, -35);
                var foot = $('.foot img'),
                  bottomImgHasClass = foot.hasClass('down');
                myScroll.on('scroll', function() {
                  var y = this.y,
                    maxY = this.maxScrollY - y;
                  if (maxY >= 0) {
                    !bottomImgHasClass && foot.addClass('down');
                    return '';
                  }
                });
                myScroll.on('scrollEnd', function() {
                  var self = this;
                  var maxY = this.maxScrollY - this.y;
                  if (maxY > -35 && maxY < 0) {
                    myScroll.scrollTo(0, self.maxScrollY + 35);
                    foot.removeClass('down')
                  } else if (maxY >= 0) {
                    foot.attr('src', '/images/ajax-loader.gif');
                    //ajax上拉加载数据
                    that.$http.get('/mock/listMore.json')
                      .then((res) => {
                        that.list = that.list.concat(res.data.result.page_data);
                        foot.removeClass('down');
                        foot.attr('src', '/images/arrow.png');
                        Vue.nextTick(function() {
                          myScroll.refresh();
                        });
                      });

                  }
                });
              })
            })


            $.each(this.list, function(i, value) {
              that.copyList.push(value);
            });
            console.log(this.copyList);
          });

      },

      methods: {
        changeList(e) {
          this.cur = e.target.dataset.index;
          var that = this;
          this.list = [];
          this.list = this.copyList;
          console.log(this.copyList);
          // $.each(this.copyList, function(i, value) {
          //   that.list.push(value);
          // });
        },
        sortPrice(e) {
          var that = this;
          this.list = [];
          this.cur = e.target.dataset.index;
          this.list = this.copyList;
          // $.each(this.copyList, function(i, value) {
          //   that.list.push(value);
          // })

          if (this.counter % 2 == 0) {
            this.list.sort(function(a, b) {
              return a.cover_price - b.cover_price;
            })
            this.counter++;
          } else {
            this.list.sort(function(a, b) {
              return b.cover_price - a.cover_price;
            })
            this.counter++;
          }
        },
        selectPrice(e) {
          var that = this;
          this.list = [];
          this.cur = e.target.dataset.index;
          $.each(this.copyList, function(i, value) {
            that.list.push(value);
          });
          var priStr = this.selected;
          var lnum, fnum;
          if (priStr == "100以上") {
            fnum = priStr.substr(0, 3);
            this.hanPri = [];
            $.each(this.list, function(i, value) {
              if (Math.floor(value.cover_price) >= fnum) {
                that.hanPri.push(value);
                console.log(value);
              }
            });
            this.list = [];
            $.each(this.hanPri, function(i, value) {
              that.list.push(value);
            });
          } else {
            fnum = priStr.substr(0, 2);
            let index = priStr.indexOf('-');
            lnum = priStr.substring(index + 1, priStr.length);
            this.tenPri = [];
            $.each(this.list, function(i, value) {
              if (Math.floor(value.cover_price) >= parseInt(fnum) && Math.floor(value.cover_price) <= parseInt(lnum)) {
                that.tenPri.push(value);
              }
            });
            this.list = [];
            $.each(this.tenPri, function(i, value) {
              that.list.push(value);
            });
            console.log(this.list);
          }
        },
        searchPro() {
          var that = this;
          this.list = [];
          $.each(this.copyList, function(i, value) {
            that.list.push(value);
          });

          $.each(this.list, function(i, value) {
            if (value.name.indexOf(that.message) >= 0) {
              that.searchProduct.push(value);
            }
          });
          this.list = [];
          $.each(this.searchProduct, function(i, value) {
            that.list.push(value);
          });
        },
        back(){
          window.history.go(-1);
        }
      }


  }
</script>
