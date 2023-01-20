<template>
    <div class="enter-screen">
      <div class="description">
        <h2 class="title">Ready for a great User experience?</h2>
        <span class="sub-title">Bring your media to the next level!</span>
        <div class="link-wrapper">
          <router-link
              :to="{name: routerNames.SignIn}"
              class="link"
          >
            <div class="link-text">
              Sign Up
            </div>
          </router-link>

          <router-link
              :to="{name: routerNames.SignIn}"
              class="link"
          >
            <img src="../assets/buttonRound.svg" alt="arrow">
          </router-link>
        </div>
      </div>
      <div class="img-wrapper">
        <img src="../assets/womanEnterScreen.png" alt="woman" class="img">
      </div>
    </div>
</template>

<script>
import {routerNames} from "@/router/routers.js";

export default {
  name: "EnterScreen",
  data() {
    return {
      routerNames,
    }
  }
}
</script>

<style scoped>
@import "../variables.scss";

.enter-screen{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap:12px;
  height: 100%;
  overflow: hidden;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 64px;
}

.title {
  font-weight: 800;
  font-size: 22px;
  line-height: 136%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #181C43;
}

.sub-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 143% ;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #3E4462;
}

.link-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 12px;
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-text:hover {
  background-color: aqua;
}

.link-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-radius: 50px;
  border: none;
  padding: 16px 32px;
  color: #000;
  background: #FFFF;
}

.img-wrapper {
  width: 100%;
  overflow: hidden;
}

.img {
  width: 100%;
  transform: translateY(6px);
}

@media screen and (min-width: 600px){
  .enter-screen{
    justify-content: center;
  }
  .img {
      display: none;
  }
}
</style>