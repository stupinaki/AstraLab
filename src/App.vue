<template>
  <div class="appContainer">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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

.appContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 40px;
  box-sizing: border-box;
}
</style>
