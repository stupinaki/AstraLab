<template>
  <h2> {{headerWelcome}} </h2>
  <img src="../assets/womanMainScreen.jpg" alt="woman in a chair">
</template>

<script>
export default {
  name: "MainScreen",
  props: {
    userName: {
      type: String,
      required: true
    }
  },
   computed: {
    headerWelcome () {
      return 'Hello, ' + this.$props.userName + '!';
    }
   }
}
</script>

<style scoped>

</style>