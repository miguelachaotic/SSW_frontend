<script setup>

import FriendBox from "@/components/FriendBox.vue";
import WeeklyWeightChart from "@/components/WeeklyWeightChart.vue";
import doom from '@/assets/images/doom.jpg'

let user = {
  name: "Jose",
  username: "jose_0342",
  age: 19,
  weight: 87.1,
  height: 178,
  max_lift: 105,
  max_endurance_time: 45,
  max_speed: 12.6
}

const users = [
  {username: 'pedro', desc: 'life is beautiful!', image: 'images/doom.jpg'},
  {username: 'francis_3000', desc: 'yeah baby', image: 'images/master_chief.jpg'},
];

</script>

<template>
  <div class="container_profile">
    <div class="content">
      <div class="img_block">
        <img id="user_img" src="@/assets/logoWeb.png" alt="User Profile Picture"/>
        <input id="change_pfp" class="profile_button" type="button" value="Change Profile Picture">
      </div>
      <div class="user_welcome">
        <h1>Hi {{user.username}}!</h1>
        <p>Age: {{user.age}} years old</p>
        <p>Weight: {{user.weight}} kg</p>
        <p>Height: {{user.height}} cm tall</p>
        <input type="button" value="Update data" class="profile_button">
      </div>
      <div class="friends">
        <h1 id="friends_label">My friends</h1>
        <div class="overflow_friends">
          <div class="friends_box" v-for="e in users" :key="e.username">
            <FriendBox :username="e.username" :desc="e.desc" :image="e.image"/>
          </div>
        </div>

      </div>
      <div class="stats">
        <div class="stats_content">

        </div>
        <h1>My stats:</h1>
        <p>Max lift: {{user.max_lift}} kg</p>
        <p>Max endurance time: {{user.max_endurance_time}} minutes</p>
        <p>Max running speed: {{user.max_speed}} km/h</p>
        <div class="stats_buttons">
          <input type="button" value="Add new marker" class="profile_button">
          <input type="button" value="Delete a marker" class="profile_button">
        </div>


      </div>
    </div>
    <div class="training_data">
      <h1 id="data_label">Latest training data</h1>
        <WeeklyWeightChart/>
    </div>
  </div>

</template>

<style scoped>

.container_profile {
  height: 100%;
  display: flex;
}

.content {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 2fr;
  column-gap: 70px;

}

.img_block {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;

}

.user_welcome {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.friends {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
}

.overflow_friends {
  direction: rtl;
  overflow-y: auto;
  max-height: 250px;
  padding: 10px;
  border-radius: 12px;
  background: linear-gradient(45deg, var(--main_color), var(--very_light_main_color));
}

.friends_box {
  margin: 10px;
  direction: ltr;
}

.stats {
  grid-column: 2;
  grid-row: 2;
  padding-left: 20px;
  margin-left: 30px;
}

.stats_content {
  display: flex;
  flex-direction: column;

}

.img_block, .user_welcome, .friends, .stats {
  padding: 10px;
  margin: 10px;
}

#user_img {
  height: 300px;
  width: 300px;
  border: white solid 1px;
  border-radius: 50%;
  background-color: white;
}

h1 {
  font-size: 32px;
}

p {
  font-size: 20px;
}

.profile_button {
  background-color: var(--light_main_color);
  border: solid 1px var(--light_main_color);
  color: whitesmoke;
  height: 35px;
  width: fit-content;
  font-weight: bold;
  font-size: 22px;
  border-radius: 8px;
  transition: all 0.3s, scale 0.3s ease-in-out;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);

}

.profile_button:hover {
  scale: 1.05;
  cursor: pointer;
}

#change_pfp {
  margin: 10px 20px 10px;
}

#friends_label {
  margin-left: 23%;
}



.stats_buttons {
  display: flex;
  gap: 20px;
}

.training_data {
  width: 80%;
  float: right;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
}

#data_label {
  margin-left: 20px;
}


</style>