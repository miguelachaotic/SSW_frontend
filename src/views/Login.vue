<script setup>
import UsernameInput from "@/components/UsernameInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";
import { ref } from 'vue';
import RememberMeOption from "@/components/RememberMeOption.vue";

const validCredentials = ref(false);

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
      <div v-if="!validCredentials" id="invalid-credentials">Credentials do not match!</div>
      <div class="inner_login_container">
        <a href="">Forgot your password?</a>
      </div>
      <hr>
      <router-link id="register" class="inner_login_container" to="/register">Register Here!</router-link>
    </form>
  </div>
</template>

<style>
.login_container {
  width: 460px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 5px;
  background: #fff;
  font-family: Arial, sans-serif;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}


h1 {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
}

.inner_login_container{
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="text"],
input[type="password"] {
  width: 95%;
  padding: 8px;
  font-size: 16px;
  border: 2px solid #333;
  border-radius: 6px;
  outline: none;
}

.inner_login_container input[type="button"] {
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border: none;
  background: #333;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

.inner_login_container input[type="button"]:hover {
  background: #545454;
}

a {
  color: #007fff;
  text-decoration: none;
  font-size: 14px;
  display: block;
  margin-top: 10px;
}

label {
  font-size: 17px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
}

a:hover {
  text-decoration: underline;
}
</style>

<style scoped>

hr {
  border: none;
  border-top: 2px solid #2a2a2a;
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
  margin-top: 10px;
  margin-left: 10%;
}

#register:hover{
  text-decoration: none;
  background: #545454;
}

#invalid-credentials{
  color: red;
}

</style>