<template>
  <button :class="btnStyle">
      {{text}}
  </button>
</template>

<script>
export default {
  name: "ButtonUI",
  props: {
    text: {
      type: String,
      default: 'Sign In'
    },
    isActive: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    btnStyle() {
      return this.$props.isActive ? 'btn' : 'btn btnDisabled';
    }
  }
}
</script>

<style scoped>
.btn {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-radius: 50px;
  border: none;
  padding: 18px;
  color: #FFFFFF;
  background: #1E1A3E;
}
.btn:hover {
  background-color: aqua;
}

.btnDisabled {
  opacity: 0.4;
}
</style>