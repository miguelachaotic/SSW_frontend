<script setup>

</script>

<template>
  <div class="join_now_container">
    <router-link class="join_button" to="/login">Join Now!</router-link>
  </div>


</template>

<style scoped>
.join_now_container{
  display: flex;
  background-color: var(--light_main_color);
  justify-content: center;
  margin: 25% 35% 0 35%;

}

.join_button{
  font-size: 52px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10px;
  margin: 0;
}

a {
  color: whitesmoke;
}
</style>