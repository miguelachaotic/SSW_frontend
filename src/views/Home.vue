<script setup>

import UserPost from "@/components/UserPost.vue";
</script>

<template>
  <div class="home_container">
    <div id="home_left_side">
      <div id="home_left_side_text">
        <div>
          This is our presentation! We should fill this with some info
          of our services so clients can watch out the things we do!
        </div>
        <div>
          <img src="@/assets/Icono%20GUI.png" alt="An incredible photo about us" id="home_img">
        </div>
      </div>
    </div>
    <div id="home_right_side">
      Here we got to fill with some posts made by our staff! We wish users could see the things we post.
      <div>
        <UserPost profile-image="favicon.ico" username="Admin Peter!" description="An awesome desc"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home_container{
  display: flex;
}
#home_left_side, #home_right_side{
  border: black solid 2px;
}

#home_left_side{
  width: 60%;
  height: 100%;
}

#home_right_side{
  width: 40%;
  height: 100%;
}

#home_left_side_text{
 display: flex;
}

#home_img{
  width: 100%;
  height: auto;
  padding: 4px;
  background: white;
}

</style>