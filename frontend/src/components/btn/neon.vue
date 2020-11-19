<template>
<div id="neon-btn">
  <button class="btn one">Hover Me</button>
  <button class="btn two">Hover Me</button>
  <button class="btn three">Hover Me</button>
</div>
</template>

<script>
export default {
name: "neon"
}
</script>

<style scoped>
  #neon-btn{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10rem;
    background: #031628;
  }
  .btn{
    border: 1px solid;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 20px;
  }
  .one{
    color: #4cc9f0;
  }
  .two{
    color: #f038ff;
  }
  .three{
    color: #b9e769;
  }
  .btn:hover{
    color: white;
    border: 0;
  }
  .one:hover{
    background-color: #4cc9f0;
    box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  }
  .two:hover{
    background-color: #f038ff;
    box-shadow: 10px 10px 99px 6px rgba(240,56,255,1);
  }
  .three:hover{
    background-color: #b9e769;
    box-shadow: 10px 10px 99px 6px rgba(185,231,105,1);
  }
</style>