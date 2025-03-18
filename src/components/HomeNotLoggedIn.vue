<script setup>

</script>

<template>
  <div class="background-wrapper">
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>

    <div class="content-container">
      <h1 id="main_header">FitRevolution</h1>
      <h2 id="subtitle">Make your workout a revolution</h2>
    </div>
    <div class="join_now_container">
      <router-link class="join_button" to="/register">Join Now!</router-link>
    </div>

  </div>



</template>

<style scoped>

.join_now_container{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: var(--very_light_main_color);
  justify-content: center;
  border-radius: 40px;
  width: 310px;
  z-index: 2;
  box-shadow: 4px 4px 8px 3px rgba(0, 0, 0, 0.25);
}

.join_button{
  font-size: 52px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 12px;
  margin: 0;
  transition: scale 0.2s ease-in-out;
}

.content-container{
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-items: center;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#main_header{
  font-family: chopsic, sans-serif;
  font-size: 68px;
}

a {
  color: whitesmoke;
  font-weight: bold;
}

a:hover {
  text-decoration: none;
  scale: 1.1;
}



.bg {
  animation:slide 12s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, var(--dark_main_color) 50%, var(--main_color) 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:8s;
}

.bg3 {
  animation-duration:10s;
}

h1 {
  font-family:monospace;
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}

</style>