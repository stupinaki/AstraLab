<template>
  <div class="wrapper">
    <PasswordHint
        :class="passwordHintStyle"
    />
    <button
        class="question-btn"
        @click="onClick"
    >
      <img src="../assets/question.svg" alt="question sign">
    </button>
  </div>

</template>

<script>
import PasswordHint from "@/components/PasswordHint.vue";

export default {
  name: "ButtonAndHint",
  data() {
    return {
      isHintVisible: false,
    }
  },
  components: {
    PasswordHint,
  },
  methods: {
    onClick() {
      this.$data.isHintVisible = !this.$data.isHintVisible;
    }
  },
  computed: {
    passwordHintStyle() {
      return this.$data.isHintVisible ? 'password-hint' : 'password-hint-hidden';
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
}
.question-btn {
  border: none;
  background-color: transparent;
  padding-right: 4px;
  cursor: pointer;
}
.password-hint {
  position: absolute;
  bottom: 180%;
  right: -60%;
}
.password-hint-hidden {
  display: none;
}
</style>