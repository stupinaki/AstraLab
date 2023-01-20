<template>
  <div class="welcome-page">
    <div class="text-wrapper">
      <h2 class="title"> {{welcomeText}} </h2>
    </div>
    <div class="img-wrapper">
      <img src="../assets/womanMainScreen.png" alt="woman in a chair" class="img">
    </div>
  </div>
</template>

<script>
export default {
  name: "MainScreen",
  data () {
    return {
      userName: undefined,
    }
  },
  beforeMount() {
    this.$data.userName = localStorage.getItem('userName');
  },
  computed: {
    welcomeText() {
      return 'Welcome, ' + this.$data.userName + '!';
    }
  }
}
</script>

<style scoped lang="scss">
@import "../style/variables";

.welcome-page {
  display: grid;
  grid-template-rows: 1fr 2fr;
  gap: 12px;
  height: 100%;
  overflow: hidden;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 100%;
}

.title {
  font-weight: 800;
  font-size: 22px;
  line-height: 136%;
  letter-spacing: 0.02em;
  color: $default-text-color;
}

.img-wrapper {
  width: 100%;
  overflow: hidden;
}

.img {
  min-height: 100%;
  width: 100%;
}

@media screen and (min-width: 600px){
  .img {
    display: none;
  }
}

</style>