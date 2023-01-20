<template>
  <div class="linkWrapper">
    <div> {{title}} </div>
    <div>
      <router-link
          :to="{name: routerNames[routerName]}"
          class="link"
      >
        {{ linkText }}
      </router-link>
      <div class="line"/>
    </div>
  </div>

</template>

<script>
import {routerNames} from "@/router/routers.js";

export default {
  name: "ChangePageLink",
  data() {
    return {
      routerNames,
    }
  },
  props: {
    title: String,
    routerName: String,
    linkText: String,
  }
}
</script>

<style scoped lang="scss">
@import "../style/variables";

.linkWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: $default-btn-background;
}

.link {
  color: inherit;
  text-decoration: none;
}

.link:hover {
  color: $hover-color;
}

.line {
  border-bottom: 1px solid;
}
</style>