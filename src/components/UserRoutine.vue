<script setup>
const props = defineProps({
  tittle: String,
  description: String
});
</script>

<template>
  <div class="rutina">
    <div class="panelSuperior">
      <h1 id="titulo">{{ tittle }}</h1> 
      <button id="moreOptions">
        <img  src="@/assets/icons/moreOptions.png" alt="More Options" />
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
  padding: 16px;           
  border-radius: 8px;      
  width: 60%;
  height: 100px;           
  margin-bottom:8px
}

.panelSuperior {
  position: relative;      
  margin-bottom: 8px;     
}

h1 {
  color: black;            
  margin: 0;              
  padding: 0;             
}

#moreOptions {
  position: absolute;      
  top: 0;                  
  right: 0;                
  height: 3rem;            
  width: 3rem;
  display: flex;           
  justify-content: center; 
  align-items: center;     
  padding: 0;              
  background-color: transparent;
}
#moreOptions:hover{
    background-color: var(--main_color);
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
  bottom: 10px;            
  right: 16px;            
  padding: 11px 27px;
  background-color: var(--dark_main_color);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: var(--main_color);
}

</style>
