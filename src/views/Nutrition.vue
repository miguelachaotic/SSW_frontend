<script setup>
import Recipe from "@/components/Recipe.vue";
import {ref} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref(new Date());

const recipeList = ref([
  {image: 'src/assets/icons/receta.jpg',text: 'Arroz con Pollo'},
  {image: 'src/assets/icons/receta.jpg',text: 'Guisantes con Jamón'},
  {image: 'src/assets/icons/receta.jpg',text: 'Salmón a la plancha'},
]);

const recipes = ref([

  {image: 'src/assets/icons/receta.jpg',text: 'Café'},
  {image: 'src/assets/icons/receta.jpg',text: 'Zumo de naranja'},
  {image: 'src/assets/icons/receta.jpg',text: 'Tostadas con Mantequilla'},
  {image: 'src/assets/icons/receta.jpg',text: 'Cereales'},
  {image: 'src/assets/icons/receta.jpg',text: 'Monster Blanco'},
]);
</script>

<template>

    <div class="sidebar">
      <div class = "button-container-sidebar">
          <button class="button">Recipe</button>
          <button class="button">Library</button>
      </div>
      <div class="add-new-recipe">
        <button class="button">Add New Recipe</button>
      </div>
      <div class="button-list-recipes">

        <div class="recipe-list">
          <ul>
            <li v-for="(recipe,index) in recipeList" :key ="index" >
              <Recipe :image="recipe.image" :text="recipe.text"/>
              <div class="add-edit-button">
                <button class="button">Add</button>
                <button class="button">Edit</button>
                <button class="button">Info</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="button_bar">
      <div class = "button-container">
          <button class="button">Breakfast</button>
          <button class="button">Lunch</button>
          <button class="button">Snack</button>
          <button class="button">Dinner</button>
      </div>
      <div class="recepies-in-meal">
        <ul>
          <li v-for="(recipe,index) in recipes" :key ="index" >
            <Recipe :image="recipe.image" :text="recipe.text"/>
          </li>
        </ul>
      </div>
    </div>
  <div class="content">
    <div class="chart">
      <img src="../assets/icons/piechart.jpg" alt="pie chart" class="chart-img">
      <h1>1600 / 2000 kcal</h1>
    </div>
    <div class="calendar">
      <VueDatePicker v-model="date" format="dd/MM/yyyy" dark/>
    </div>

  </div>
  <div>
    <button class="button">Edit</button>
  </div>

</template>

<style scoped>

.chart{
  text-align: center;
  margin-top: 5.6%;
}

.chart-img{
  height: 320px;
  width: 320px;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 66%;
  gap: 15%;
  margin-left: 0;
}


.calendar{
  margin-top: 5.2%
}

.sidebar {
  position: absolute;
  top:84px;
  bottom: 0;
  left: 67%;
  width: 32.5%;
  background: linear-gradient(-20deg, var(--primary_bg), var(--secondary_bg));
  display: flex;
  flex-direction: column;
  border-left: #fff 2px solid;
  color: #fff;
}

.button-container-sidebar{
  border-bottom: 2px solid #fff;
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
  align-items: center;
}

.add-new-recipe{
  display: flex;
  justify-content: center;
  border-bottom: white 2px solid;
  padding-bottom: 10px;
}

.button-list-recipes{
  overflow-y: auto;
}

.recipe-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-y: auto;
  margin-top: 50px;
}

.recipe-list ul {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.add-edit-button {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 7px;
  margin-bottom: 15px;
}

.sidebar ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 55%;
}

.sidebar ul li a {
  text-decoration: none;
  display: block;
  padding: 10px;
  background-color: var(--light_main_color);
  border-radius: 4px;
}

.sidebar ul li a:hover {
  background-color: #666;
}

.button_bar {
  position: absolute;
  top: 66.7%;
  left:0;
  right: 33%;
  bottom: 0;
  height: 33%;
  width: 67%;
  background: linear-gradient(-200deg, var(--secondary_bg), var(--primary_bg));
  color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  border-top: #fff 2px solid;
}

.recepies-in-meal{
  margin-top: 20px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}

.recepies-in-meal:deep(.recipe img){
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
  flex: none;
}

.button {
  padding: 10px 20px;
  background-color: var(--main_color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  margin: 10px 10px 0;
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: var(--light_main_color);
}

.date-picker {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
  </style>