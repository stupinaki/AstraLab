<template>
  <div class="page-wrapper">
    <h2 class="title"> Sign In </h2>
    <form
        class="form"
        @submit.prevent="onSubmit"
    >
      <div class="inputs">
        <InputUI
            id="email"
            type="email"
            label="Email"
            :error-message="isNeedErrorMessageForEmail"
            @regularInputChange="onInputChange"
        >
        </InputUI>
        <InputPassword
            id="password"
            label="Password"
            :error-message="isNeedErrorMessageForPassword"
            @passwordInputChange="onInputChange"
        />
      </div>
      <ButtonUI
          :is-disabled="isBtnDisabled"
          @click="onSubmit"
      >
        Sign In
      </ButtonUI>
    </form>
    <ChangePageLink
      title="Don’t have an account yet?"
      router-name="SignUp"
      link-text="Sign Up"
    />
    <WrongData
        :is-visible="isEmailOrPasswordWrong"
        class="warning-hint"
        @closeWarning="onCloseWarning"
    />
    <LoadingUI v-if="isLoading"/>

  </div>
</template>

<script>
import {routerNames} from "@/router/routers.js";
import {authorization} from "@/helpers/authorization.js";
import {validateEmail} from "@/helpers/validateEmail";
import {validatePassword} from "@/helpers/validatePassword";
import InputUI from "@/components/InputUI.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import LoadingUI from "@/components/LoadingUI.vue";
import WrongData from "@/components/WrongData";
import InputPassword from "@/components/InputPassword.vue";
import ChangePageLink from "@/components/ChangePageLink.vue";

export default {
  name: "SignIn",
  data() {
    return {
      routerNames,
      inputsValue: {
        email: undefined,
        password: undefined,
      },
      isBtnDisabled: true,
      isEmailOrPasswordWrong: false,
      isLoading:  false,
    }
  },
  components: {
    InputUI,
    ButtonUI,
    WrongData,
    LoadingUI,
    InputPassword,
    ChangePageLink,
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.$data.inputsValue.email);
    },
    isPasswordValid() {
      return validatePassword(this.$data.inputsValue.password);
    },
    isNeedErrorMessageForEmail() {
      const email = this.$data.inputsValue.email;
      const isDidNotTouch = email === undefined;
      if(isDidNotTouch || this.isEmailValid) {
        return '';
      }
      return 'Enter valid email';
    },
    isNeedErrorMessageForPassword() {
      const password = this.$data.inputsValue.password;
      const isDidNotTouch = password === undefined;
      if(isDidNotTouch || this.isPasswordValid) {
        return '';
      }
      return 'Enter valid password';
    },
  },
  methods: {
    async onSubmit() {
      this.$data.isLoading = true;
      const response = await authorization();
      this.$data.isLoading = false;

      if(response.isSuccess) {
        localStorage.setItem('userName', response.userName);
        this.$router.push('/welcome');
        return;
      }
      this.$data.isEmailOrPasswordWrong = true;
    },
    onInputChange(data) {
      const key = data.inputId;
      this.$data.inputsValue[key] = data.value || '';
    },
    onCloseWarning() {
      this.$data.isEmailOrPasswordWrong = false;
    }
  },
  watch: {
    inputsValue: {
      handler() {
        const isEmailValid = this.isEmailValid;
        const isPasswordValid = this.isPasswordValid;
        if(isEmailValid && isPasswordValid) {
          this.$data.isBtnDisabled = false;
        }
      },
      deep: true,
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/style/formPageStyle";
</style>