<template>
  <div class="main-container">
    <ul id="zhizhi">
      <li v-for="good in goodsList">
        <div class="user_info">
          <img v-bind:src="good.icon" alt="">
          <div class="text">
            <h3>{{good.name}}</h3>
            <span>来自频道{{good.form}}</span>
          </div>
          <div class="time">
            {{good.time}}
          </div>
        </div>
        <img v-bind:src="good.img" alt="good.name">
        <p>{{good.desc}}</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">

  export default {
    data(){
      return {
        goodsList:[{
                "id": 1,
                "icon":'./images/1.jpg',
                "name":"小调以北",
                "form":"日常",
                "time":"1小时前",
                "img": "https://img.alicdn.com/imgextra/i2/1766737080/TB2odrPqXXXXXXqXFXXXXXXXXXX_!!1766737080.jpg",
                "desc": "无聊的来发帖现在是夏天了吧 好热",

            },
            {
                "id": 2,
                "icon":'./images/2.jpg',
                "name":"木",
                "form":"专题",
                "time":"2小时前",
                "img": "https://img.alicdn.com/imgextra/i4/113740699/TB2eUNOjEhnpuFjSZFpXXcpuXXa-113740699.jpg",
                "desc": "实物比图片好看系列~细节炒鸡赞啊"
            },
            {
                "id": 3,
                "icon":'./images/3.jpg',
                "name":"哈尔",
                "form":"穿搭",
                "time":"半小时前",
                "img": "https://cbu01.alicdn.com/img/order/trading/642/065/9756738522/2529599820_489839786.jpg",
                "desc": "柴犬doge周边 可爱萌 牛角扣学院风呢子大衣 动漫外套",
            },
            {
                "id": 4,
                "icon":'./images/4.jpg',
                "name":"肖秋池",
                "form":"活动",
                "time":"12小时前",
                "img": "/images/1468463011481.jpg",
                "desc": "不满意的，自己太胖了，感觉完全不能接受自己啊",
            },{
                "id": 5,
                "icon":'./images/5.jpg',
                "name":"薛家大白菜",
                "form":"吐槽",
                "time":"1小时前",
                "img": "http://f.p.cycangcdn.com/supplier/1467687105197.jpg",
                "desc": "日系小裙子，感觉自己萌萌哒~~,☺",
            },{
              id:6,
              "icon":'./images/6.jpg',
              "name":"m六安",
              "form":"表情包",
              "time":"1小时前",
              img:"http://f.p.cycangcdn.com/1459131888532.jpg",
              desc:"日本和风，招财猫，买到的是最后一件。"
            },{
              id:7,
              "icon":'./images/7.jpg',
              "name":"静钰林",
              "form":"壁纸",
              "time":"1小时前",
              img:'http://f.p.cycangcdn.com/1463385771450.jpg',
              desc:"白猫套装穿上性感俏皮，黑色连衣裙让你像猫咪一样优雅又有气质，我觉得我怎么样啊"
            }
        ]
      }
    },
    ready(){

    }
  }
</script>
