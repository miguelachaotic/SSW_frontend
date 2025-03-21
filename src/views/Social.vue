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


// Lista de amigos (esto debería ser una API)
const friends = ref([
  { id: 1, name: "Juan", username: "@juanp", profileImage: placeholderImage },
  { id: 2, name: "María", username: "@marial", profileImage: placeholderImage },
  { id: 3, name: "Carlos", username: "@carloss", profileImage: placeholderImage },
  { id: 4, name: "Ana", username: "@anap", profileImage: placeholderImage }
]);

// Lista de rutinas con estado de like (esto debería ser una API)
const routines = ref([
  { id: 1, sender: "Juan", text: "Rutina prueba espalda", profileImage: placeholderImage, liked: false },
  { id: 2, sender: "María", text: "Rutina prueba pierna", profileImage: placeholderImage, liked: false },
  { id: 3, sender: "Carlos", text: "Rutina prueba pecho", profileImage: placeholderImage, liked: false }
]);

// Estado para manejar los comentarios
const showCommentBox = ref(null);
const searchQuery = ref("");

// Alternar cuadro de comentarios
const toggleCommentBox = (messageId) => {
  showCommentBox.value = showCommentBox.value === messageId ? null : messageId;
};
</script>
<template>
  <div class="social-container">
    <!-- Rutinas -->
    <div class="routines-container">
      <h2>Rutinas</h2>
      <ul>
        <li v-for="rtn in routines" :key="rtn.id" class="message">
          <div class="message-header">
            <img :src="rtn.profileImage" alt="Foto de perfil" class="profile-img" />
            <span class="username">{{ rtn.sender }}</span>
          </div>
          <p class="message-text">{{ rtn.text }}</p>
          <div class="message-actions">
            <img :src="rtn.liked ? likedIcon : likeIcon" alt="Like icon" class="action-icon" @click="toggleLike(rtn.id)" />
            <img :src="commentIcon" alt="Comment icon" class="action-icon" @click="toggleCommentBox(rtn.id)" />
            <img :src="addIcon" alt="Add icon" class="action-icon" />
            <img :src="downloadIcon" alt="Download icon" class="action-icon" />
          </div>
        </li>
      </ul>
    </div>

    <!-- Amigos -->
    <div class="friends-container">
      <div class="search-box">
        <input type="text" placeholder="🔍 Busca a un amigo" v-model="searchQuery" />
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
      <button class="add-friend"><span>➕ Add Friend</span></button>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor Principal */
.social-container {
  display: flex;
  height: 100vh;
  background-color: var(--primary_bg);
  color: whitesmoke;
}

/* Sección de Rutinas */
.routines-container {
  flex: 2;
  background: var(--primary_bg);
  padding: 20px;
  overflow-y: auto;
}

/* Mensajes */
.message {
  background: var(--secondary_bg);
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
}

.username {
  font-weight: bold;
  font-size: 20px;
}

.message-text {
  font-size: 16px;
  margin-bottom: 15px;
  color: whitesmoke;
}

.message-actions {
  display: flex;
  justify-content: space-between;
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
  gap: 15px;
}
.friend-action-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.friend-action-icon:hover {
  transform: scale(1.1);
}


/* Sección de Amigos */
.friends-container {
  flex: 1;
  background: var(--secondary_bg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

/* Barra de búsqueda */
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
  background: var(--primary_bg);
  color: whitesmoke;
}

/* Lista de amigos */
.friends-list {
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Tarjeta de amigo */
.friend-card {
  background: var(--dark_main_color);
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
  color: whitesmoke;
}

.friend-username {
  font-size: 18px;
  color: #bbb;
}

/* Botones de acción */
.friend-actions {
  display: flex;
  gap: 5px;
}

.add-btn,
.remove-btn {
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
}

.add-btn {
  color: var(--light_main_color);
}

.remove-btn {
  color: var(--very_light_main_color);
}

/* Botón de agregar amigo */
.add-friend {
  background: var(--main_color);
  color: whitesmoke;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: background-color 0.2s ease-in-out;
}

.add-friend:hover {
  background: var(--light_main_color);
}
</style>