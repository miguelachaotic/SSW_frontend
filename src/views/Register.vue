<script setup>

import EmailInput from '@/components/EmailInput.vue';
import NameInput from '@/components/NameInput.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import RememberMeOption from '@/components/RememberMeOption.vue';
import UsernameInput from '@/components/UsernameInput.vue';

</script>

<template>
    <div class="login_container">
        <h1>Register Account</h1>
        <form action="">
            <NameInput/>
            <UsernameInput/>
            <EmailInput :name="hola" domain="gmail.com"/>
            <PasswordInput/>
            <RememberMeOption/>
            <div class="inner_login_container">
                <button type="submit">Register now!</button>
            </div>
        </form> 
    </div>
</template>

<style scoped>
.inner_login_container button[type="submit"] {
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

.inner_login_container button[type="submit"]:hover {
  background: #545454;
}

</style>