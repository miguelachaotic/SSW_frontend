<template>
    <div class="recepie">
      <img src="../assets/icons/receta.jpg" alt="Imagen de la receta">
      <p>{{ texto }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Recepie',
    props: {
      imagen: {
        type: String,
        required: true
      },
      texto: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .recepie {
    text-align: center;
    justify-items: center;
    margin: 10px 0;
  }
  .recepie img {
    max-width: 50%;
    height: auto;
  }

  </style>