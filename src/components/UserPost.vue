<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  profileImage: String,
  username: String,
  description: String
});

const onLike = () => console.log('Liked');
const onComment = () => console.log('Commented');
const onDownload = () => console.log('Downloaded');
const onMore = () => console.log('More options');
</script>

<template>
  <div class="card">
    <div class="profile">
      <img :src="profileImage" alt="User Profile" class="profile-img" />
      <div class="user-info">
        <h3>{{ username }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="actions">
      <button @click="onLike">
        <svg viewBox="0 0 24 24" class="icon">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42
          4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5
          3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
      <button @click="onComment">
        <svg viewBox="0 0 24 24" class="icon">
          <path d="M21 6h-2v9H5v2h14l4 4V6z"/>
        </svg>
      </button>
      <button @click="onDownload">
        <svg viewBox="0 0 24 24" class="icon">
          <path d="M5 20h14v-2H5m14-10h-4V3H9v5H5l7 7 7-7z"/>
        </svg>
      </button>
      <button @click="onMore">
        <svg viewBox="0 0 24 24" class="icon">
          <path d="M12 16a2 2 0 110-4 2 2 0 010 4zm0-6a2 2
          0 110-4 2 2 0 010 4zm0-6a2 2 0 110-4 2 2 0 010 4z"/>
        </svg>
      </button>
    </div>
  </div>
</template>



<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

.card {
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 10px;
  max-width: 280px;
  width: 100%;
  box-shadow: 3px 3px 0 black;
  border-radius: 5px;
  background: white;
  font-family: 'Inter', sans-serif;
}
.profile {
  display: flex;
  align-items: center;
}
.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid black;
}
.user-info {
  flex-grow: 1;
}
.actions {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
.icon {
  width: 24px;
  height: 24px;
  fill: black;
}
@media (max-width: 400px) {
  .card {
    padding: 5px;
  }
  .profile-img {
    width: 30px;
    height: 30px;
  }
  .icon {
    width: 20px;
    height: 20px;
  }
}
</style>
