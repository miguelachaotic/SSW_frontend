<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  username: String,
  desc: String,
  image: String
});



</script>

<template>
  <div class="container">
    <img class="pfp" :src="image" :alt="username + '\'s profile picture'"/>
    <div class="content">
      <h2 class="username">{{username}}</h2>
      <p class="description">{{desc}}</p>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: row;
  height: 100px;
  border: whitesmoke 1px solid;
  background-color: whitesmoke;
  border-radius: 10px;
  color: var(--primary_bg);
}


.pfp, .username, .description {
  margin: 10px;
}

.pfp {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: 20px;
}

.username {
  font-size: x-large;
}



</style>