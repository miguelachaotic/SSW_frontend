<script setup>

import UserPost from "@/components/UserPost.vue";
let user = "Jose";
</script>

<template>
  <div class="home_container">
    <div class="content">
      <h1>Welcome back {{user}}!</h1>

    </div>
    <div class="admin-posts">
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

.content{
  width: 66%;
}

.admin-posts{
  width: 34%;
}

</style>