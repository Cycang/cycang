<template>
  <div>
    <div class="index-container">
        <router-view transition="goto"></router-view>
    </div>
    <footer id="footer" class="index-footer">
        <ul>
            <li
              v-bind:class="cur == $index ? 'active' : ''"
              v-on:click="changPage($index)"
              v-for="tab in tablist"
              v-link="{path: tab.path}">
                <i></i>
                <b>{{tab.name}}</b>
            </li>
        </ul>
    </footer>
  </div>
</template>

<script>
  import { tabChange } from '../vuex/actions';
  import { getTabIndex } from '../vuex/getters';

  export default {
    vuex: {
      actions: {
        change: tabChange
      },
      getters: {
        tabIndex: getTabIndex
      }
    },
    data() {
      return {
        cur: 0,
        tablist: [
          {path: '/index', name: '首页'},
          {path: '/index/classifyBox', name: '分类'},
          {path: '/index/photo', name: '吱吱'},
          {path: '/index/buy', name: '购物车'},
          {path: '/login', name: '个人中心'}
        ]
      }
    },


    methods: {
      changPage(i) {
        this.cur = i;
        this.change(i);
      }
    }
  }
</script>
