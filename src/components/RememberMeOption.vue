<script setup>

</script>

<template>
  <div class="inner_login_container" id="remember_user">
    <input class="custom-checkbox" id="inner_checkbox" type="checkbox">
    <label for="inner_checkbox">
      Remember me
    </label>
  </div>
</template>

<style scoped>
#remember_user {
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-left: 27%;
}

.custom-checkbox {
  appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid var(--main_color);
  background-color: white;
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: 2px;
}

.custom-checkbox:checked {
  background-color: var(--main_color);
  border-color: #800020;
}

.custom-checkbox:checked::after {
  content: "✔";
  color: white;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>