<template>
    <div class="wrapper" :class="{error:values.status===`Error`}">
      <p class="title">{{ values.status }}</p>
      <p class="mainText">{{ values.text }}</p>
    </div>
</template> 

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps([`values`])
</script>

<style lang="scss" scoped>
.wrapper{
  min-width:200px;
  width: 70%;
  max-width: 500px;
  border-radius: 20px;
  position: absolute;
  padding: 20px;
  text-align: center;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  background-color: rgba(185, 255, 102,0.8);
  .title{
    font-size: 20px;
    text-transform: capitalize;
  }
  .mainText{
    font-size: 17px;
  }
}
.error{
  background-color: rgba(240, 84, 84, 0.8);
}
  
</style>