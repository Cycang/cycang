export const tabChange = function({dispatch,state}, tabIndex) {
  dispatch('CHANGETAB', tabIndex);
};

export const classifyChanger = function({dispatch, state}, classifyIndex) {
  dispatch('CLASSIFYCHANGETAB', classifyIndex);
};
//子路有引用入口
