<script setup>
</script>

<template>
  <div class="container">
    <div class="image-container">
      <img src="@/assets/logoWeb.png" alt="Icono">
    </div>
    <div class="content">
      <h1>Fit Revolution</h1>
      <h2>What is Fit Revolution?</h2>
      <p>Fit Revolution is a fitness website whose goal is to help its users track their progress in the sports field, 
        as well as helping them plan their diets in order to maximize their performance and help them achieve their goals.</p>
      <h2>What are our goals?</h2>
      <p>Our goal with this website is to provide our users with the best tools to help them in their daily life in the sports field.</p>
      <p>But we didn't want to leave it there, we think that the fitness world is an area that cannot be developed individually,
         but rather it is necessary to socialize with other people constantly in order to progress and constantly acquire 
         new knowledge from others, this is the reason why we created this website, all with the aim that all users can share 
         knowledge among themselves in order to progress together and form communities that help each other.</p>
      <p>Ultimately, our most important goal is to create a community over time, getting people to interact with each other in order to grow together in this field.</p>
      <h2>Our values</h2>
      <ul>
        <li>
          <h3>Health and well-being</h3>
          <p>Promoting healthy habits in our users in order to improve their physical condition and long-term health.</p>
        </li>
        <li>
          <h3>Accessibility and inclusion</h3>
          <p>This website was created to provide a space suitable for everyone, regardless of experience level or physical condition.</p>
        </li>
        <li>
          <h3>Community and support</h3>
          <p>In order to foster camaraderie and motivation among users.</p>
        </li>
        <li>
          <h3>Improvement and perseverance</h3>
          <p>Emphasize the importance of discipline and personal progress.</p>
        </li>
        <li>
          <h3>Fun and enjoyment</h3>
          <p>Make exercise a pleasurable activity, not an obligation.</p>
        </li>
      </ul>
      <h2>Main services and features</h2>
      <ul>
        <li>
          <h3>Creating custom routines</h3>
          <p>You will be able to create your own routines with the exercises previously uploaded to the website by us, in addition to being able to download already created routines with different difficulties based on your current situation and requirements.</p>
        </li>
        <li>
          <h3>Consult information about exercises</h3>
          <p>Each exercise will be accompanied by a description and how to perform it correctly so that newcomers to the sector can progress appropriately. Even more experienced users can improve and consult this information if they find it necessary.</p>
        </li>
        <li>
          <h3>Diet creation and daily calorie tracking</h3>
          <p>We include a tool with which you can create your own recipes using the ingredients loaded into the system, in addition to being able to update and edit your daily meals in order to keep track of calories based on your goals.</p>
        </li>
        <li>
          <h3>Training publication and social section</h3>
          <p>All users will be able to post their workouts in a social section, where they can also view, comment on, rate, and download other users' workout routines. They can also add friends to gradually build a community among users.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: calc(100vh - 80px);
  background-color:  var(--primary_bg);
  overflow: hidden;
}

.image-container {
  position: fixed;
  left: 0;
  top: 82px;
  width: 30%;
  height: calc(100vh - 80px);
  background-color: var(--secondary_bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  max-width: 80%;
  max-height: 80%;
}

.content {
  margin-left: 32%;
  padding: 20px;
  max-width: 67%;
  overflow-y: auto;
}
h1{
    text-align: center;
    font-size: 50px;
   
}
h2{
    font-size: 30px;
   
}
h3{
    font-size: 19px;
   
}
p{
    font-size:15px;
    
}
</style>
