<template>
<div id="btn">
  <button>HOVER ME</button>
</div>
</template>

<script>
export default {
name: "flash"
}
</script>

<style scoped>
  #btn{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    background: #1c2541;
  }
  button{
    outline: none;
    border: 2px solid white;
    background: transparent;
    text-transform: uppercase;
    padding: 10px 20px;
    overflow: hidden;
    position: relative;
    color: white;
  }
  button:after{
    content: '';
    display: block;
    position: absolute;
    top: -36px;
    left: -100px;
    background-color: white;
    width: 50px;
    height: 125px;
    opacity: 20%;
    transform: rotate(-45deg);
  }
  button:hover:after{
    left: 140%;
    transition: all 0.6s cubic-bezier(0.3,1,0.2,1);
  }
</style>