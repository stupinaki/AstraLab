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
        :is-visible="isSomeDataInvalid"
        text="Some data was incorrect, please try again"
        class="warning-hint"
        @closeWarning="onCloseWarning"
    />
    <LoadingUI v-if="isLoading"/>
  </div>
</template>

<script>
import {registrationInputsMixin} from "@/mixins/registrationInputsMixin.js";
import {formMixin} from "@/mixins/formMixin.js";
import {routerNames} from "@/router/routers.js";
import InputUI from "@/components/InputUI.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import WrongData from "@/components/WrongData";
import LoadingUI from "@/components/LoadingUI.vue";
import InputPassword from "@/components/InputPassword.vue";
import ChangePageLink from "@/components/ChangePageLink.vue";

export default {
  name: "SignUp",
  mixins: [registrationInputsMixin, formMixin],
  data() {
    return {
      routerNames,
      inputsValue: {
        fullName: undefined,
        email: undefined,
        password: undefined,
        passwordRepeat: undefined,
      },
      isLoading:  false,
      isBtnDisabled: true,
      isSomeDataInvalid: false,
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