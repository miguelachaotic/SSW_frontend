<script setup>
const props = defineProps({
  title: String,
  description: String
});
</script>

<template>
  <div class="rutina">
    <div class="panelSuperior">
      <h1 id="titulo">{{ title }}</h1>
      <button id="moreOptions">
        <img src="@/assets/icons/moreOptions.png" alt="More Options" />
      </button>
    </div>
    <p id="description">{{ description }}</p>
    <button>Post</button>
  </div>
</template>

<style scoped>
.rutina {
  position: relative;      
  border: 2px solid black; 
  background-color: white; 
  padding: 43px;           
  border-radius: 8px;      
  width: 60%;
  height: 100px;           
  margin-bottom:10px
}

.panelSuperior { 
  margin-bottom: 8px;     
}

h1 {
  color: black;            
  margin: 0;              
  padding: 0;             
}

#moreOptions {
  position: absolute;      
  top: 12px;                  
  right: 12px;                
  height: 3rem;            
  width: 3rem;
  display: flex;           
  justify-content: center; 
  align-items: center;     
  padding: 0;
  background-color: transparent;
  transition: scale 0.2s ease-in-out;
}
#moreOptions:hover{
  scale: 1.1;
}

#moreOptions img {
  width: 100%;             
  height: 100%;            
  object-fit: contain;     
}

#description {
  color: black;           
  margin-top: 16px;         
}

button {
  position: absolute;     
  bottom: 7px;            
  right: 12px;            
  padding: 14px 52px;
  background-color: var(--main_color);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: var(--light_main_color);
}

</style>
