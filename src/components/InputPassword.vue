<template>
  <div class="wrapper">
    <div class="label"> {{ label }} </div>
    <div :class="inputWrapperStyle">
      <input
          :type="inputType"
          class="input"
          autocomplete="current-password"
      >
      <ButtonToggleImg
          @changeInputType="onChangeInputType"
      />
    </div>
    <div class="error-message"> {{ errorMessage }} </div>
  </div>
</template>

<script>
import ButtonToggleImg from "@/components/ButtonToggleImg.vue";

export default {
  name: "InputPassword",
  data() {
    return {
      isTypePassword: true,
    }
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    errorMessage: String,
  },
  components: {
    ButtonToggleImg
  },
  computed: {
    inputWrapperStyle() {
      return this.$props.isError ? "inputWrapperError" : "inputWrapper";
    },
    inputType() {
      return this.$data.isTypePassword ? 'password' : 'text';
    }
  },
  methods: {
    onChangeInputType() {
      this.$data.isTypePassword = !this.$data.isTypePassword;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.inputWrapper {
  display: grid;
  grid-template-columns: 16fr 1fr;
  align-items: center;
  background: #F3F3FA;
  border-radius: 50px;
  border: none;
}
.inputWrapperError {
  display: grid;
  grid-template-columns: 16fr 1fr;
  align-items: center;
  border-radius: 50px;
  border: none;
  background: #FF668333;
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
  padding: 8px 18px;
}
.label {
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 18px;
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