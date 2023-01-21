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
        :is-visible="isSomeDataInvalid"
        class="warning-hint"
        @closeWarning="onCloseWarning"
    />
    <LoadingUI v-if="isLoading"/>

  </div>
</template>

<script>
import {authorizationInputsMixin} from "@/mixins/authorizationInputsMixin.js";
import {formMixin} from "@/mixins/formMixin.js";
import {routerNames} from "@/router/routers.js";
import InputUI from "@/components/InputUI.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import LoadingUI from "@/components/LoadingUI.vue";
import WrongData from "@/components/WrongData";
import InputPassword from "@/components/InputPassword.vue";
import ChangePageLink from "@/components/ChangePageLink.vue";

export default {
  name: "SignIn",
  mixins: [authorizationInputsMixin, formMixin],
  data() {
    return {
      routerNames,
      inputsValue: {
        email: undefined,
        password: undefined,
      },
      isLoading:  false,
      isBtnDisabled: true,
      isSomeDataInvalid: false,
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