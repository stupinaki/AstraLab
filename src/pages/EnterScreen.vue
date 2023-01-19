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
            <ButtonUI color="white">
              Sign In
            </ButtonUI>
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
import ButtonUI from "@/components/ButtonUI.vue";

export default {
  name: "EnterScreen",
  components: {
    ButtonUI
  },
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
  display: grid;
  grid-template-rows: 1fr 2fr;
  gap:12px;
  height: 100%;
  overflow: hidden;
  //padding-top: $main-top-page-padding;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
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

.img-wrapper {
  width: 100%;
  overflow: hidden;
}

.img {
  //height: 100%;
  //max-width: 100%;
  min-height: 100%;
  max-width: 100%;
}
</style>