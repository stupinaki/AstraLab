<template>
  <div class="enterScreen">
    <h2 class="title">Ready for a great User experience?</h2>
    <p class="subTitle">Bring your media to the next level!</p>
      <router-link
          :to="{name: routerNames.SignIn}"
          class="buttons"
      >
        <ButtonUI
            color="white"
        >
          Sign In
        </ButtonUI>
        <img src="../assets/buttonRound.svg" alt="arrow">
      </router-link>

    <img src="../assets/womanEnterScreen.png" alt="woman">
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
.enterScreen{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px
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

.subTitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 143% ;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #3E4462;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: center;
  justify-content: center;
}
</style>