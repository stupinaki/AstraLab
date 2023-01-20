<template>
  <div class="wrapper">
   <div class="label"> {{ label }} </div>
   <div :class="inputWrapperStyle">
     <input
         v-model="inputValue"
         :type="type"
         class="input"
         @blur="onBlur"
         @focus="onFocus"
         @change="onChange"
     >
     <slot/>
   </div>
   <div class="error-message">
     <div v-show="isError">
       {{ errorMessage }}
     </div>
   </div>
  </div>

</template>

<script>
import {validateEmail} from "@/helpers/validateEmail.js";
import {checkName} from "@/helpers/checkName.js";

export default {
  name: "InputUI",
  emits: ['regularInputChange'],
  props: {
    id: {
      type: Number || String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    isNeedValidateEmail: {
      type: Boolean,
      default: false,
    },
    isNeedValidateName: {
      type: Boolean,
      default: false,
    },
    errorMessage: String,
  },
  data() {
    return {
      inputValue: undefined,
      isError: false,
    }
  },
  computed: {
    inputWrapperStyle() {
      return this.$data.isError ? "inputWrapperError" : "inputWrapper";
    }
  },
  methods: {
    onBlur() {
      if(this.$props.isNeedValidateEmail) {
        this.$data.isError = !validateEmail(this.inputValue);
      }
      if(this.$props.isNeedValidateName) {
        this.$data.isError = !checkName(this.inputValue);
      }
    },
    onFocus(e) {
      if(this.$data.inputValue) {
        e.target.select();
      }
      this.$data.isError = false;
    },
    onChange() {
      const data = {
        value: this.$data.inputValue,
        inputId: this.$props.id,
      }
      this.$emit('regularInputChange', data);
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
    align-items: center;
    background: #F3F3FA;
    border-radius: 50px;
    border: none;
    padding: 8px 18px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .inputWrapperError {
    display: grid;
    grid-template-columns: 16fr 1fr;
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