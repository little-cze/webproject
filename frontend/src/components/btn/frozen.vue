<template>
<div id="frozen-btn">
  <button class="green">Hover me</button>
  <button class="purple">Hover me</button>
</div>
</template>

<script>
export default {
name: "frozen"
}
</script>

<style scoped>
#frozen-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
}
button{
  border: 0;
  margin: 20px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 50px;
  border-radius: 50px;
  color: white;
  outline: none;
  position: relative;
}
button:before{
  content: '';
  display: block;
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.4) 50%) right bottom;

  background-size: 210% 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 50px;
  transition: all 1s;
}
.green{
  background-image: linear-gradient(to right,#25aae1,#42b983);
  box-shadow: 0 4px 15px 0 rgba(49,196,190,0.75);
}
.purple{
  background-image: linear-gradient(to left,#b9e769,#4361ee);
  box-shadow: 0 4px 15px 0 rgba(49,196,190,0.75);
}
.purple:hover:before,.green:hover:before{
  background-position: left bottom;
}
</style>