<template>
  <div class="main-container">
    <ul id="zhizhi">
      <li v-for="good in goodsList">
        <img v-bind:src="good.img" alt="good.name">
        <p>{{good.name}}</p>
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
                "img": "https://img.alicdn.com/imgextra/i2/1766737080/TB2odrPqXXXXXXqXFXXXXXXXXXX_!!1766737080.jpg",
                "name": "无聊的来发帖现在是夏天了吧 好热",

            },
            {
                "id": 2,
                "img": "https://img.alicdn.com/imgextra/i4/113740699/TB2eUNOjEhnpuFjSZFpXXcpuXXa-113740699.jpg",
                "name": "实物比图片好看系列~细节炒鸡赞啊"
            },
            {
                "id": 3,
                "img": "https://cbu01.alicdn.com/img/order/trading/642/065/9756738522/2529599820_489839786.jpg",
                "name": "柴犬doge周边 可爱萌 牛角扣学院风呢子大衣 动漫外套",
            },
            {
                "id": 4,
                "img": "/images/1468463011481.jpg",
                "name": "不满意的，自己太胖了，感觉完全不能接受自己啊",
            },{
                "id": 5,
                "img": "http://f.p.cycangcdn.com/supplier/1467687105197.jpg",
                "name": "日系小裙子，感觉自己萌萌哒~~,☺",
            },{
              id:6,
              img:"http://f.p.cycangcdn.com/1459131888532.jpg",
              name:"日本和风，招财猫，买到的是最后一件。"
            },{
              id:7,
              img:'http://f.p.cycangcdn.com/1463385771450.jpg',
              name:"白猫套装穿上性感俏皮，黑色连衣裙让你像猫咪一样优雅又有气质，我觉得我怎么样啊"
            }
        ]
      }
    },
    ready(){

    }
  }
</script>
