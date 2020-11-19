<template>
<div id="btn">
  <button>Hover Me</button>
</div>
</template>

<script>
export default {
name: "border_btn"
}
</script>

<style scoped>
#btn{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
}
button{
  border: 0;
  border-radius: 10px;
  background: #2ec4b6;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  outline: none;
  transition: border-radius 2s;
}
button:hover{
  border-radius: 50px 10px 50px 10px;
}
</style>