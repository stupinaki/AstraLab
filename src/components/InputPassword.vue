<template>
  <div class="wrapper">
    <div class="label">
      <p>{{ label }} </p>
      <ButtonAndHint v-show="isHint"/>
    </div>
    <div :class="inputWrapperStyle">
      <input
          v-model="inputValue"
          :type="inputType"
          class="input"
          autocomplete="current-password"
          @focus="onFocus"
          @change="onChange"
      >
      <ButtonToggleImg
          @changeInputType="onChangeInputType"
      />
    </div>
    <div class="error-message">
      <div v-show="errorMessage">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import ButtonToggleImg from "@/components/ButtonToggleImg.vue";
import ButtonAndHint from "@/components/ButtonAndHint.vue";

export default {
  name: "InputPassword",
  emits: ['passwordInputChange'],
  data() {
    return {
      isTypePassword: true,
      inputValue: undefined,
    }
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    isHint: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ButtonToggleImg,
    ButtonAndHint,
  },
  computed: {
    inputWrapperStyle() {
      return this.$props.errorMessage ? "input-wrapper-error" : "input-wrapper";
    },
    inputType() {
      return this.$data.isTypePassword ? 'password' : 'text';
    }
  },
  methods: {
    onChangeInputType() {
      this.$data.isTypePassword = !this.$data.isTypePassword;
    },
    onFocus(e) {
      if(this.$data.inputValue) {
        e.target.select();
      }
    },
    onChange() {
      const data = {
        value: this.$data.inputValue,
        inputId: this.$props.id,
      }
      this.$emit('passwordInputChange', data);
    },
  }
}
</script>

<style scoped lang="scss">
@import "../style/variables";

.wrapper {
  display: flex;
  flex-direction: column;
}
.input-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  background: $input-background;
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
  background: $input-error-background;
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
  color: $default-text-color;
  outline: none;
  width: 100%;
}
.label {
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: $default-label-color;
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
  color: $error-color;
}
</style>