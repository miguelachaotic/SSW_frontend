<script setup>

const props = defineProps({
  profileImage: String,
  username: String,
  description: String
});

</script>

<template>
  <div class="card">
    <div class="card-header">
      <img :src="profileImage" alt="Foto de perfil" class="profile-pic" />
      <h1 class="username">{{username}}</h1>
    </div>
    <div class="card-content">
      {{description}}
    </div>
    <div class="buttons">
      <img src="@/assets/icons/like.png" alt="like button">
      <img src="@/assets/icons/comment.jpg" alt="comment button">
      <img src="@/assets/icons/moreOptions.png" alt="more options" >
    </div>
  </div>
</template>



<style scoped>
.card {
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  color: var(--primary_bg);
  background-color: white;
}


.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}


.card-content {

  font-size: 17px;
  line-height: 1.4;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

img {
  margin-top: 12px;
  height: 50px;
  cursor: pointer;
}


</style>
