<template>
  <div class="main">
    <div class="search">
      <div class="img"><img src="@/assets/icon/search.png" alt=""></div>
      <div class="sea"><label>
        <input type="text" placeholder="搜你想要">
      </label></div>
    </div>
    <div class="cancel" @click="cancel()">
      取消
    </div>
    <div class="history">
      <div class="his">
        历史记录
      </div>
      <div class="bin"></div>
    </div>
  </div>
</template>
<script>
import {useRouter, useRoute} from 'vue-router'

export default {
  name: "search",
  data() {
    return {}
  },
  setup() {
    const router = useRouter();
    const cancel = () => {
      router.back()
    }
    return {
      cancel
    }
  }
}
</script>

<style scoped>

.main {
  display: flex;
  padding: 8px 16px;
  color: grey;
  align-items: center;
}

.search {
  flex: 1;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 3px 8px;
  margin-right: 10px;
  display: flex;
  align-items: center;
}
.sea{
  flex: 1;
  padding-right: 10px;
}
.search > .sea > label>input {
  width: 100%;

  font-size: 12px;
  color: grey;
  height: 26px;
border: none;
  outline: none;
  background: none;
  margin-left: 5px;
  display: inline-block;

}

.cancel {
  font-size: 16px;
  color: black;
}
</style>