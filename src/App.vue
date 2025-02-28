<script setup>
import { ref } from 'vue';

const name = ref(null);

</script>

<template>
  <form>
    <label for="name-input">Introduce tu nombre: </label>
    <input id="name-input" v-model="name" @input="console.log(name)" type="text" placeholder="Introduce tu nombre">
  </form>
</template>

//Prueba de push

<style scoped>
</style>
