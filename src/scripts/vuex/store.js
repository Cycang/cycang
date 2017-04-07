import Vue from "../libs/vue.js";
import Vuex from "../libs/vuex.min.js";
Vue.use(Vuex);

const state = {
  tabIndex: 0,
  userName:'',
  classifyIndex:''
}
const mutations = {
  CHANGETAB (state, currentTabIndex) {
    state.tabIndex = currentTabIndex;
  },
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
})
