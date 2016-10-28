import Vue from "../libs/vue.js";
import Vuex from "../libs/vuex.min.js";
Vue.use(Vuex);
const state={
   userName:'',
   classifyIndex:''
};

const mutations={
   ISLOHIGED(state,userName){
      state.userName=userName;
   },
   CLASSIFYCHANGETAB(state,currentTabindex){
    state.classifyIndex = currentTabindex;
  }
}

export default new Vuex.Store({
   state,
   mutations
});
