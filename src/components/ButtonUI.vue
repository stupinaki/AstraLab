<template>
  <button
      type="button"
      :class="className"
      :disabled="isDisabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonUI",
  props: {
    isDisabled: Boolean,
  },
  computed: {
    className() {
      const {isDisabled} = this.$props;
      return isDisabled ? 'btn-disabled' : 'btn';
    },
  },

}
</script>

<style scoped>
.btn {
  color: #FFFFFF;
  background: #1E1A3E;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-radius: 50px;
  border: none;
  padding: 16px 32px;
}

.btn:hover {
  background-color: aqua;
}

.btn-disabled {
  color: #FFFFFF;
  background-color: #1E1A3E66;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-radius: 50px;
  border: none;
  padding: 16px 32px;
}
</style>