<template>
    <button
        type="button"
        class="button"
        @click="onClick"
    >
      <img
          v-if="isShowPassword"
          src="../assets/passwordClose.svg"
          alt="password show"
      >
      <img
          v-else
          src="../assets/password.svg"
          alt="password hide"
      >
    </button>
</template>

<script>
export default {
  name: "ButtonToggleImg",
  emits: ['changeInputType'],
  data() {
    return {
      isShowPassword: false,
    }
  },
  methods: {
    onClick() {
      this.$data.isShowPassword = !this.$data.isShowPassword;
      this.$emit('changeInputType');
    }
  }
}
</script>

<style scoped>
.button {
  background-color: transparent;
  border: none;
}
</style>