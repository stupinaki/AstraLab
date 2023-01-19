<template>
  <div class="signUp">
    <h2> Sign Up </h2>
    <form
        @submit.prevent="onSubmit"
        class="form"
    >
      <div class="inputs">
        <InputUI
            v-for="input in inputsRegular"
            :key="input.id"
            :type="input.type"
            :label="input.label"
            :error-message="input.errorMessage"
        >
        </InputUI>
        <InputPassword
            v-for="input in inputsPassword"
            :key="input.id"
            :label="input.label"
            :error-message="input.errorMessage"
            :is-hint="input.isHint"
        />
      </div>
      <ButtonUI color="blue">
        Sign Up
      </ButtonUI>
    </form>

    <ChangePageLink
        title="Already have an account?"
        router-name="SignIn"
        link-text="Sign In"
    />

  </div>
</template>

<script>
import {inputsRegular, inputsPassword} from "../../data/signUpInputsData";
import {routerNames} from "@/router/routers.js";
import InputUI from "@/components/InputUI.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import ChangePageLink from "@/components/ChangePageLink.vue";
import InputPassword from "@/components/InputPassword.vue";

export default {
  name: "SignUp",
  data() {
    return {
      routerNames,
      inputsRegular,
      inputsPassword,
    }
  },
  components: {
    InputUI,
    ButtonUI,
    ChangePageLink,
    InputPassword,
  },
  methods: {
    onSubmit() {
      // console.log('отправляем форму')
      //todo не отправлять при начатии на кнопку с глазом
    },
  }
}
</script>

<style scoped>
.signUp {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 64px;
}

.form {
  background: #FFFFFF;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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