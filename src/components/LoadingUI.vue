<template>
  <div class="loader-wrapper">
    <div class="dots-wrapper">
      <div class="dot"/>
      <div class="dot dot1"/>
      <div class="dot dot2"/>
      <div class="dot dot3"/>
      <div class="dot dot4"/>
      <div class="dot dot5"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingUI"
}
</script>

<style scoped lang="scss">
@import "../variables";

.loader-wrapper {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  background-color: $loading-background;
}

.dots-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.dot {
  width: 8px;
  height: 8px;
  margin: 6px;
  background-color: $hover-color;
  border-radius: 50%;
}

.dot1 {
  animation-name: dot1-scale;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.dot2 {
  animation-name: dot2-scale;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.dot3 {
  animation-name: dot3-scale;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.dot4 {
  animation-name: dot4-scale;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.dot5 {
  animation-name: dot5-scale;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes dot1-scale {
  16% {
    transform: scale(2);
  }
}

@keyframes dot2-scale {
  32% {
    transform: scale(2);
  }
}

@keyframes dot3-scale {
  47% {
    transform: scale(2);
  }
}

@keyframes dot4-scale {
  62% {
    transform: scale(2);
  }
}

@keyframes dot5-scale {
  80% {
    transform: scale(2);
  }
}

</style>