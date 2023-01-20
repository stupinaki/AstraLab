<template>
  <div class="page-wrapper ">
    <h2 class="title"> Sign Up </h2>
    <form
        @submit.prevent="onSubmit"
        class="form"
    >
      <div class="inputs">
        <InputUI
              id="fullName"
              type="text"
              label="Full name"
              :error-message="isNeedErrorMessageForFullName"
              @regularInputChange="onInputChange"
          />
        <InputUI
              id="email"
              type="email"
              label="Email"
              :error-message="isNeedErrorMessageForEmail"
              @regularInputChange="onInputChange"
          />
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
          :is-disabled="isBtnDisabled"
          @click="onSubmit"
      >
        Sign Up
      </ButtonUI>
    </form>
    <ChangePageLink
        title="Already have an account?"
        router-name="SignIn"
        link-text="Sign In"
    />
    <WrongData
        :is-visible="isFormInvalid"
        text="Some data was incorrect, please try again"
        class="warning-hint"
        @closeWarning="onCloseWarning"
    />
    <LoadingUI v-if="isLoading"/>
  </div>
</template>

<script>
import {routerNames} from "@/router/routers.js";
import {comparePasswords} from "@/helpers/comparePasswords.js";
import {validatePassword} from "@/helpers/validatePassword.js";
import {authorization} from "@/helpers/authorization";
import {validateEmail} from "@/helpers/validateEmail.js";
import {checkName} from "@/helpers/checkName.js";
import InputUI from "@/components/InputUI.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import WrongData from "@/components/WrongData";
import LoadingUI from "@/components/LoadingUI.vue";
import InputPassword from "@/components/InputPassword.vue";
import ChangePageLink from "@/components/ChangePageLink.vue";

export default {
  name: "SignUp",
  data() {
    return {
      routerNames,
      isBtnDisabled: true,
      inputsValue: {
        fullName: undefined,
        email: undefined,
        password: undefined,
        passwordRepeat: undefined,
      },
      isLoading:  false,
      isFormInvalid: false,
    }
  },
  components: {
    InputUI,
    ButtonUI,
    LoadingUI,
    WrongData,
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
    isFullNameValid() {
      return checkName(this.$data.inputsValue.fullName);
    },
    isPasswordRepeatMatch() {
      const {password, passwordRepeat} = this.$data.inputsValue;
      return comparePasswords(password, passwordRepeat);
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
    isNeedErrorMessageForPasswordRepeat() {
      const password = this.$data.inputsValue.passwordRepeat;
      const isDidNotTouch = password === undefined;
      if(isDidNotTouch || this.isPasswordRepeatMatch) {
        return '';
      }
      return 'Passwords do not match';
    },
    isNeedErrorMessageForFullName() {
      const fullName = this.$data.inputsValue.fullName;
      const isDidNotTouch = fullName === undefined;
      if(isDidNotTouch || this.isFullNameValid) {
        return '';
      }
      return 'this field cannot be empty';
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
      this.$data.isFormInvalid = true;
    },
    onInputChange(data) {
      const key = data.inputId;
      this.$data.inputsValue[key] = data.value || '';
    },
    onCloseWarning() {
      this.$data.isFormInvalid = false;
    }
  },
  watch: {
    inputsValue: {
      handler() {
        const isFullNameValid = this.isFullNameValid;
        const isEmailValid = this.isEmailValid;
        const isPasswordValid = this.isPasswordValid;
        const isPasswordRepeatValid = this.isPasswordRepeatMatch;
        if(isFullNameValid && isEmailValid && isPasswordValid && isPasswordRepeatValid) {
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