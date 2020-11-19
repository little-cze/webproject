<template>
  <div id="send">
    <button>
      <img src="../../assets/logo.png">
      Send
    </button>
  </div>
</template>

<script>
export default {
  name: "send"
}
</script>

<style scoped>

#send {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  background-color: #5f55af;
  border: 0;
  border-radius: 5px;
  padding: 10px 30px 10px 10px;
  color: white;
  font-weight: bold;
}

img {
  width: 1rem;
  height: 1rem;
  display: inline-block;
  vertical-align: middle;
  padding-right: 5px;
}

button:hover img {
  animation: fly 2s ease 1;
}

@keyframes fly {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(300%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>