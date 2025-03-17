<script setup>

import UserPost from "@/components/UserPost.vue";
let user = "Jose";
</script>

<template>
  <div class="home_container">
    <div>
      <h1>Welcome back {{user}}!</h1>

    </div>
    <div>
      <p>Hola buenas</p>
    </div>
  </div>


</template>

<style scoped>

h1{
  text-align: center;
}

div{
  border: black 1px solid;
}

.home_container{
  display: flex;
}

</style>