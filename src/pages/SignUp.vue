<template>
  <div class="sign-up">
    <h2 class="title"> Sign Up </h2>
    inputsValue: {{inputsValue}}
    isNeedErrorMessageForPassword: {{isNeedErrorMessageForPassword}}
    <form
        @submit.prevent="onSubmit"
        class="form"
    >
      <div class="inputs">
        <InputUI
            v-for="input in inputsRegular"
            :id="input.id"
            :key="input.id"
            :type="input.type"
            :label="input.label"
            :error-message="input.errorMessage"
            :is-need-validate-name="input.type === 'text'"
            :is-need-validate-email="input.type === 'email'"
            @regularInputChange="onInputChange"
        >
        </InputUI>
        <InputPassword
            id="password"
            label="Password"
            :is-hint="true"
            :error-message="isNeedErrorMessageForPassword"
            @passwordInputChange="onInputChange"
        />
        <InputPassword
            id="passwordRepeat"
            label="Repeat password"
            :error-message="isNeedErrorMessageForPasswordRepeat"
            @passwordInputChange="onInputChange"
        />
      </div>
      <ButtonUI
          color="blue"
          :is-disabled="isBtnDisabled"
          @click="onClick"
      >
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
import {inputsRegular} from "../../data/signUpInputsData";
import {routerNames} from "@/router/routers.js";
import {comparePasswords} from "@/helpers/comparePasswords.js";
import {validatePassword} from "@/helpers/validatePassword.js";
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
      isBtnDisabled: true,
      inputsValue: {
        fullName: undefined,
        email: undefined,
        password: undefined,
        passwordRepeat: undefined,
      }
    }
  },
  components: {
    InputUI,
    ButtonUI,
    ChangePageLink,
    InputPassword,
  },
  computed: {
    isPasswordRepeatMatch() {
      const {password, passwordRepeat} = this.$data.inputsValue;
      return comparePasswords(password, passwordRepeat);
    },
    isPasswordValid() {
      return validatePassword(this.$data.inputsValue.password);
    },
    isNeedErrorMessageForPassword() {
      const password = this.$data.inputsValue.password;
      const isDidNotTouch = password === undefined;
      if(isDidNotTouch || this.isPasswordValid) {
        return '';
      }
      return 'Enter valid password';
    },
    isNeedErrorMessageForPasswordRepeat() {
      const password = this.$data.inputsValue.passwordRepeat;
      const isDidNotTouch = password === undefined;
      if(isDidNotTouch || this.isPasswordRepeatMatch) {
        return '';
      }
      return 'Passwords do not match';
    },
  },
  methods: {
    onSubmit() {
      // const inputsValue = this.$data.inputsValue;
      // const encodedData = btoa(inputsValue.password);
      // const data = {
      //   fullName:  inputsValue.fullName,
      //   email: inputsValue.email,
      //   password: encodedData,
      // }

      // console.log('отправляем форму')
      //todo не отправлять при начатии на кнопку с глазом
    },
    onClick() {
      console.log('мы нажами на кнопку!!!')
    },
    onInputChange(data) {
      const key = data.inputId;
      this.$data.inputsValue[key] = data.value || '';
    },
  }
}
</script>

<style scoped>
.sign-up {
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

.title {
  font-weight: 800;
  font-size: 22px;
  line-height: 136%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #181C43;
}

</style>