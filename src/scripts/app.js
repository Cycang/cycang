import "../styles/usage/page/app.scss";

import commonUtil from "./utils/commonUtil.js";

// views
import guide from "./components/guide.vue";
import index from "./components/index.vue";
import main from "./components/main.vue";
import list from "./components/list.vue";
import my from "./components/my.vue";

import dingdan from "./components/dingdan.vue";
import person from "./components/person.vue";
import login from "./components/login.vue";
import zhuce from "./components/zhuce.vue";
import bianji from "./components/bianji.vue";
import zhizhi from "./components/zhizhi.vue";

import detail from "./components/detail.vue";
import buy from "./components/buy.vue";

// router
import Vue from "./libs/vue.js";
import VueRouter from "./libs/vue-router.js";
//zxp
import classifyBox from "./components/classifyBox.vue";
import classify from "./components/classify.vue";
import label from "./components/label.vue";
import classifySkirt from "./components/classifySkirt.vue";
import classifyJacket from "./components/classifyJacket.vue";
import classifyPants from "./components/classifyPants.vue";
import classifyCoat from "./components/classifyCoat.vue";
import classifyParts from "./components/classifyParts.vue";
import classifyBag from "./components/classifyBag.vue";
import classifyAttire from "./components/classifyAttire.vue";
import classifyHome from "./components/classifyHome.vue";
import classifyStationery from "./components/classifyStationery.vue";
import classifyNumeral from "./components/classifyNumeral.vue";
import classifyPlay from "./components/classifyPlay.vue";
import live from "./components/live.vue";
Vue.use(VueRouter);
import service from './components/service.vue';
import store from './vuex/store';


let router = new VueRouter();

let App = Vue.extend({
  store: store
});

router.map({
  '/': {
    component: guide,
  },
  //配置子路由 ，“/”是自动进入的路由页面
  '/index': {
    component: index,
    subRoutes: {
      '/': {
        component: main
      },
      '/buy': {
        component: buy
      },

      '/classifyBox': {
        component: classifyBox,
        subRoutes: {
          '/': {
            component: classify,
            subRoutes: {
              '/': {
                component: classifySkirt
              },
              "/classifyJacket": {
                component: classifyJacket
              },
              "/classifyPants": {
                component: classifyPants
              },
              "/classifyCoat": {
                component: classifyCoat
              },
              "/classifyParts": {
                component: classifyParts
              },
              "/classifyBag": {
                component: classifyBag
              },
              "/classifyAttire": {
                component: classifyAttire
              },
              "/classifyHome": {
                component: classifyHome
              },
              "/classifyStationery": {
                component: classifyStationery
              },
              "/classifyNumeral": {
                component: classifyNumeral
              },
              "/classifyPlay": {
                component: classifyPlay
              }
            }
          }
        }
      },
      '/label': {
        component: label
      },
      '/photo':{
        component:zhizhi
      }
    }
  },
  '/my': {
    component: my
  },
  '/list': {
    component: list
  },
  '/detail': {
    component: detail
  },
  '/person/:zhanghao': {
    component: person
  },
  '/login': {
    component: login
    // name: 'login'
  },
  '/zhuce': {
    component: zhuce
  },
  '/bianji/:zhanghao': {
    name: 'bianji',
    component: bianji
  },
  '/dingdan/:id': {
    name: 'dingdan',
    component: dingdan
  }
});

router.start(App, 'body');
