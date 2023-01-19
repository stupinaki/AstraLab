<template>
  <div :class="wrapperStyle">
    <div class="text"> {{ text }} </div>
    <button
        class="close-btn"
        @click="onClick"
    >
      <img src="../assets/x.svg" alt="x">
    </button>
  </div>
</template>

<script>
export default {
  name: "WrongData",
  emits: ['closeWarning'],
  props: {
    text: {
      type: String,
      default: 'Wrong email or password'
    },
    isVisible: Boolean,
  },
  computed: {
    wrapperStyle() {
      return this.$props.isVisible ? 'wrapper' : 'wrapper-hide';
    }
  },
  methods: {
    onClick() {
      this.$emit('closeWarning');
    }
  }
}
</script>

<style scoped>
.wrapper{
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding: 16px 32px;
  justify-content: center;
  background: #FF6683;
  border-radius: 50px;
  box-sizing: border-box;
}
.wrapper-hide {
  display: none;
}
.close-btn {
  position: absolute;
  top: 40%;
  right: 8%;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: #FFFFFF;
}
</style>