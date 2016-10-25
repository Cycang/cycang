import "../styles/usage/page/app.scss";

// views
// import index from "./components/index.vue";
// import main from "./components/main.vue";
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

import commonUtil from "./utils/commonUtil.js";
commonUtil.dirScroll();

let router = new VueRouter();

import store from "./vuex/store";
let App = Vue.extend({
  store:store
});

router.map({
  // '/': {
  //   component: index,
  //   subRoutes: {
  //     '/': {
  //       component: main
  //     },
      '/': {
        component: classifyBox,
        subRoutes:{
          '/':{
            component:classify,
            subRoutes:{
              '/':{
                component:classifySkirt
              },
              "/classifyJacket":{
                component:classifyJacket
              },
              "/classifyPants":{
                component:classifyPants
              },
              "/classifyCoat":{
                component:classifyCoat
              },
              "/classifyParts":{
                component:classifyParts
              },
              "/classifyBag":{
                component:classifyBag
              },
              "/classifyAttire":{
                component:classifyAttire
              },
              "/classifyHome":{
                component:classifyHome
              },
              "/classifyStationery":{
                component:classifyStationery
              },
              "/classifyNumeral":{
                component:classifyNumeral
              },
              "/classifyPlay":{
                component:classifyPlay
              }
            }
          },
          '/label':{
            component:label
          }
        },
      }
  //   }
  // }
});

router.start(App, 'body');
