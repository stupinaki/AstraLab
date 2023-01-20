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

<style scoped lang="scss">
@import "../style/variables";

.btn {
  color: $default-background;
  background: $default-btn-background;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-radius: 50px;
  border: none;
  padding: 16px 32px;
}

.btn:hover {
  background-color: $hover-color;
}

.btn-disabled {
  color: $default-background;
  background-color: $default-btn-disabled-background;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-radius: 50px;
  border: none;
  padding: 16px 32px;
}
</style>