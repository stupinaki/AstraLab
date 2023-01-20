<template>
  <div class="sign-in">
    <h2 class="title"> Sign In </h2>
    <form
        class="form"
        @submit.prevent="onSubmit"
    >
      <div class="inputs">
        <InputUI
            :key="inputRegular.id"
            :type="inputRegular.type"
            :label="inputRegular.label"
            :id="inputRegular.id"
            :is-need-validate-email="true"
            :error-message="inputRegular.errorMessage"
            @regularInputChange="onRegularInputChange"
        >
        </InputUI>
        <InputPassword
            :key="inputPassword.id"
            :label="inputPassword.label"
            :id="inputPassword.id"
            @passwordInputChange="onPasswordInputChange"
        />
      </div>
      <ButtonUI
          color="blue"
          :is-disabled="isBtnDisabled"
          @click="onClick"
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
        @closeWarning="onCloseWarning"
        class="warning-hint"
    />
  </div>
</template>

<script>
import {routerNames} from "@/router/routers.js";
import {inputRegular, inputPassword} from "../../data/signInInputsData";
import InputUI from "@/components/InputUI.vue";
import ButtonUI from "@/components/ButtonUI.vue";
import WrongData from "@/components/WrongData";
import ChangePageLink from "@/components/ChangePageLink.vue";
import InputPassword from "@/components/InputPassword.vue";

//1 get data from form
// 2 sent it to backend with question "do you have this data?"
// 3 if it correct data - open welcome page, if not - show hint and make all inputs red

export default {
  name: "SignIn",
  data() {
    return {
      routerNames,
      inputRegular,
      inputPassword,
      inputsValue: {
        inputRegularValue: undefined,
        inputPasswordValue: undefined,
      },
      isBtnDisabled: true,
      //todo нужно брать злачение из ответа от бекенда
      isEmailOrPasswordWrong: true,
    }
  },
  components: {
    InputUI,
    ButtonUI,
    WrongData,
    ChangePageLink,
    InputPassword,
  },
  methods: {
    onSubmit() {
      // console.log('отправляем форму')
      //todo не отправлять при начатии на кнопку с глазом
    },
    onRegularInputChange(data) {
      this.$data.inputsValue.inputRegularValue = data;
    },
    onPasswordInputChange(data) {
      this.$data.inputsValue.inputPasswordValue = data;
    },
    onClick() {
      const requestData = {
        email: this.$data.inputsValue.inputRegularValue,
        password: this.$data.inputPassword,
      }
      //в response ожидаю boolean значение от бека, есть такой пользователь или нет
      const response = fetch('адресс где лежат данные', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
          .then((response) => response.json())

      if(response) {
        this.$router.push('/welcome');
      }else{
        this.$data.isEmailOrPasswordWrong = true;
      }
    },
    onCloseWarning() {
      this.$data.isEmailOrPasswordWrong = false;
    }
  },
  watch: {
    inputsValue: {
      handler(newValue) {
        const {inputRegularValue, inputPasswordValue} = newValue;
        if(inputRegularValue && inputPasswordValue) {
          this.$data.isBtnDisabled = false;
        }
      },
      deep: true,
    }
  }
}
</script>

<style scoped>
.sign-in {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 64px;
}

.title {
  font-weight: 800;
  font-size: 22px;
  line-height: 136%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #181C43;
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

.warning-hint {
  position: fixed;
  bottom: 2%;
}
</style>