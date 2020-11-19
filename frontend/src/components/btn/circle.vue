<template>
<div id="circle-btn">
  <div class="btn">
    <img src="../../assets/logo.png">
    <button @click="demo">Hover Me</button>
  </div>
</div>
</template>

<script>
export default {
name: "circle",
    methods:{
    demo(){
        axios
            .get('http://47.99.53.11/api/index')
            .then(response => (console.log("success")))
            .catch(function (error) { // 请求失败处理
                console.log(error);
            });
    }
    }
}
</script>

<style scoped>
#circle-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
}
.btn{
  position: relative;
}
button{
  border: 0;
  border-radius: 50px;
  color: white;
  background: #5f55af;
  padding: 15px 20px 15px 60px;
  text-transform: uppercase;
  background: linear-gradient(to right,#42b983 50%,#5f55af 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 2s ease;
}
img{
  height: 30px;
  width: 30px;
  background-color: #42b983;
  padding: 8px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
}
button:hover{
  background-position: left bottom;
}
</style>
