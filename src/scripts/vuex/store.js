const state = {
  classifyIndex:0
}

const mutations = {
  CLASSIFYCHANGETAB(state,currentTabindex){
    state.classifyIndex = currentTabindex;
    // console.log(currentTabindex);
  }
}

export default new Vuex.Store({
  state,
  mutations
});
