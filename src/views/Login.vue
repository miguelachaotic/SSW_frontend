<script setup>
import UsernameInput from "@/components/UsernameInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";
import RememberMeOption from "@/components/RememberMeOption.vue";
import { ref } from 'vue';

const validCredentials = ref(true);

</script>

<template>
  <div class="login_container">
    <h1>Login</h1>
    <form>
      <UsernameInput/>
      <PasswordInput/>
      <RememberMeOption/>
      <div class="inner_login_container">
        <input type="button" value="Login">
      </div>
      <div v-if="!validCredentials" id="invalid_credentials">Credentials do not match!</div>
      <div class="inner_login_container">
        <router-link to="/retrieve-password">Forgot your password?</router-link>
      </div>
      <hr>
      <div class="inner_login_container">
        <router-link id="register" to="/register">Register Here!</router-link>
      </div>
    </form>
  </div>
</template>

<style scoped>

h1{
  color: black;
  font-size: 36px;
}

hr {
  border: none;
  border-top: 2px solid var(--text_color);
  margin: 20px 0;
}

#register {
  width: 75.5%;
  padding: 10px;
  font-size: 16px;
  border: none;
  background: #333;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

#register:hover{
  text-decoration: none;
  background: #545454;
}

#invalid_credentials{
  color: red;
}

</style>