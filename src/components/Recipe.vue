<template>
  <div class="recipe">
    <img :src="image" alt="Recipe image">
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  text: String
});
</script>

<style scoped>
.recipe {
  text-align: center;
  justify-items: center;
  margin: 10px 0;
}

.recipe img {
  max-width: 50%;
  height: auto;
}
</style>