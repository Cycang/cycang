import "../styles/usage/page/app.scss";

// views
import index from "./components/index.vue";
import detail from "./components/detail.vue";
import buy from "./components/buy.vue";

// router
import Vue from "./libs/vue.js";
import VueRouter from "./libs/vue-router.js";
Vue.use(VueRouter);

let router = new VueRouter();

let App = Vue.extend({});

router.map({
  '/': {
    component: index,
    //配置子路由 ，“/”是自动进入的路由页面
    subRoutes: {
      '/':{
         component:buy
      },
      '/buy': {
        component: detail
       }
    }
   }
});

router.start(App, 'body');
