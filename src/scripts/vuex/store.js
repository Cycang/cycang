import Vue from "../libs/vue.js";
import Vuex from "../libs/vuex.min.js";
Vue.use(Vuex);

const state = {
  tabIndex: 0
}
const mutations = {
  CHANGETAB (state, currentTabIndex) {
    state.tabIndex = currentTabIndex;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
