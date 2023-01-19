<template>
  <div class="wrapper">
    <div class="label">
      <p>{{ label }} </p>
      <ButtonAndHint v-show="isHint"/>
    </div>
    <div :class="inputWrapperStyle">
      <input
          v-model="password"
          :type="inputType"
          class="input"
          autocomplete="current-password"
          @blur="onBlur"
          @focus="onFocus"
          @change="onChange"
      >
      <ButtonToggleImg
          @changeInputType="onChangeInputType"
      />
    </div>
    <div class="error-message">
      <div v-show="isError">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { validatePassword } from "@/helpers/validatePassword.js";
import ButtonToggleImg from "@/components/ButtonToggleImg.vue";
import ButtonAndHint from "@/components/ButtonAndHint.vue";

export default {
  name: "InputPassword",
  emits: ['passwordInputChange'],
  data() {
    return {
      isTypePassword: true,
      password: undefined,
      isError: false,
    }
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    errorMessage: String,
    isHint: Boolean,
  },
  components: {
    ButtonToggleImg,
    ButtonAndHint,
  },
  computed: {
    inputWrapperStyle() {
      return this.$data.isError ? "input-wrapper-error" : "input-wrapper";
    },
    inputType() {
      return this.$data.isTypePassword ? 'password' : 'text';
    }
  },
  methods: {
    onChangeInputType() {
      this.$data.isTypePassword = !this.$data.isTypePassword;
    },
    onBlur() {
      this.$data.isError = !validatePassword(this.$data.password);
    },
    onFocus() {
      this.$data.isError = false;
    },
    onChange() {
      this.$emit('passwordInputChange', this.$data.password)
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.input-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  background: #F3F3FA;
  border-radius: 50px;
  border: none;
  padding: 8px 18px;
}
.input-wrapper-error {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border-radius: 50px;
  border: none;
  background: #FF668333;
  padding: 8px 18px;
}
.input{
  background: transparent;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #181C43;
  outline: none;
  width: 100%;
}
.label {
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.8);
  justify-content: space-between;
  padding: 0 18px;
}

.error-message {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 18px;
  padding-left: 18px;
  font-size: 10px;
  color: #FF6683;
}


</style>