<script setup>
import { ref } from "vue";

import placeholderImage from '@/assets/stockPfp.png';
import likeIcon from "@/assets/icons/like.png";
import likedIcon from "@/assets/icons/like.png";
import commentIcon from "@/assets/icons/comment.jpg";
import addIcon from "@/assets/icons/add.png";
import downloadIcon from "@/assets/icons/download.png";
import addFriendIcon from "@/assets/icons/add-friend.png";
import deleteFriendIcon from "@/assets/icons/remove-friend.png";

const friends = ref([
  { id: 1, name: "Juan", username: "@juanp", profileImage: placeholderImage },
  { id: 2, name: "María", username: "@marial", profileImage: placeholderImage },
  { id: 3, name: "Carlos", username: "@carloss", profileImage: placeholderImage },
  { id: 4, name: "Ana", username: "@anap", profileImage: placeholderImage }
]);

const routines = ref([
  { id: 1, sender: "Juan", text: "Back training routine: " +
        "Superman Hold + Bird-Dog (8-10 reps) + Bent-Over Rows (10-12 reps) + " +
        "Reverse Snow Angels (10-12 reps) + Doorframe Rows (10-12 reps)", profileImage: placeholderImage, liked: false },
  { id: 2, sender: "María", text: "Leg workout!! Bodyweight Squats (12-15 reps) + " +
        "Glute Bridges (15-20 reps) + Wall Sit (30 secs) + " +
        "Calf Raises (15-20 reps) + Step-Ups (10 per leg) + Standing Kickbacks (10-12 per leg)", profileImage: placeholderImage, liked: false },
  { id: 3, sender: "Carlos", text: "Beginner Chest + triceps training routine: " +
        "Push-Ups (8-12 reps) + Incline Push-Ups (10-15 reps) + Wide Push-Ups (10 reps) + " +
        "Kneeling Chest Squeeze (30 seconds) + Wall Push-Ups (15-20 reps) + " +
        "Chest Dips on Chair (6-10 reps)", profileImage: placeholderImage, liked: false }
]);

</script>
<template>
  <div class="social-container">
    <!-- Rutinas -->
    <div class="routines-container">
<div class="routines-header">
  <h2>Rutinas</h2>
  <select class="combobox">
    <option value="all">All</option>
    <option value="friends">Friends</option>
  </select>
</div>
  <ul>
    <li v-for="rtn in routines" :key="rtn.id" class="message">
      <div class="message-header">
        <img :src="rtn.profileImage" alt="Foto de perfil" class="profile-img" />
        <span class="username">{{ rtn.sender }}</span>
      </div>
      <p class="message-text">{{ rtn.text }}</p>
      <div class="message-actions">
        <img :src="rtn.liked ? likedIcon : likeIcon" alt="Like icon" class="action-icon" />
        <img :src="commentIcon" alt="Comment icon" class="action-icon" />
        <img :src="addIcon" alt="Add icon" class="action-icon" />
        <img :src="downloadIcon" alt="Download icon" class="action-icon" />
      </div>
    </li>
  </ul>
</div>
    <div class="friends-container">
      <div class="search-box">
        <input type="text" placeholder="🔍 Look for a user" />
      </div>
      <div class="friends-list">
        <div class="friend-card" v-for="friend in friends" :key="friend.id">
          <img :src="friend.profileImage" alt="Foto de perfil" class="friend-img" />
          <div class="friend-info">
            <span class="friend-name">{{ friend.name }}</span>
            <span class="friend-username">{{ friend.username }}</span>
          </div>
          <div class="friend-actions">
            <img :src="addFriendIcon" alt="Añadir amigo" class="friend-action-icon" />
            <img :src="deleteFriendIcon" alt="Eliminar amigo" class="friend-action-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor Principal */
html, body {
  margin: 0;
  padding: 0;
}

h2 {
  font-size: 26px;
}

.social-container {
  display: flex;
  height: 100%;
  background-color: var(--primary_bg);
  color: whitesmoke;
  overflow-y: hidden;
}

.combobox {
  background: whitesmoke;
  color: var(--primary_bg);
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;

}

/* Sección de Rutinas */
.routines-container {
  flex: 2;
  background: linear-gradient(43deg, var(--light_main_color), var(--very_light_main_color));
  padding: 20px;
  overflow-y: auto;
  margin: 20px 20px 0 10px;
  border-radius: 10px;
}

/* Mensajes */
.message {
  background: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.message-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  background-color: white;
  border: black 2px solid;
}

.username {
  font-weight: bold;
  font-size: 20px;
  color: var(--primary_bg);
}

.message-text {
  font-size: 16px;
  margin-bottom: 15px;
  color: var(--primary_bg);
}

.message-actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.action-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  border-radius: 50%;
}

.action-icon:hover {
  transform: scale(1.1);
}

.friend-actions {
  display: flex;
  margin-right: 20px;
  gap: 15px;
}

.friend-action-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  gap: 20px;
}

.friend-action-icon:hover {
  transform: scale(1.1);
}

/* Sección de Amigos */
.friends-container {
  flex: 1;
  background: linear-gradient(0, var(--dark_main_color), var(--main_color));
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  overflow : hidden;
  border-radius: 0 0 0 10px;
  margin-top: 3px;
}

.search-box {
  width: 90%;
  margin-bottom: 10px;
}

.search-box input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  background: white;
  color: var(--primary_bg);
}

/* Lista de amigos */
.friends-list {
  width: 100%;
  max-height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Tarjeta de amigo */
.friend-card {
  background: linear-gradient(90deg, var(--light_main_color), var(--main_color));
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  gap: 15px;
  width: 100%;
  justify-content: space-between;
}

/* Imagen de amigo */
.friend-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
}

/* Información del amigo */
.friend-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.friend-name {
  font-weight: bold;
  font-size: 22px;
  color: whitesmoke;
}

.friend-username {
  font-size: 18px;
  color: whitesmoke;
}
</style>