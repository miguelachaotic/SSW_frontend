<script setup>
import UserRoutine from '@/components/UserRoutine.vue';


</script>

<template>
    <div class="container">
        <div class="routineSection">
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
            <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
        </div>
        <div class="filterSection">
            <h1>Filters</h1>
            <form>
                <div class="checkbox_row">
                    <input type="checkbox" id="checkbox1">
                    <label for="checkbox1">Novice</label>
                </div>
                <div class="checkbox_row">
                    <input type="checkbox" id="checkbox2">
                    <label for="checkbox2">Intermediate</label>
                </div>
                <div class="checkbox_row">
                    <input type="checkbox" id="checkbox3">
                    <label for="checkbox3">Advanced</label>
                </div>
                <div class="checkbox_row">
                    <input type="checkbox" id="checkbox4">
                    <label for="checkbox4">Expert</label>
                </div>
                <div class="button_container">
                    <button type="button">Reset Filters</button>
                </div>
            </form>
        </div>
    </div>    
        <!-- <UserRoutine tittle="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
        <UserRoutine tittle="Pull" description="Back-based pushing workout in which I will also train biceps secondary."/>

        <UserRoutine tittle="Leg day" description="Attempting leg training, (still a beginner)"/>-->
</template>

<style scoped>
.container{
    display: flex;
    width: 100%;
}
.routineSection {
  width: 80%;
  background-color: lightblue;
}

.filterSection {
  width: 20%;
  background-color: lightgreen;
}
h1{
    font-size: 75px;
    margin-top: 75px;
    text-align: center;
}
.checkbox_row {
    display: flex;
    align-items: center; 
    margin-bottom: 40px; 
}
.checkbox_row input {
    appearance: none;
    border-color: var(--main_color);
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-left: 20px;
    margin-right: 10px; 
}
.checkbox_row input:hover{
    background-color:var(--very_light_main_color) ;
}
.checkbox_row input:checked {
    background-color: var(--main_color); /* Color de relleno cuando está seleccionado */
    border-color: var(--dark_main_color); /* Color del borde cuando está seleccionado */
}
.checkbox_row input:checked::after {
    content: '✔';
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
form{
    margin-top:150px;
}
.button_container{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
button{
    border-radius: 5px;
    border:none;
    padding: 11px 27px;
    background-color: var(--dark_main_color);
    color:white;
    cursor:pointer;
}
button:hover{
    background-color: var(--main_color);
}
label,input[type="checkbox"],.checkbox_row input{
    cursor:pointer;
}

</style>