<template>
  <div id="label-scroll">
    <ul>
      <li v-for="l in list" class="{{l.group}}">
        <p>{{l.tittle}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        list:[
          {"tittle":"喵星人","group":"class1"},
          {"tittle":"次元仓","group":"class2"},
          {"tittle":"星河动漫","group":"class3"},
          {"tittle":"A3原创洋装店","group":"class2"},
          {"tittle":"世界线的彼岸","group":"class3"},
          {"tittle":"一方尘寰","group":"class1"},
          {"tittle":"彩虹堂正品动漫","group":"class3"},
          {"tittle":"amovo魔吻","group":"class1"},
          {"tittle":"SYS艺术说","group":"class2"},
          {"tittle":"石头人工作室","group":"class1"},
          {"tittle":"Funko","group":"class2"},
          {"tittle":"十里丹青","group":"class3"},
          {"tittle":"创一文化","group":"class2"},
          {"tittle":"亚蒙兔家","group":"class3"},
          {"tittle":"宇宙电波","group":"class1"},
          {"tittle":"禹屋原创","group":"class3"},
          {"tittle":"符豚甲胄","group":"class1"},
          {"tittle":"能量天使","group":"class2"},
          {"tittle":"上海简菲","group":"class1"},
          {"tittle":"chairball原创设","group":"class2"},
          {"tittle":"砚池工作室","group":"class3"},
          {"tittle":"云落秋池","group":"class2"},
          {"tittle":"十一宫","group":"class3"},
          {"tittle":"长草颜文字","group":"class1"},
          {"tittle":"网易游戏","group":"class3"},
          {"tittle":"ISOS","group":"class1"},
          {"tittle":"绝对萌域","group":"class2"},
          {"tittle":"雪猫一族","group":"class1"},
          {"tittle":"天闻角川","group":"class2"},
          {"tittle":"静悦坊","group":"class3"}
        ]
      }
    },
    ready: function() {
          setTimeout(function() {
            new IScroll('#label-scroll');
          }, 500);
    },
  }
</script>
