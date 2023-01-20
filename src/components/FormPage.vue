<template>
  <div class="page-wrapper ">
    <h2 class="title"> {{title}} </h2>
    <form
        @submit.prevent="onSubmit"
        class="form"
    >
      <slot name="formInputs"/>
      <slot name="submitBtn"></slot>
    </form>
    <slot name="changeLink"/>
    <slot name="errorData"/>
    <LoadingUI v-if="isLoading"/>
  </div>
</template>

<script>
import {authorization} from "@/helpers/authorization.js";
import {routerNames} from "@/router/routers.js";
import LoadingUI from "@/components/LoadingUI.vue";

export default {
  name: "FormPage",
  data() {
    return {
      routerNames,
      isLoading: false,
      isFormInvalid: false,
    }
  },
  props: {
    title: String,
  },
  components: {
    LoadingUI,
  },
  methods: {
    async onSubmit() {
      this.$data.isLoading = true;
      const response = await authorization();
      this.$data.isLoading = false;

      if (response.isSuccess) {
        localStorage.setItem('userName', response.userName);
        this.$router.push('/welcome');
        return;
      }
      this.$data.isFormInvalid = true;
    },
  },
}
</script>

<style scoped lang="scss">
@import "src/style/formPageStyle";

</style>