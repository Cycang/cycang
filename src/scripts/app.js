import "../styles/usage/page/app.scss";

// views
import index from "./components/index.vue";
import my from "./components/my.vue";
import main from "./components/main.vue";
import dingdan from "./components/dingdan.vue";
import person from "./components/person.vue";
import login from "./components/login.vue";
import zhuce from "./components/zhuce.vue";
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
      '/': {
        component: main
      },
      '/my': {
        component: my,
      }
   }
 },
   '/login':{
     component:login,
   },
   '/zhuce':{
     component:zhuce,
   },
   '/person':{
     component:person
   },
 '/dingdan/:id':{
   name:'dingdan',
   component:dingdan
 }

});

router.start(App, 'body');
