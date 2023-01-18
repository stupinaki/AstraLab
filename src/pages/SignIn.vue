<template>
  <div class="SignIn">
    <h2> Sign In </h2>
    <form class="form">
      <div class="inputs">
        <InputUI
            v-for="input in inputs"
            :key="input.id"
            :type="input.type"
            :label="input.label"
        >
          <img v-if="input.type === 'password'" src="../assets/password.svg" alt="eye">
        </InputUI>
      </div>
      <ButtonUI
          color="blue"
      >
        Sign In
      </ButtonUI>
    </form>

    <ChangePageLink
      title="Don’t have an account yet?"
      router-name="SignUp"
      link-text="Sign Up"
    />

  </div>
</template>

<script>
import {routerNames} from "@/router/routers.js";
import InputUI from "@/components/InputUI.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import ChangePageLink from "@/components/ChangePageLink.vue";

export default {
  name: "SignIn",
  data() {
    return {
      routerNames,
      inputs: [
        {
          id: 6,
          label: 'Email',
          type: 'text'
        },
        {
          id: 7,
          label: 'Password',
          type: 'password'
        },
      ]
    }
  },
  components: {
    InputUI,
    ButtonUI,
    ChangePageLink
  }
}

</script>

<style scoped>
.SignIn {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
}

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
  gap: 8px;
}



</style>