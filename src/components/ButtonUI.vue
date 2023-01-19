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
      const {isDisabled, color} = this.$props;
      if (isDisabled) {
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
.btn-white {
  color: #000;
  background: #FFFF;
}
.btn-blue {
  color: #FFFFFF;
  background: #1E1A3E;
}
.btn-blue:hover,
.btn-blue:hover {
  background-color: aqua;
}

.btn-disabled {
  color: #FFFFFF;
  background-color: #1E1A3E66;
}
</style>