<script setup>
const props = defineProps({
  username: String,
  profileImage: String
})
</script>

<template>
  <div class="profile-container">
    <img
        class="profile-photo"
        :src="profileImage"
        alt="Foto de perfil"
    />
    <span class="username">{{username}}</span>
    <button class="add-button">Add</button>
  </div>
</template>



<style scoped>
.profile-container {
  display: flex;
  background-color: whitesmoke;
  color: var(--primary_bg);
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 270px;
}

.profile-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.username {
  font-size: 1rem;
  font-weight: bold;
}

.add-button {
  position: relative;
  padding: 0.5rem 1rem;
  background-color: var(--light_main_color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.add-button:hover {
  background-color: var(--very_light_main_color);
}
</style>
