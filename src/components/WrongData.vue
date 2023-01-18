<template>
  <div class="wrapper">
    <div class="text">Wrong email or password</div>
    <button class="close-btn">
      <img src="../assets/x.svg" alt="x">
    </button>
  </div>
</template>

<script>
export default {
  name: "WrongData"
}
</script>

<style scoped>
.wrapper{
  background: #FF6683;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  padding: 16px 32px;
}
.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
}
.text {
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
</style>