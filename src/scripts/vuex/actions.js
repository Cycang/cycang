export const isLogined=({dispath,state},userName)=>{
   dispath('ISLOHIGED',userName)
};
export const classifyChanger = function({dispatch, state}, classifyIndex) {
  dispatch('CLASSIFYCHANGETAB', classifyIndex);
};