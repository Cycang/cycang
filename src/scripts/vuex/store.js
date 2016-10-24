const stste = {
  tabIndex:0
}

const mutations = {
  CLASSIFYCHANGETAB(state,currentTabindex){
    state.tabIndex = currentTabindex;
  }
}

export default new Vuex.Store({
  state,
  mutations
});
