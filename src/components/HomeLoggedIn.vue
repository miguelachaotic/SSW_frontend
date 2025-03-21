<script setup>

import UserPost from "@/components/UserPost.vue";
import User from "@/components/User.vue";

</script>

<template>
  <div class="container">
    <div class="content">
      <div class="users">
        <div class="header_container">
          <h1 class="welcome_message">Welcome back</h1> <h1 class="welcome_message" id="username">Jose</h1>
          <h1 class="welcome_message">!</h1>
        </div>
        <div class="popular_users">
          <h1>Popular Users</h1>
          <div class="overflow-users">
            <User profile-image="src/assets/images/doom.jpg" username="alexelcapo"/>
            <User profile-image="src/assets/images/doom.jpg" username="felipez"/>
            <User profile-image="src/assets/images/master_chief.jpg" username="adrian_fitness"/>
            <User profile-image="src/assets/images/master_chief.jpg" username="danifit"/>
            <User profile-image="src/assets/images/doom.jpg" username="master_workout"/>
            <User profile-image="src/assets/images/master_chief.jpg" username="m.angel.gym"/>
            <User profile-image="src/assets/images/master_chief.jpg" username="mister_salad"/>
          </div>
        </div>
      </div>
      <div class="popular_posts">
        <h1 id="label_liked_posts">Most liked posts</h1>
        <div class="overflow-posts">
          <UserPost username="felipez" profile-image="src/assets/images/doom.jpg" description="I found this awesome routine that you all should follow! Check it out!"/>
          <UserPost username="el_fortachon" profile-image="src/assets/images/master_chief.jpg" description="This diet is incredible! It has all you have ever wanted!"/>
          <UserPost username="danifit" profile-image="src/assets/images/master_chief.jpg" description="Do you want to grow more muscle? Follow me to discover!"/>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <h1 id="updates_header">Last updates</h1>
      <div class="sidebar_overflow">
        <UserPost
            username="Admin"
            profile-image="src/assets/images/doom.jpg"
            description="We recently added a new feature! Now you can publish your own created routines! Hope you all
                     enjoy this new feature and give us new feedback!"
        />
        <UserPost
          username="Admin"
          profile-image="src/assets/images/doom.jpg"
          description="Hi everyone! We added new things! Now you can create your own personalized diets. Use them wisely!"
        />
        <UserPost
            username="Admin"
            profile-image="src/assets/images/doom.jpg"
            description="Welcome everybody! I hope you're doing well!"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.container{
  display: flex;
  height: 100%;
}

.content{
  width: 100%;
  display: flex;
  flex-direction: row;

}

.users {
  display: flex;
  flex-direction: column;
}

.sidebar{
  display: flex;
  flex-direction: column;
  background: linear-gradient(-50deg, var(--main_color), var(--very_light_main_color));
  width: 30%;
  max-height: 692px;
  padding: 15px;
  border-radius: 0 0 0 10px;
}

.sidebar_overflow {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  gap: 10px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  align-items: center;
}

.sidebar_overflow::-webkit-scrollbar {
  display: none;
}

.header_container{
  display: flex;
  gap: 2px;
}

.welcome_message{
  font-size: 36px;
  margin-top: 30px;
  margin-left: 20px;
}

.popular_users {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 20px;
  max-height: 600px;
  width: 80%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(20deg, var(--main_color), var(--very_light_main_color));
}

.overflow-users {
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.overflow-users::-webkit-scrollbar {
  display: none;
}

.popular_posts {
  display: flex;
  flex-direction: column;
  margin-top: 92px;
  background: linear-gradient(30deg, var(--main_color), var(--very_light_main_color));
  padding: 15px;
  border-radius: 10px;
  max-height: 600px;
  width: 60%;
}

.overflow-posts {
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  align-items: center;
}

.overflow-posts::-webkit-scrollbar {
  display: none;
}


#username{
  color: var(--very_light_main_color);
  margin-left: 9px;
}

#updates_header {
  font-size: 30px;
}
</style>