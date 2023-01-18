<template>
  <h2> {{headerWelcome}} </h2>
  <img src="../assets/womanMainScreen.png" alt="woman in a chair">
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
      const name  = this.$props.userName || 'Dear user';
      return 'Hello, ' + name + '!';
    }
   }
}
</script>

<style scoped>

</style>