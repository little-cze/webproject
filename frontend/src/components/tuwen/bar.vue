<template>
  <div class="bar">
    <div v-for="index in item" @click="rouPush(index.rou)" class="item">
      <div :class="{beChoose: beChoose(index.rou)}">
        {{ index.title }}
      </div>
    </div>
  </div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'

export default {

  name: "bar",
  data() {
    return {
      item: [
        {
          title: '关注',
          rou: 'guanzhu',
        },
        {
          title: '附近',
          rou: 'fujin',
        },
        {
          title: '热门',
          rou: 'remen',
        },
        {
          title: '社会',
          rou: 'shehui',
        },
        {
          title: '科技',
          rou: 'keji',
        },
        {
          title: '教育',
          rou: 'jiaoyu',
        },
      ],
      path:'/tuwen/fujin'
    }
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const rouPush = (path) => {
      router.replace({
        path: path
      })
    }
    const beChoose = (path) => {
      return route.path.indexOf(path) !== -1;
    }
    return {
      rouPush,
      beChoose
    }
  },

}
</script>

<style scoped>
.bar {
  display: flex;
  font-size: 14px;
  color: #595959;
  margin: 10px 0;
  position: relative;
}

.item {
  flex: 1;
  text-align: center;
  height: 20px;
  position: relative;
}

.beChoose {
  font-size: 16px;
  color: #1890FF;
  font-weight: bold;
}

.beChoose:after {
  content: '';
  color: transparent;
  border: transparent;
  border-bottom: 2px solid #1890FF;
  width: 20px;
  position: absolute;
  left: 35%;
  bottom: -5px;
}
</style>