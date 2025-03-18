<script setup>
import EmailInput from "@/components/EmailInput.vue";
import { ref } from "vue";

const code = ref(Array(6).fill(""));
const inputs = ref([]);

const handleInput = (index, event) => {
  if (event.target.value.length === 1 && index < code.value.length - 1) {
    inputs.value[index + 1].focus();
  }
};

const handleDelete = (index, event) => {
  if (!code.value[index] && index > 0) {
    inputs.value[index - 1].focus();
  }
};
</script>

<template>
  <div class="login_container" id="retrieve_password">
    <div id="header_verify_password">Enter your email here and we will send you a 6-digit code to verify it's really you!</div>
    <EmailInput></EmailInput>
    <h1>Verification Code</h1>
    <div class="code_input_container">
      <input
          v-for="(_, index) in code"
          :key="index"
          v-model="code[index]"
          type="text"
          class="code-input"
          maxlength="1"
          @input="handleInput(index, $event)"
          @keydown.delete="handleDelete(index, $event)"
          ref="inputs"
      />
    </div>
    <div class="inner_login_container">
      <input type="button" value="Verify">
    </div>

  </div>
</template>

<style scoped>
.code_input_container {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.code-input {
  width: 48px;
  height: 48px;
  text-align: center;
  font-size: 1.5rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
}

.code-input:focus {
  border-color: var(--light_main_color);
}

h1{
  color: var(--primary_bg);
}

#header_verify_password{
  font-size: 25px;
  color: var(--primary_bg);
}

</style>