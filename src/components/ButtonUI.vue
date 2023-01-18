<template>
  <button
      type="button"
      :class="className"
      :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonUI",
  props: {
    disabled: Boolean,
    color: {
      type: String,
      default: "blue",
      validator(style) {
        return ["blue", "white"].includes(style);
      },
    }
  },
  computed: {
    className() {
      const {disabled, color} = this.$props;
      if (disabled) {
        return 'btn btn-disabled';
      }
      const classes = ['btn'];
      classes.push(`btn-${color}`);
      return classes.join(" ");
    },
  },
}
</script>

<style scoped>
.btn {
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
.btn-white {
  color: #000;
  background: #FFFF;
}
.btn-blue {
  color: #FFFFFF;
  background: #1E1A3E;
}

.btn-disabled {
  opacity: 0.4;
}
</style>