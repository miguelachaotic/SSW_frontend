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
      <router-link to="/">
        <img src="@/assets/logoWeb.png" alt="Icono" width="100p" height="80p">
      </router-link>
      <router-link v-if="!authenticated" to="/about">About</router-link>
      <router-link v-if="!authenticated" to="/login">Login</router-link>
      <router-link v-if="!authenticated" to="/register">Register</router-link>
      <router-link v-if="authenticated" to="/social">Social</router-link>
      <router-link v-if="authenticated" to="/nutrition">Nutrition</router-link>
      <router-link v-if="authenticated" to="/profile">Profile</router-link>
      <router-link v-if="authenticated" to="/routines">Routines</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
#auth_aux_button {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 11px;
}

.nav_bar {
  display: flex;
  justify-content: space-around;
  background: #333;
  align-items: center;
  height: 80px;
}

a {
  font-size: 30px;
  color: whitesmoke;
  font-family: "Chalkboard SE", sans-serif;
  text-decoration: none;
}
</style>
