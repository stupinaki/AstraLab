<template>
  <div class="SignIn">
    <h2> Sign In </h2>
    <form
        class="form"
        @submit.prevent="onSubmit"
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
        />
      </div>
      <ButtonUI color="blue">
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
import InputPassword from "@/components/InputPassword.vue";

export default {
  name: "SignIn",
  data() {
    return {
      routerNames,
      inputsRegular: [
        {
          id: 6,
          label: 'Email',
          type: 'email',
          errorMessage: 'Enter valid email',
        },
      ],
      inputsPassword: [
        {
          id: 7,
          label: 'Password',
          type: 'password',
          errorMessage: 'Enter valid password',

        },
      ]
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