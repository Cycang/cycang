// 装载模板
var indexTpl = require('../tpls/index.string');
var footerTpl = require('../tpls/footer.string');

var Vue = require('../libs/vue.js');
var VueResource = require('../libs/vue-resource.js');
Vue.use(VueResource);

import commonUtil from "../utils/commonUtil.js";
commonUtil.render(indexTpl);

var mySwiper = null;

var vm = new Vue({
  el: '.container',

  data: {
    list: [],
    curIndex: 0,
    indexNav: ['足球现场', '足球生活', '足球小姐'],
    footer: footerTpl
  },

  ready: function() {
    var that = this;
    this.$http.get('/mock/list.json')
      .then((res) => {
        this.list = res.data.data;

        setTimeout(function(){
          new IScroll('#index-scroll');
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
});
















//end
