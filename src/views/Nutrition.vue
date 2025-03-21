<script setup>
import Recepie from "@/components/Recepie.vue";
import {ref} from "vue";


const selectedDate = ref("");
const menuVisible = ref(false)

function toggleMenu() {
    menuVisible.value = !menuVisible.value
}

const recepies = ref([
  {imagen: '../assets/icons/receta.jpg',texto: 'Arroz con Pollo'},
  {imagen: '../assets/icons/receta.jpg',texto: 'Guisantes con Jamón'},
  {imagen: '../assets/icons/receta.jpg',texto: 'Salmón a la plancha'},
]);

const recepiesMeal = ref([
  
  {imagen: '../assets/icons/receta.jpg',texto: 'Café'},
  {imagen: '../assets/icons/receta.jpg',texto: 'Zumo de naranja'},
  {imagen: '../assets/icons/receta.jpg',texto: 'Tostadas con Mantequilla'},
  {imagen: '../assets/icons/receta.jpg',texto: 'Cereales'},
  {imagen: '../assets/icons/receta.jpg',texto: 'Monster Blanco'},
]);
</script>

<template>
    
    <div class="sidebar">
      <div class = "button-container-sidebar">
          <button class="btn">Recepies</button>    
          <button class="btn">Library</button>
      </div>
      <div class="btnListRecipes">
        <div class="addNewRecepie">
          <button class="btn">Add New Recepie</button>
        </div>
        <div class="listOfRecepies">
          <ul>
            <li v-for="(recepie,index) in recepies":key ="index" >
              <Recepie :imagen="recepie.imagen" :texto="recepie.texto"/>
              <div class="btnAddEdit">
                <button class="btn">Add</button>
                <button class="btn">Edit</button>
                <button class="btn">Info</button>
              </div>
            </li>
          </ul>
        </div>
      </div>  
    </div>


    <div class="bottonbar">
      <div class = "button-container">
          <button class="btn">Breakfast</button>    
          <button class="btn">Lunch</button>
          <button class="btn">Snack</button>
          <button class="btn">Dinner</button>
      </div>
      <div class="recepies-in-meal">
        <ul>
          <li v-for="(recepie,index) in recepiesMeal":key ="index" >
            <Recepie :imagen="recepie.imagen" :texto="recepie.texto"/>
          </li>
        </ul>
      </div>
      
    </div>
    
    <div class="calendar">
      <input type="date" v-model="selectedDate" class="datePicker"/>
      
    </div>
    

    <div class="chart">
      <img src="../assets/icons/chart.JPG" class="chart-img">
      <h1>1600 / 2000 kcal</h1>
    </div>

    <div class="edit-button">
      <button class="btn">Edit</button>
    </div>
  </template>
  
  <style scoped>
  

  .edit-button{
    margin-top: 360px;
    margin-left: 5px;
  }
  .chart{
    position: absolute;
    top:90px;
    left:4%;
    text-align: center;
  }

  .chart-img{
    height: 250px;
    width: 250px;
  }
  .calendar{
    position: absolute;
    top:90px;
    left: 50%;
  }
  .sidebar {
    position: absolute;
    /*float:right;*/
    top :84px;
    bottom: 0;
    left: 67%;
    width: 33%;
    /*height: 100%;*/
    background-color: var(--primarybg);
    color: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-left: #fff 2px solid;  
    
  }

  

  .button-container-sidebar{
    border-bottom: 2px solid #fff; 
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    
  }
  .addNewRecepie{
    
    display: flex;
    justify-content: center;
  }

  .btnListRecipes{
    overflow-y: auto;
  }
  .listOfRecepies{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    text-align: center;

    overflow-y: auto;
  }
  .listOfRecepies ul{
    display: flex;
    flex-direction: column;
    gap:30px;

  }
  
  .btnAddEdit{

    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
  }
  /* Estilos para la lista del menú */
  .sidebar ul {
    
    list-style-type: none;
    right: 24px;
    padding: 0;
    margin: 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items:flex-end;
  }
  
  .sidebar ul li a {
    color: #fff;
    
    text-decoration: none;
    display: block;
    padding: 10px;
    background-color: #555;
    border-radius: 4px;
  }
  
  .sidebar ul li a:hover {
    background-color: #666;
  }


  .bottonbar{
    position: absolute;
    top: 67%;
    left:0;
    right: 33%;
    bottom: 0;
    height: 33%;
    width: 67%;
    background-color: var(--primarybg);
    color: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-top: #fff 2px solid;
  }

  .recepies-in-meal{
    margin-top: 20px;
    
    list-style: none;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    
  }

  
  .recepies-in-meal:deep(.recepie img){
    width: 200px;
    height: auto;
    justify-content: right;
    justify-items: right;
    display: block;
    margin: 0;
  }

  .recepies-in-meal ul{
    
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    justify-items: center;
    
    padding: 0;
    margin: 0;

  }
  .recepies-in-meal li{
    flex:0 0 auto;
  }
  .btn{
    padding: 10px 20px; 
    background-color: var(--dark_main_color);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    border-radius: 0;
    margin: 0;
  }
  .btn{
    margin-top: 10px;
  }
  
  .btn:hover{
   background-color: var(--main_color); 
  }
  
  
  .date-picker {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
  
  
  </style>