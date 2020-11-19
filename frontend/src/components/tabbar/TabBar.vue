<template>

  <div class="tabs" v-if="isShow">
    <div v-for="index in item" class="tab-item" @click="pushDemo(index.rou)">
      <Tab>
        <template v-slot:tabText>
          <div>
            {{ index.name }}
          </div>
        </template>
        <template v-slot:tabImg>
          <div :class="{tabColor: !isChoose(index.rou),imgBox:true}">
            <img :src="getImgUrl(index.icon)" alt="">
          </div>
        </template>
      </Tab>
    </div>
  </div>
</template>

<script>

import Tab from "./Tab";
import {useRouter, useRoute} from 'vue-router'

export default {
  name: "TabBar",

  data() {
    return {
      item: [
        {
          icon: "tuwen",
          name: "图文",
          rou: '/tuwen'
        },
        {
          icon: "jingcai",
          name: "竞猜",
          rou: '/jingcai'
        },
        {
          icon: "toupiao",
          name: "投票",
          rou: '/toupiao'
        },
        {
          icon: "wenda",
          name: "问答",
          rou: '/wenda'
        },
      ],
      imgBox:'imgBox',
      isShow:true
    }
  },
  methods: {
    getImgUrl(icon) {
      return require("@/assets/" + icon + ".png")
    }
  },
  components: {
    Tab
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const pushDemo = (path) => {
      router.replace({
        path: path,
      })
    }
    const isChoose = (path) => {
      return route.path.indexOf(path);
    }
    return {
      pushDemo,
      isChoose
    }
  }
}
</script>

<style scoped>
.tabs {
border-top: 1px solid grey;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  height: 50px;
}

.tab-item {
  flex: 1;
  height: 49px;
  text-align: center;
}


.imgBox{
  border-radius: 20px;
  padding:3px 5px;
  display: inline-block;
  background-color: gray;
}

.tabColor{
  background-color: deepskyblue;

}
</style>
