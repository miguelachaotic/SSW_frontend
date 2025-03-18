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
  border: white 1px solid;
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
  align-items: center;
}

.welcome_message{
  font-size: 36px;
}

#username{
  color: var(--very_light_main_color);
}

#updates_header{
  font-size: 30px;
}
</style>