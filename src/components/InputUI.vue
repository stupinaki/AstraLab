<template>
  <div class="wrapper">
    <label class="label"> {{ label }} </label>
   <div class="">
     <input
         :type="type"
         class="input"
     >

     <img src="../assets/password.svg" alt="eye">
   </div>

  </div>

</template>

<script>

export default {
  name: "InputUI",
  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },

  },
  components: {
    
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .inputWrapper {
    background: #F3F3FA;
    border-radius: 50px;
    padding: 18px;
    border: none;
  }
  .input{
    background: #F3F3FA;
    padding: 18px;
    border: none;
  }
  .label {
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.8);
    padding-left: 18px;
  }

</style>