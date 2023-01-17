<template>
  <MainScreen
      user-name="John Doe"
  />

  <SignUp/>
</template>

<script>
import MainScreen from "@/pages/MainScreen.vue";
import SignUp from "@/pages/SignUp.vue";

export default {
  name: 'App',
  components: {
    MainScreen,
    SignUp
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:  #FAF3F3;
  height: 100vh;
}
</style>
