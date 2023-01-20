<template>
  <div class="sign-up">
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
        :is-visible="isSomeDataWrong"
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
      isSomeDataWrong: false,
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
    isFullNameValid() {
      return checkName(this.$data.inputsValue.fullName);
    },
    isEmailValid() {
      return validateEmail(this.$data.inputsValue.email);
    },
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
    isNeedErrorMessageForFullName() {
      const fullName = this.$data.inputsValue.fullName;
      const isDidNotTouch = fullName === undefined;
      if(isDidNotTouch || this.isFullNameValid) {
        return '';
      }
      return 'this field cannot be empty';
    },
    isNeedErrorMessageForEmail() {
      const email = this.$data.inputsValue.email;
      const isDidNotTouch = email === undefined;
      if(isDidNotTouch || this.isEmailValid) {
        return '';
      }
      return 'Enter valid email';
    },

  },
  methods: {
    async onSubmit() {
      this.$data.isLoading = true;

      const inputsValue = this.$data.inputsValue;
      const encodedData = btoa(inputsValue.password);
      // eslint-disable-next-line no-unused-vars
      const data = {
        fullName:  inputsValue.fullName,
        email: inputsValue.email,
        password: encodedData,
      }

      // const response = await fetch('URL где лежат данные', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // }).then((response) => response.json());

      const testResponse = {
        userName: 'John Doe',
        isSuccess: false,
      };

      this.$data.isLoading = false;

      if(testResponse.isSuccess) {
        localStorage.setItem('userName', testResponse.userName);
        this.$router.push('/welcome');
        return;
      }
      this.$data.isSomeDataWrong = true;
    },
    onInputChange(data) {
      const key = data.inputId;
      this.$data.inputsValue[key] = data.value || '';
    },
    onCloseWarning() {
      this.$data.isSomeDataWrong = false;
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

.warning-hint {
  position: fixed;
  bottom: 2%;
}

</style>