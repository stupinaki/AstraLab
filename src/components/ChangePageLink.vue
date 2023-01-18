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

<style scoped>
.linkWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1E1A3E;
}

.link {
  color: inherit;
  text-decoration: none;
}

.link:hover {
  color: aqua;
}

.line {
  border-bottom: 1px solid;
}
</style>