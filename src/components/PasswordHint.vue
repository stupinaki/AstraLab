<template>
  <div>
    <div class="wrapper">
      <div class="text">
        Password must contain 8+ symbols, 1 special and 2 capital letters
      </div>
      <div class="polygon"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "PasswordHint",
}
</script>

<style scoped lang="scss">
@import "../style/variables";

.wrapper {
  position: relative;
  background: $hint-background;
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 184px;
}
.text {
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  display: flex;
  align-items: center;
  text-align: center;
  color: $input-background;
  padding: 8px 12px;
}
.polygon{
  position: absolute;
  top: 100%;
  left: 86%;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid $hint-background;
}
</style>