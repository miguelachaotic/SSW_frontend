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
            <EmailInput/>
            <PasswordInput/>
            <RememberMeOption/>
            <div class="inner_login_container">
                <button type="submit">Register now!</button>
            </div>
        </form> 
    </div>
</template>

<style scoped>

h1{
  color: var(--primary_bg);
}

.inner_login_container button[type="submit"] {
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border: none;
  background: var(--dark_main_color);
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
  transition: background-color 0.2s ease-in-out;
}

.inner_login_container button[type="submit"]:hover {
  background: var(--main_color);
}

</style>