<script setup>

import {inject} from "vue";
import HomeLoggedIn from "@/components/HomeLoggedIn.vue";
import HomeNotLoggedIn from "@/components/HomeNotLoggedIn.vue";

const authenticated = inject('authenticated');

</script>

<template>

<HomeLoggedIn v-if="authenticated" />
<HomeNotLoggedIn v-else />

</template>

<style scoped>

h1{
  text-align: center;
}

div{
  border: black 1px solid;
}

.home_container{
  display: flex;
}

.content{
  width: 66%;
}

.admin-posts{
  width: 34%;
}

</style>