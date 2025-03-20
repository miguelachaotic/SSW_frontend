<script setup>

let user = "Jose"

</script>

<template>
  <div class="container">
    <div class="content">
      <div class="header_container">
        <h1 class="welcome_message">Welcome back </h1> <h1 class="welcome_message" id="username"> {{user}}</h1>
        <h1 class="welcome_message">!</h1>
      </div>
      <img src="@/assets/logoWeb.png" alt="web page logo" class="logo_image">
    </div>
    <div class="sidebar">
      <h1 id="updates_header">Last updates</h1>
    </div>
  </div>
</template>

<style scoped>

.container{
  display: flex;
  height: 100%;
}

.content{
  width: 66%;
  display: flex;
  justify-content: center;
}

.sidebar{
  width: 34%;
  display: flex;
  justify-content: center;
}

.header_container{
  display: flex;
  gap: 8px;

}

.welcome_message{
  font-size: 36px;
}

.logo_image {
  width: 400px;
  height: 350px;
  background-color: whitesmoke;
}

#username{
  color: var(--very_light_main_color);
}

#updates_header{
  font-size: 30px;
}
</style>