<script setup>
import { ref } from "vue";

// Importar imágenes desde `assets`
import placeholderImage from '@/assets/StockPfp.png';
import likeIcon from "@/assets/icons/like.png";
import likedIcon from "@/assets/icons/like.png";
import commentIcon from "@/assets/icons/comment.jpg";
import addIcon from "@/assets/icons/add.png";
import downloadIcon from "@/assets/icons/download.png";

// Estado del ComboBox (Filtro de Publicaciones)
const filterType = ref("Todos");

// Lista de amigos
const friends = ref([
  { id: 1, name: "Juan", profileImage: placeholderImage },
  { id: 2, name: "María", profileImage: placeholderImage },
  { id: 3, name: "Carlos", profileImage: placeholderImage },
  { id: 4, name: "Ana", profileImage: placeholderImage }
]);

// Lista de rutinas con estado de like
const routines = ref([
  { id: 1, sender: "Juan", text: "Rutina prueba espalda", profileImage: placeholderImage, liked: false },
  { id: 2, sender: "María", text: "Rutina prueba pierna", profileImage: placeholderImage, liked: false },
  { id: 3, sender: "Carlos", text: "Rutina prueba pecho", profileImage: placeholderImage, liked: false }
]);

// Estado para manejar los comentarios
const commentText = ref('');
const showCommentBox = ref(null);

// Alternar cuadro de comentarios
const toggleCommentBox = (messageId) => {
  showCommentBox.value = showCommentBox.value === messageId ? null : messageId;
};

// Función para simular el envío de un comentario
const submitComment = (messageId) => {
  console.log(`Comentario en el mensaje ${messageId}: ${commentText.value}`);
  commentText.value = ''; 
  showCommentBox.value = null; 
};

// Función para manejar el like
const toggleLike = (messageId) => {
  const message = routines.value.find((msg) => msg.id === messageId);
  if (message) {
    message.liked = !message.liked;
    console.log(`Mensaje ${messageId} ahora está ${message.liked ? 'LIKED' : 'UNLIKED'}`);
  }
};

// Función para simular compartir
const sharePost = (messageId) => {
  console.log(`Mensaje ${messageId} compartido`);
};

// Función para simular descargar
const downloadPost = (messageId) => {
  console.log(`Mensaje ${messageId} descargado`);
};
</script>

<template>
  <div class="social-container">
    <!-- Parte izquierda: Rutinas -->
    <div class="routines">
      <div class="routines-header">
        <h2>Rutinas</h2>

        <!-- ComboBox para seleccionar "Todos" o "Amigos" -->
        <select v-model="filterType" class="combobox">
          <option value="Todos">Todos</option>
          <option value="Amigos">Amigos</option>
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
            <img 
              :src="rtn.liked ? likedIcon : likeIcon" 
              alt="Like icon" 
              class="action-icon" 
              @click="toggleLike(rtn.id)" 
            />
            <img 
              :src="commentIcon" 
              alt="Comment icon" 
              class="action-icon" 
              @click="toggleCommentBox(rtn.id)" 
            />
            <img 
              :src="addIcon" 
              alt="Add icon" 
              class="action-icon" 
              @click="sharePost(rtn.id)" 
            />
            <img 
              :src="downloadIcon" 
              alt="Download icon" 
              class="action-icon" 
              @click="downloadPost(rtn.id)" 
            />
          </div>

          <div v-if="showCommentBox === rtn.id" class="comment-box">
            <textarea v-model="commentText" placeholder="Escribe un comentario..."></textarea>
            <button @click="submitComment(rtn.id)">Responder</button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Parte derecha: Lista de amigos -->
    <div class="friends-list">
      <h2>Amigos</h2>
      <ul>
        <li v-for="friend in friends" :key="friend.id">
          <img :src="friend.profileImage" alt="Foto de perfil" class="profile-img" />
          {{ friend.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.profile-img {
  width: 40px;  
  height: 40px;
  border-radius: 50%;
  object-fit: cover; 
  margin-right: 10px;
}

.social-container {
  display: flex;
  height: 100vh;
  background-color: #1a1a1d;
  color: white;
}

/* Sección de Rutinas */
.routines {
  flex: 2;
  background: var(--primary_bg);
  padding: 20px;
  border-right: 1px solid #ddd;
}

/* Encabezado de Rutinas con ComboBox */
.routines-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

/* Estilos del ComboBox */
.combobox {
  background: var(--main_color);
  color: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
}

.combobox:focus {
  outline: none;
}

/* Estilos de los Mensajes */
.message {
  background: #2e2e30;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
}

/* Alinear los botones de acción y separarlos */
.message-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  gap: 20px; 
}

/* Ajustar los iconos */
.action-icon {
  width: 40px; 
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.action-icon:hover {
  transform: scale(1.1);
}
/*test*/
</style>
