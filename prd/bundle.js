/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _classifyBox = __webpack_require__(5);
	
	var _classifyBox2 = _interopRequireDefault(_classifyBox);
	
	var _classify = __webpack_require__(8);
	
	var _classify2 = _interopRequireDefault(_classify);
	
	var _label = __webpack_require__(14);
	
	var _label2 = _interopRequireDefault(_label);
	
	var _classifySkirt = __webpack_require__(17);
	
	var _classifySkirt2 = _interopRequireDefault(_classifySkirt);
	
	var _classifyJacket = __webpack_require__(20);
	
	var _classifyJacket2 = _interopRequireDefault(_classifyJacket);
	
	var _classifyPants = __webpack_require__(23);
	
	var _classifyPants2 = _interopRequireDefault(_classifyPants);
	
	var _classifyCoat = __webpack_require__(26);
	
	var _classifyCoat2 = _interopRequireDefault(_classifyCoat);
	
	var _classifyParts = __webpack_require__(29);
	
	var _classifyParts2 = _interopRequireDefault(_classifyParts);
	
	var _classifyBag = __webpack_require__(32);
	
	var _classifyBag2 = _interopRequireDefault(_classifyBag);
	
	var _classifyAttire = __webpack_require__(35);
	
	var _classifyAttire2 = _interopRequireDefault(_classifyAttire);
	
	var _classifyHome = __webpack_require__(38);
	
	var _classifyHome2 = _interopRequireDefault(_classifyHome);
	
	var _classifyStationery = __webpack_require__(41);
	
	var _classifyStationery2 = _interopRequireDefault(_classifyStationery);
	
	var _classifyNumeral = __webpack_require__(44);
	
	var _classifyNumeral2 = _interopRequireDefault(_classifyNumeral);
	
	var _classifyPlay = __webpack_require__(47);
	
	var _classifyPlay2 = _interopRequireDefault(_classifyPlay);
	
	var _commonUtil = __webpack_require__(10);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _store = __webpack_require__(50);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_commonUtil2.default.dirScroll();
	
	// views
	// import index from "./components/index.vue";
	// import main from "./components/main.vue";
	
	
	var router = new VueRouter();
	
	var App = Vue.extend({
	  store: _store2.default
	});
	
	router.map({
	  // '/': {
	  //   component: index,
	  //   subRoutes: {
	  //     '/': {
	  //       component: main
	  //     },
	  '/': {
	    component: _classifyBox2.default,
	    subRoutes: {
	      '/': {
	        component: _classify2.default,
	        subRoutes: {
	          '/': {
	            component: _classifySkirt2.default
	          },
	          "/classifyJacket": {
	            component: _classifyJacket2.default
	          },
	          "/classifyPants": {
	            component: _classifyPants2.default
	          },
	          "/classifyCoat": {
	            component: _classifyCoat2.default
	          },
	          "/classifyParts": {
	            component: _classifyParts2.default
	          },
	          "/classifyBag": {
	            component: _classifyBag2.default
	          },
	          "/classifyAttire": {
	            component: _classifyAttire2.default
	          },
	          "/classifyHome": {
	            component: _classifyHome2.default
	          },
	          "/classifyStationery": {
	            component: _classifyStationery2.default
	          },
	          "/classifyNumeral": {
	            component: _classifyNumeral2.default
	          },
	          "/classifyPlay": {
	            component: _classifyPlay2.default
	          }
	        }
	      },
	      '/label': {
	        component: _label2.default
	      }
	    }
	  }
	  //   }
	  // }
	});
	
	router.start(App, 'body');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyBox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div id="classify
	//   ">
	//     <header class="classifyHeader">
	//       <ul>
	//         <li v-bind:class="cur == $index ? 'active' : ''"
	//         v-on:click="changPage($index)"
	//         v-for="tab in tablist"
	//         v-link="{path:tab.path}"
	//         >{{tab.name}}</li>
	//       </ul>
	//     </header>
	//     <section class="classifySectionBox">
	//       <router-view>
	//
	//       </router-view>
	//     </section>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      cur: 0,
	      classifyIndex: 0,
	      tablist: [{ path: '/', name: '分类' }, { path: '/label', name: '标签' }]
	    };
	  },
	
	
	  methods: {
	    changPage: function changPage(i) {
	      this.cur = i;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"classify\n\">\n  <header class=\"classifyHeader\">\n    <ul>\n      <li v-bind:class=\"cur == $index ? 'active' : ''\"\n      v-on:click=\"changPage($index)\"\n      v-for=\"tab in tablist\"\n      v-link=\"{path:tab.path}\"\n      >{{tab.name}}</li>\n    </ul>\n  </header>\n  <section class=\"classifySectionBox\">\n    <router-view>\n\n    </router-view>\n  </section>\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classify.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classify.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _commonUtil = __webpack_require__(10);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _action = __webpack_require__(11);
	
	var _getters = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  vuex: {
	    getters: {
	      classindex: _getters.getTabindex
	    },
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
	    return {
	      shoplist: [{ name: '小裙子', path: '/' }, { name: '上衣', path: '/classifyJacket' }, { name: '下装', path: '/classifyPants' }, { name: '外套', path: '/classifyCoat' }, { name: '配件', path: '/classifyParts' }, { name: '包包', path: '/classifyBag' }, { name: '装扮', path: 'classifyAttire' }, { name: '居家宅品', path: '/classifyHome' }, { name: '办公文具', path: '/classifyStationery' }, { name: '数码周边', path: '/classifyNumeral' }, { name: '游戏专区', path: '/classifyPlay' }]
	    };
	  },
	
	  ready: function ready() {
	    Vue.nextTick(function () {
	      _commonUtil2.default.isAlloaded('#classify-scroll', function () {
	        new IScroll('#classify-scroll', {
	          click: true
	        });
	      });
	    });
	  },
	
	  methods: {
	    changShop: function changShop(i) {
	      // this.bur = i;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="classifySection">
	//     <ul class="shopUl">
	//       <li v-for="shop in shoplist" v-bind:class="classindex == $index ? 'active' : ''"
	//       v-on:click="changShop($index)" v-link="{path:shop.path}">{{shop.name}}</li>
	//     </ul>
	//     <div id="classify-scroll">
	//         <router-view></router-view>
	//     </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var commonUtil = {
	  //判定页面图片是否加载完成
	  isAlloaded: function isAlloaded(scope, cb) {
	    var t_img; //定时器
	    var isLoad = true; //控制变量
	    //判断图片的加载情况，加载完成后回调
	    return isImgLoad(cb);
	    //判断图片加载的函数
	    function isImgLoad(callback) {
	      //查找所有的图片 迭代处理
	      $(scope).find('img').each(function () {
	        //找到为0就将isload设false 并退出each
	        if (this.height === 0) {
	          isLoad = false;
	          return false;
	        }
	      });
	      // 为true 没有发现为0的 加载完成
	      if (isLoad) {
	        clearTimeout(t_img); //清除定时器
	        // 回调
	        callback(scope);
	        //为false 因为找到了没有加载完成的图 将调用定时器地鬼
	      } else {
	        isLoad = true;
	        t_img = setTimeout(function () {
	          isImgLoad(callback); //递归扫描
	        }, 500); //
	      }
	    }
	  },
	  dirScroll: function dirScroll() {
	    var that = this;
	    // 自定义指令
	    Vue.directive('scroll', function (value) {
	      if (value) {
	        that.isAllLoaded('#classify-scroll', function () {
	          new IScroll(value);
	        });
	      }
	    });
	  }
	};
	
	exports.default = commonUtil;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var classifyChanger = exports.classifyChanger = function classifyChanger(_ref, classifyIndex) {
	  var dispatch = _ref.dispatch;
	  var state = _ref.state;
	
	  dispatch('CLASSIFYCHANGETAB', classifyIndex);
	};
	//子路有引用入口

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// export const getTabindex = state => state.tabIndex;
	var getTabindex = exports.getTabindex = function getTabindex(state) {
	  return state.classifyIndex;
	  console.log(state.classifyIndex);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"classifySection\">\n  <ul class=\"shopUl\">\n    <li v-for=\"shop in shoplist\" v-bind:class=\"classindex == $index ? 'active' : ''\"\n    v-on:click=\"changShop($index)\" v-link=\"{path:shop.path}\">{{shop.name}}</li>\n  </ul>\n  <div id=\"classify-scroll\">\n      <router-view></router-view>\n  </div>\n</div>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\label.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./label.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div id="label-scroll">
	//     <ul>
	//       <li v-for="l in list" class="{{l.group}}">
	//         <p>{{l.tittle}}</p>
	//       </li>
	//     </ul>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      list: [{ "tittle": "喵星人", "group": "class1" }, { "tittle": "次元仓", "group": "class2" }, { "tittle": "星河动漫", "group": "class3" }, { "tittle": "A3原创洋装店", "group": "class2" }, { "tittle": "世界线的彼岸", "group": "class3" }, { "tittle": "一方尘寰", "group": "class1" }, { "tittle": "彩虹堂正品动漫", "group": "class3" }, { "tittle": "amovo魔吻", "group": "class1" }, { "tittle": "SYS艺术说", "group": "class2" }, { "tittle": "石头人工作室", "group": "class1" }, { "tittle": "Funko", "group": "class2" }, { "tittle": "十里丹青", "group": "class3" }, { "tittle": "创一文化", "group": "class2" }, { "tittle": "亚蒙兔家", "group": "class3" }, { "tittle": "宇宙电波", "group": "class1" }, { "tittle": "禹屋原创", "group": "class3" }, { "tittle": "符豚甲胄", "group": "class1" }, { "tittle": "能量天使", "group": "class2" }, { "tittle": "上海简菲", "group": "class1" }, { "tittle": "chairball原创设", "group": "class2" }, { "tittle": "砚池工作室", "group": "class3" }, { "tittle": "云落秋池", "group": "class2" }, { "tittle": "十一宫", "group": "class3" }, { "tittle": "长草颜文字", "group": "class1" }, { "tittle": "网易游戏", "group": "class3" }, { "tittle": "ISOS", "group": "class1" }, { "tittle": "绝对萌域", "group": "class2" }, { "tittle": "雪猫一族", "group": "class1" }, { "tittle": "天闻角川", "group": "class2" }, { "tittle": "静悦坊", "group": "class3" }]
	    };
	  },
	
	  ready: function ready() {
	    setTimeout(function () {
	      new IScroll('#label-scroll');
	    }, 500);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"label-scroll\">\n  <ul>\n    <li v-for=\"l in list\" class=\"{{l.group}}\">\n      <p>{{l.tittle}}</p>\n    </li>\n  </ul>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifySkirt.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifySkirt.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null;
	// console.log(classifyChanger);
	// <template>
	//   <div class="scrollbox">
	//
	//     <div class="hot-sale">
	//       <p>热卖推荐</p>
	//       <ul class="hotSale">
	//         <li v-for="hot in hot_sale">
	//           <img v-bind:src="hot.figure"/>
	//           <p>￥{{hot.cover_price}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//     <div class="comm-cat">
	//       <p>常用分类</p>
	//       <ul class="commUl">
	//         <li v-for="l in list">
	//           <img v-bind:src="l.pic"/>
	//           <p>{{l.name}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
	    return {
	      currentTabindex: 0,
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[0].child;
	      // console.log(this.list);
	    });
	    this.classChange(0);
	    // console.log(classifyIndex);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\"/>\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\"/>\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyJacket.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyJacket.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null; // <template>
	//   <div class="scrollbox">
	//     <div class="hot-sale">
	//       <p>热卖推荐</p>
	//       <ul class="hotSale">
	//         <li v-for="hot in hot_sale">
	//           <img v-bind:src="hot.figure" />
	//           <p>￥{{hot.cover_price}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//     <div class="comm-cat">
	//       <p>常用分类</p>
	//       <ul class="commUl">
	//         <li v-for="l in list">
	//           <img v-bind:src="l.pic" />
	//           <p>{{l.name}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[1].child;
	      // console.log(this.list);
	    });
	    this.classChange(1);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\" />\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\" />\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyPants.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyPants.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null; // <template>
	//   <div class="scrollbox">
	//     <div class="hot-sale">
	//       <p>热卖推荐</p>
	//       <ul class="hotSale">
	//         <li v-for="hot in hot_sale">
	//           <img v-bind:src="hot.figure" />
	//           <p>￥{{hot.cover_price}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//     <div class="comm-cat">
	//       <p>常用分类</p>
	//       <ul class="commUl">
	//         <li v-for="l in list">
	//           <img v-bind:src="l.pic" />
	//           <p>{{l.name}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[2].child;
	      // console.log(this.list);
	    });
	    this.classChange(2);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\" />\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\" />\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyCoat.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyCoat.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null; // <template>
	//   <div class="scrollbox">
	//     <div class="hot-sale">
	//       <p>热卖推荐</p>
	//       <ul class="hotSale">
	//         <li v-for="hot in hot_sale">
	//           <img v-bind:src="hot.figure" />
	//           <p>￥{{hot.cover_price}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//     <div class="comm-cat">
	//       <p>常用分类</p>
	//       <ul class="commUl">
	//         <li v-for="l in list">
	//           <img v-bind:src="l.pic" />
	//           <p>{{l.name}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[3].child;
	      // console.log(this.list);
	    });
	    this.classChange(3);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\" />\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\" />\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyParts.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyParts.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null; // <template>
	//   <div class="scrollbox">
	//     <div class="hot-sale">
	//       <p>热卖推荐</p>
	//       <ul class="hotSale">
	//         <li v-for="hot in hot_sale">
	//           <img v-bind:src="hot.figure" />
	//           <p>￥{{hot.cover_price}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//     <div class="comm-cat">
	//       <p>常用分类</p>
	//       <ul class="commUl">
	//         <li v-for="l in list">
	//           <img v-bind:src="l.pic" />
	//           <p>{{l.name}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[4].child;
	      // console.log(this.list);
	    });
	    this.classChange(4);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\" />\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\" />\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyBag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyBag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null; // <template>
	//     <div class="scrollbox">
	//       <div class="hot-sale">
	//         <p>热卖推荐</p>
	//         <ul class="hotSale">
	//           <li v-for="hot in hot_sale">
	//             <img v-bind:src="hot.figure"/>
	//             <p>￥{{hot.cover_price}}</p>
	//           </li>
	//         </ul>
	//       </div>
	//       <div class="comm-cat">
	//         <p>常用分类</p>
	//         <ul class="commUl">
	//           <li v-for="l in list">
	//             <img v-bind:src="l.pic"/>
	//             <p>{{l.name}}</p>
	//           </li>
	//         </ul>
	//       </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[5].child;
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\"/>\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\"/>\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(36)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyAttire.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(37)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyAttire.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null; // <template>
	//     <div class="scrollbox">
	//       <div class="hot-sale">
	//         <p>热卖推荐</p>
	//         <ul class="hotSale">
	//           <li v-for="hot in hot_sale">
	//             <img v-bind:src="hot.figure"/>
	//             <p>￥{{hot.cover_price}}</p>
	//           </li>
	//         </ul>
	//       </div>
	//       <div class="comm-cat">
	//         <p>常用分类</p>
	//         <ul class="commUl">
	//           <li v-for="l in list">
	//             <img v-bind:src="l.pic"/>
	//             <p>{{l.name}}</p>
	//           </li>
	//         </ul>
	//       </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[6].child;
	    });
	    this.classChange(6);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\"/>\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\"/>\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(39)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyHome.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(40)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyHome.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null; // <template>
	//   <div class="scrollbox">
	//     <div class="hot-sale">
	//       <p>热卖推荐</p>
	//       <ul class="hotSale">
	//         <li v-for="hot in hot_sale">
	//           <img v-bind:src="hot.figure" />
	//           <p>￥{{hot.cover_price}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//     <div class="comm-cat">
	//       <p>常用分类</p>
	//       <ul class="commUl">
	//         <li v-for="l in list">
	//           <img v-bind:src="l.pic" />
	//           <p>{{l.name}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[7].child;
	      // console.log(this.list);
	    });
	    this.classChange(7);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\" />\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\" />\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(42)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyStationery.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(43)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyStationery.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null; // <template>
	//   <div class="scrollbox">
	//     <div class="hot-sale">
	//       <p>热卖推荐</p>
	//       <ul class="hotSale">
	//         <li v-for="hot in hot_sale">
	//           <img v-bind:src="hot.figure" />
	//           <p>￥{{hot.cover_price}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//     <div class="comm-cat">
	//       <p>常用分类</p>
	//       <ul class="commUl">
	//         <li v-for="l in list">
	//           <img v-bind:src="l.pic" />
	//           <p>{{l.name}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[8].child;
	      // console.log(this.list);
	    });
	    this.classChange(8);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\" />\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\" />\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(45)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyNumeral.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyNumeral.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null; // <template>
	//   <div class="scrollbox">
	//     <div class="hot-sale">
	//       <p>热卖推荐</p>
	//       <ul class="hotSale">
	//         <li v-for="hot in hot_sale">
	//           <img v-bind:src="hot.figure" />
	//           <p>￥{{hot.cover_price}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//     <div class="comm-cat">
	//       <p>常用分类</p>
	//       <ul class="commUl">
	//         <li v-for="l in list">
	//           <img v-bind:src="l.pic" />
	//           <p>{{l.name}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[9].child;
	      // console.log(this.list);
	    });
	    this.classChange(9);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\" />\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\" />\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(48)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\classifyPlay.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./classifyPlay.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _action = __webpack_require__(11);
	
	var mySwiper = null; // <template>
	//   <div class="scrollbox">
	//     <div class="hot-sale">
	//       <p>热卖推荐</p>
	//       <ul class="hotSale">
	//         <li v-for="hot in hot_sale">
	//           <img v-bind:src="hot.figure" />
	//           <p>￥{{hot.cover_price}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//     <div class="comm-cat">
	//       <p>常用分类</p>
	//       <ul class="commUl">
	//         <li v-for="l in list">
	//           <img v-bind:src="l.pic" />
	//           <p>{{l.name}}</p>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      classChange: _action.classifyChanger
	    }
	  },
	  data: function data() {
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
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/classify.json').then(function (res) {
	      _this.list = res.data.result[10].child;
	      // console.log(this.list);
	    });
	    this.classChange(10);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"scrollbox\">\n  <div class=\"hot-sale\">\n    <p>热卖推荐</p>\n    <ul class=\"hotSale\">\n      <li v-for=\"hot in hot_sale\">\n        <img v-bind:src=\"hot.figure\" />\n        <p>￥{{hot.cover_price}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"comm-cat\">\n    <p>常用分类</p>\n    <ul class=\"commUl\">\n      <li v-for=\"l in list\">\n        <img v-bind:src=\"l.pic\" />\n        <p>{{l.name}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = {
	  classifyIndex: 0
	};
	
	var mutations = {
	  CLASSIFYCHANGETAB: function CLASSIFYCHANGETAB(state, currentTabindex) {
	    state.classifyIndex = currentTabindex;
	    // console.log(currentTabindex);
	  }
	};
	
	exports.default = new Vuex.Store({
	  state: state,
	  mutations: mutations
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map