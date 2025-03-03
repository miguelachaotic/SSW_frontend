<script setup>
const props = defineProps({
  name: String,
  domain: String
})
</script>

<template>
  <div class="inner_login_container">
    <label>
      Username: <input type="text" placeholder="peter@example.com">
    </label>
  </div>
</template>

<style scoped>

</style>