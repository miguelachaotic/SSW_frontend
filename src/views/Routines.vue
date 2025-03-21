<script setup>
import UserRoutine from '@/components/UserRoutine.vue';

</script>

<template>
    <div class="container">
        <div class="routineSection">
            <div class="routineButtons">
                <button type="button">Create New Workout</button>
                <button type="button">Default Routines</button>
                <div class="buscadorsection">
                    <input type="text" name="buscador" placeholder="Search Routines">
                </div>
            </div>
            <div class="routineElement">
                <UserRoutine title="Push day" description="Chest-based pushing workout in which I will also train shoulders and triceps secondarily"/>
                <UserRoutine title="Pull" description="Back-based pushing workout in which I will also train biceps secondary."/>
                <UserRoutine title="Leg day" description="Attempting leg training, (still a beginner)"/>
                <UserRoutine title="Arm day" description="Complete arm workout (without forearm)"/>
                <UserRoutine title="Abs day :D" description="Just abs, no more muscle today..."/>
                <UserRoutine title="Chess and back" description="Best day of the week <3"/>
            </div>
        </div>
        <div class="filterSection">
            <h1>Filters</h1>
            <form>
                <div class="checkbox_row">
                    <input type="checkbox" id="checkboxNovice">
                    <label for="checkboxNovice">Novice</label>
                </div>
                <div class="checkbox_row">
                    <input type="checkbox" id="checkboxIntermediate">
                    <label for="checkboxIntermediate">Intermediate</label>
                </div>
                <div class="checkbox_row">
                    <input type="checkbox" id="checkboxAdvanced">
                    <label for="checkboxAdvanced">Advanced</label>
                </div>
                <div class="checkbox_row">
                    <input type="checkbox" id="checkboxExpert">
                    <label for="checkboxExpert">Expert</label>
                </div>
                <div class="button_container">
                    <button type="button">Reset Filters</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    width: 100%;
}
.routineSection {
  width: 80%;
  background-color: var(--primary_bg);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 2rem - 80px);
}
.routineElement {
  width: 100%;
  background-color: var(--primary_bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.routineElement::-webkit-scrollbar {
  display: none;
}

.routineButtons{
    display: flex;
    gap:50px;
    margin-bottom: 20px;
}

.filterSection {
  width: 20%;
  background-color: var(--secondary_bg);
  height: calc(100vh - 80px);
  right: 0;
}

h1{
    font-size: 75px;
    margin-top: 60px;
    text-align: center;
}

.checkbox_row label{
    color: white;

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

form {
    margin-top:80px;
}

.button_container{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

button{
    border-radius: 5px;
    border:none;
    padding: 20px 25px;
    background-color: var(--dark_main_color);
    color:white;
    cursor:pointer;
    font-size: 20px;
    transition: background-color 0.2s ease-in-out;
}

input[type="text"]{
    padding: 20px 30px;
}

button:hover{
    background-color: var(--main_color);
}

label,input[type="checkbox"],.checkbox_row input{
    cursor:pointer;
}

</style>