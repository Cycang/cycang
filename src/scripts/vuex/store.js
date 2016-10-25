const state={
   userName:''
};

const mutations={
   ISLOHIGED(state,userName){
      state.userName=userName;
   }
}

export default new Vuex.Store({
   state,
   mutations
});
