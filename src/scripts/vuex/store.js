import Vue from '../libs/vue.js';
import Vuex from '../libs/vuex.min.js';
Vue.use(Vuex);
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
