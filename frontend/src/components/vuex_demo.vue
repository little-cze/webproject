<template>
  <div>
    <button @click="less">-</button>
    <input type="text" v-model="count" onkeyup="value=value.replace(/\D/g,'')" onchange="value=value.replace(/\D/g,'')">
    <button @click="add">+</button>
    <h1>count:{{count}}</h1>
    <div>count * 2 = {{doubleCount}}</div>
    <br>
    <button @click="update">update</button>
    <h2>VUEX==>>{{a}}</h2>
  </div>
</template>

<script>
import {ref,watch,computed,getCurrentInstance} from 'vue'
export default {
  name: "vuex_demo",
  setup(){
    const count = ref(0)
    const less = ()=>{
      if(count.value>0)
      count.value--;
      else{
        alert("太小了")
      }
    }
    const add = ()=>{
      count.value++;
    }

    watch(()=>count.value,val=>{

      console.log(`count is ${val}`)
    })
    const doubleCount = computed(()=>count.value*2)
    const {ctx} = getCurrentInstance()
    console.log(ctx.$router.currentRoute.value)
    const a = computed(()=>ctx.$store.state.test.a)
    const update = ()=>{
      ctx.$store.commit('setTestA',count)
      //Action通过store.dispatch方法触发
      ctx.$store.dispatch('increment').then(res=>{
        console.log(res)
      })
    }
    return{
      count,
      doubleCount,
      add,
      less,
      a,
      update
    }
  }
}
</script>

<style scoped>
 input{
   border: none;
   width: 20px;
   align-items: center;
   margin-left: 10px;
   outline: none;
 }
</style>