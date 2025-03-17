<script setup>
import { ref } from "vue";
let authenticated = ref(false);
</script>

<template>
  <div>
    <nav class="nav_bar">
      <!--
        En esta sección hay que implementar si el usuario ya está autenticado!!
        Lo dejamos para la tercera parte!
      -->
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
    <router-view />
  </div>
</template>

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
  background: #c3073f;
  align-items: center;
  height: 80px;
  margin: 0;
}

a {
  font-size: 30px;
  color: whitesmoke;
  font-family: "Chalkboard SE", sans-serif;
  text-decoration: none;
  border: #ffffff 1px solid;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-bottom: 1%;
  align-content: center;
}

.router-link-active{
  background-color: #950740;
}

</style>
