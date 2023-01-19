<template>
  <div class="SignIn">
    <h2> Sign In </h2>
    inputRegularValue: {{inputRegularValue}}
    inputPasswordValue: {{inputPasswordValue}}
    <form
        class="form"
        @submit.prevent="onSubmit"
    >
      <div class="inputs">
        <InputUI
            :key="inputRegular.id"
            :type="inputRegular.type"
            :label="inputRegular.label"
            :error-message="inputRegular.errorMessage"
            @regularInputChange="onRegularInputChange"
        >
        </InputUI>
        <InputPassword
            v-model="inputPasswordValue"
            :key="inputPassword.id"
            :label="inputPassword.label"
            :error-message="inputPassword.errorMessage"
            :is-hint="inputPassword.isHint"
            @passwordInputChange="onPasswordInputChange"
        />
      </div>
      <ButtonUI
          color="blue"
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
    <WrongData/>
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
//todo нужно ли удалять вализацию?
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
      inputRegularValue: undefined,
      inputPasswordValue: undefined,
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
      this.$data.inputRegularValue = data;
    },
    onPasswordInputChange(data) {
      this.$data.inputPasswordValue = data;
    },
    onClick() {
      const requestData = {
        email: this.$data.inputRegularValue,
        password: this.$data.inputPassword,
      }
      const response = fetch('адресс где лежат данные', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
          .then((response) => response.json())

    //в response ожидаю boolean значение от бека, есть такой пользователь или нет
      if(response) {
        //то пользователь переходит на страницу с приветсивем
      }
      //если пришел false, то показать всплывашку с текстом, что что-то введено неверно
    }
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