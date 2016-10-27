import "../styles/usage/page/app.scss";
// views
import index from "./components/index.vue";
import Vue from './libs/vue.js';
// import Vuex from "./libs/vuex.min.js";
import detail from "./components/detail.vue";
import buy from "./components/buy.vue";
import VueRouter from './libs/vue-router.js';
import service from './components/service.vue';
import store from './vuex/store';

Vue.use(VueRouter);
let router = new VueRouter();

let App = Vue.extend({
   store:store
});

router.map({
  '/': {
    component: index,
    //配置子路由 ，"/"是自动进入的路由页面
    subRoutes: {
      '/':{
         component:detail,
         subRoutes:{
            '/service':{
               component:service
            }
         }
      },
      '/buy': {
        component: buy
       }
    }
   }
});

router.start(App, 'body');
