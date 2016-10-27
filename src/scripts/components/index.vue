<template>
  <div>
    <div class="index-container">
        <router-view></router-view>
    </div>
    <footer id="footer">
        <ul>
            <li
              v-bind:class="cur == $index ? 'active' : ''"
              v-on:click="changPage($index)"
              v-for="tab in tablist"
              v-link="{path: tab.path}">
                <i class="iconfont">{{{tab.icon}}}</i>
                <b>{{tab.name}}</b>
            </li>
        </ul>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cur: 0,
        tablist: [
          {path: '/', icon: '&#xe6bb;', name: '首页'},
          {path: '/search', icon: '&#xe65c;', name: '发现'},
          {path: '/photo', icon: '&#xe664;', name: ''},
          {path: '/login', icon: '&#xe735;', name: '我的'},
          {path: '/exit', icon: '&#xe603;', name: '退出'}
        ]
      }
    },

    methods: {
      changPage(i) {
        this.cur = i;
      }
    }
  }
</script>
