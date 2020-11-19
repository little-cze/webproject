<template>
  <div class="tab">
    <div class="img">
      <slot name="tabImg"></slot>
    </div>
    <div class="txt">
      <slot name="tabText"></slot>
    </div>
  </div>
</template>
<script>

export default {
  name: "Tab",
   data(){
    return{
     active:false
    }
   },
  setup(){

  }
}
</script>

<style scoped>
.tab {
  padding-top: 5px;
  color: black;

}
.txt{
  font-size: 10px;
}

</style>