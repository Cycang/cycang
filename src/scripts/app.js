import "../styles/usage/page/app.scss";

// views
import index from "./components/index.vue";
import detail from "./components/detail.vue";
import buy from "./components/buy.vue";
import service from './components/service.vue';
import {getUserName} from './vuex/getters';

// router
// import Vue from "./libs/vue.js";
// import VueRouter from "./libs/vue-router.js";
// Vue.use(VueRouter);

import store from './vuex/store';

let router = new VueRouter();

let App = Vue.extend({
   store:store
});

router.map({
  '/': {
    component: index,
    //配置子路由 ，“/”是自动进入的路由页面
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
