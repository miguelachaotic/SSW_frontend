<script setup>

import {inject} from "vue";
const authenticated = inject('authenticated');


</script>

<template>

  <div>
    <nav class="nav_bar">
      <input type="button" id="auth_aux_button"
             :value="(authenticated) ? 'Unauthenticate' : 'Authenticate'"
             @click="authenticated = !authenticated"
      >
      <router-link to="/" class="nav_link">Home</router-link>
      <router-link v-if="!authenticated" class="nav_link" to="/about">About</router-link>
      <router-link v-if="!authenticated" class="nav_link" to="/login">Login</router-link>
      <router-link v-if="!authenticated" class="nav_link" to="/register">Register</router-link>
      <router-link v-if="authenticated"  class="nav_link" to="/social">Social</router-link>
      <router-link v-if="authenticated"  class="nav_link" to="/nutrition">Nutrition</router-link>
      <router-link v-if="authenticated"  class="nav_link" to="/routines">Routines</router-link>
      <router-link v-if="authenticated"  class="nav_link" to="/profile">Profile</router-link>
    </nav>
    <main class="content">
      <router-view />
    </main>

  </div>
</template>

//Prueba de push

<style scoped>
/* boton para autentificarte. ver el README si no lo has visto ya */
#auth_aux_button {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 11px;
}

.nav_bar {
  display: flex;
  justify-content: space-around;
  background: linear-gradient(var(--main_color), var(--light_main_color));
  align-items: center;
  height: 80px;
  margin: 0;
  flex-direction: row;
  z-index: 1;
}

a {
  font-size: 30px;
  font-weight: bold;
  color: whitesmoke;
  font-family: "Chalkboard SE", sans-serif;
  text-decoration: none;
  border: white 1px solid;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-bottom: 9px;
  align-content: center;
}

.router-link-active{
  background: linear-gradient(var(--light_main_color), var(--very_light_main_color));
}

footer {
  display: flex;
  flex-direction: column;
}



</style>
