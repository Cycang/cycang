<template>
   <router-view></router-view>
</template>
<script>
<<<<<<< HEAD
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
=======
>>>>>>> master
</script>
