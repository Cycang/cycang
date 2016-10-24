<template>
  <div id="classify
  ">
    <header class="classifyHeader">
      <ul>
        <li v-bind:class="cur == $index ? 'active' : ''"
        v-on:click="changPage($index)"
        v-for="tab in tablist"
        v-link="{path:tab.path}"
        >{{tab.name}}</li>
      </ul>
    </header>
    <section class="classifySectionBox">
      <router-view>

      </router-view>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0,
      bur: 0,
      tablist: [
        {path: '/',name:'分类'},
        {path: '/label',name:'标签'}
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
