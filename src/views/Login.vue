<script setup>

</script>

<template>
  <div class="login_container">
    <h1>Login</h1>
    <form>
      <div class="inner_login_container">
        <label>
          Username: <input type="text" placeholder="Enter your username">
        </label>
      </div>
      <div class="inner_login_container">
        <label>
          Password: <input type="password" placeholder="************">
        </label>
      </div>
      <div class="inner_login_container checkbox">
        <label>
          <input id="inner_checkbox" type="checkbox"> Remember me
        </label>
      </div>
      <div class="inner_login_container">
        <input type="button" value="Login">
      </div>
     <div>
       <a href="">Forgot your password?</a>
     </div>
      <hr>
      <router-link to="/register"><input type="button" value="Register Here!"></router-link>
    </form>

  </div>
</template>

<style scoped>
.login_container {
  width: 460px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 5px;
  background: #fff;
  font-family: Arial, sans-serif;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
}

.inner_login_container {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 2px solid #333;
  border-radius: 6px;
  outline: none;
}

.inner_login_container.checkbox {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: 16px;
  width: 80%;
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
  background: #555;
}

a {
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  display: block;
  margin-top: 10px;
}

a:hover {
  text-decoration: underline;
}

hr {
  border: none;
  border-top: 2px solid #333;
  margin: 20px 0;
}

.router-link input[type="button"] {
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #333;
  background: white;
  color: #333;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
}

.router-link input[type="button"]:hover {
  background: #f0f0f0;
}
</style>