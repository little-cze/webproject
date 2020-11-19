<template>
  <div class="main">
    <div class="left">
      <img :src="getImgUrl('tongzhi')" alt="">
    </div>
    <div class="mid" @click="search('search')">
      <img :src="getImgUrl('search')" alt="">
      <span class="search">搜你想要</span>
    </div>
    <div class="right">
      <img :src="getImgUrl('person')" alt="">
    </div>
  </div>
</template>

<script>
import {useRoute,useRouter} from 'vue-router'
export default {
  name: "headWidget",
  methods: {
    getImgUrl(icon) {
      return require("icon/" + icon + ".png");
    }
  },
  setup(){
    const route = useRoute();
    const router = useRouter();
    const search =(path)=>{
      router.push(path)
    }
    return{
      search
    }
  }
}
</script>

<style scoped>
 .main{
   display: flex;
   padding: 5px 16px;
 }
 .mid{
   flex: 1;
   padding:6px 12px;
   margin: 0 16px;
   border: 1px solid #D9D9D9;
   border-radius: 25px;
 }
 .search{
   margin-left: 12px;
   font-size: 12px;
   color: #595959;
 }
 .left , .right{
   padding-top: 6px;
 }
</style>