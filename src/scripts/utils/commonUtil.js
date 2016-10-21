let commonUtil = {
  render(str) {
    let container = document.querySelector('body');
    container.innerHTML = str + container.innerHTML;
  }
};

export default commonUtil;
