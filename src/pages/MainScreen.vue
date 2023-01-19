<template>
  <div class="welcome-page">
    <div class="text-wrapper">
      <h2 class="title"> {{headerWelcome}} </h2>
    </div>
    <div class="img-wrapper">
      <img src="../assets/womanMainScreen.png" alt="woman in a chair" class="img">
    </div>
  </div>
</template>

<script>
export default {
  name: "MainScreen",
  props: {
    userName: {
      type: String,
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
  color: #181C43;
}

.img-wrapper {
  width: 100%;
  overflow: hidden;
}

.img {
  min-height: 100%;
  width: 100%;
}

</style>