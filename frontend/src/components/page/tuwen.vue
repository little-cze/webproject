<template>
<div class="hea" v-if="!route.meta.showHead">
  <headCom></headCom>
  <bar></bar>
</div>
<!--  keep-alive -->
   <router-view></router-view>
</template>

<script>
import headCom from "../tuwen/head";
import bar from "../tuwen/bar";
import {useRoute} from "vue-router";
export default {
  name: "tuwen",
  components:{
    headCom,
    bar
  },
  setup(){
    const route = useRoute()
    return{
      route
    }
  }
}
</script>

<style scoped>
.hea{
  width: 100%;
  height: 80px;
  position: fixed;
background-color: white;
}
</style>
