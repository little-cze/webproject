<template>
 <div class="main">
   <div v-for="index in listData" class="build">
     <div class="left">
       <div class="title">{{ index.title }}</div>
       <div class="tag">
         <div v-for="tagIndex in index.tag" class="tagIndex">
           {{ tagIndex }}
         </div>
         <div class="author">{{ index.author }}</div>
         <div class="time">{{index.time}}</div>
       </div>
       <div class="icons">
         <div class="icon" v-for="icon in index.icons">
           {{icon.num}}
         </div>
       </div>
     </div>
     <div class="right">
       <img :src="index.img" alt="">
     </div>
   </div>
 </div>

</template>

<script>
export default {
  name: "guanzhu",
  data() {
    return {
      listData: [
        {
          title: '风烛尘香花已尽，日晚倦梳头。 物是人非事事休，欲语泪先流 物是人非事事休，欲语泪先流。。',
          tag: ["原创", "免费"],
          author: "李清照",
          time: "1小时前",
          icons:[
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
          ],
          img: "https://i1.hdslb.com/bfs/face/6fd2a4735bd87b6596db7b3dd0839fef10c2039e.jpg_64x64.jpg"
        },
        {
          title: '风烛尘香花已尽，日晚倦梳头。 物是人非事事休，欲语泪先流 物是人非事事休，欲语泪先流。。',
          tag: ["原创", "免费"],
          author: "李清照",
          time: "1小时前",
          icons:[
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
          ],
          img: "https://i1.hdslb.com/bfs/face/6fd2a4735bd87b6596db7b3dd0839fef10c2039e.jpg_64x64.jpg"
        },
        {
          title: '风烛尘香花已尽，日晚倦梳头。 物是人非事事休，欲语泪先流 物是人非事事休，欲语泪先流。。',
          tag: ["原创", "免费"],
          author: "李清照",
          time: "1小时前",
          icons:[
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
          ],
          img: "https://i1.hdslb.com/bfs/face/6fd2a4735bd87b6596db7b3dd0839fef10c2039e.jpg_64x64.jpg"
        },
        {
          title: '风烛尘香花已尽，日晚倦梳头。 物是人非事事休，欲语泪先流 物是人非事事休，欲语泪先流。。',
          tag: ["原创", "免费"],
          author: "李清照",
          time: "1小时前",
          icons:[
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
          ],
          img: "https://i1.hdslb.com/bfs/face/6fd2a4735bd87b6596db7b3dd0839fef10c2039e.jpg_64x64.jpg"
        },
        {
          title: '风烛尘香花已尽，日晚倦梳头。 物是人非事事休，欲语泪先流 物是人非事事休，欲语泪先流。。',
          tag: ["原创", "免费"],
          author: "李清照",
          time: "1小时前",
          icons:[
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
          ],
          img: "https://i1.hdslb.com/bfs/face/6fd2a4735bd87b6596db7b3dd0839fef10c2039e.jpg_64x64.jpg"
        },
        {
          title: '风烛尘香花已尽，日晚倦梳头。 物是人非事事休，欲语泪先流 物是人非事事休，欲语泪先流。。',
          tag: ["原创", "免费"],
          author: "李清照",
          time: "1小时前",
          icons:[
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
          ],
          img: "https://i1.hdslb.com/bfs/face/6fd2a4735bd87b6596db7b3dd0839fef10c2039e.jpg_64x64.jpg"
        },
        {
          title: '风烛尘香花已尽，日晚倦梳头。 物是人非事事休，欲语泪先流 物是人非事事休，欲语泪先流。。',
          tag: ["原创", "免费"],
          author: "李清照",
          time: "1小时前",
          icons:[
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
          ],
          img: "https://i1.hdslb.com/bfs/face/6fd2a4735bd87b6596db7b3dd0839fef10c2039e.jpg_64x64.jpg"
        },
        {
          title: '风烛尘香花已尽，日晚倦梳头。 物是人非事事休，欲语泪先流 物是人非事事休，欲语泪先流。。',
          tag: ["原创", "免费"],
          author: "李清照",
          time: "1小时前",
          icons:[
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
            {icon:"",name:"nice",num:"123"},
          ],
          img: "https://i1.hdslb.com/bfs/face/6fd2a4735bd87b6596db7b3dd0839fef10c2039e.jpg_64x64.jpg"
        },
      ]
    }
  }
}
var a = "nonono";
if(!("nonono" in window)){
  console.log((nonono in window))
  var nonono = 1;
  console.log("aaa+++"+nonono)
}
// alert(nonono);
</script>

<style scoped>

.main {
  padding: 80px 16px;
}
.build{
  display: flex;
  padding-top: 8px;
}
.left {
  width: 70%;
}

.right {
  width: 30%;
}

.right > img {
  width: 100%;
}

.title {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.tag {
  display: flex;
  font-size: 12px;
  align-items: center;
}
.tagIndex{
  color: green;
  border: 1px green solid;
border-radius: 5px;
  margin-right: 10px;
  padding: 1px 5px;

}
.author{
  color: grey;
}
.time{
  margin-left: 20px;
  color: grey;
}
 .icons{
   display: flex;
 }
 .icon{
   margin-right: 10px;
 }
</style>