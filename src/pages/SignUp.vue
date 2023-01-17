<template>
  <h2> Sign Up </h2>
  <form class="form">
    <div class="inputs">
      <InputUI
          v-for="input in inputs"
          :key="input.id"
          :type="input.type"
          :label="input.label"
      />
    </div>
    <ButtonUI
      :is-active="true"
    />
  </form>
</template>

<script>
import InputUI from "@/components/InputUI.vue";
import ButtonUI from "@/components/ButtonUI.vue";

export default {
  name: "SignUp",
  data() {
    return {
      inputs: [
        {
          id: 1,
          label: 'Full name',
          type: 'text'
        },
        {
          id: 2,
          label: 'Email',
          type: 'text'
        },
        {
          id: 3,
          label: 'Password',
          type: 'password'
        },
        {
          id: 4,
          label: 'Repeat password',
          type: 'password'
        },
      ]
    }
  },
  components: {
    InputUI,
    ButtonUI,
  }
}
</script>

<style scoped>
.form {
  background: #FFFFFF;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 90%;
  margin: 0 auto;
  padding: 24px 22px 18px;
  box-sizing: border-box;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

</style>