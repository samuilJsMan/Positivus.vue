<template>
    <div class="wrapper" :style="{background:values.status===`Error`?`rgba(240, 84, 84, 0.8)`:`rgba(185, 255, 102,0.8)`}">
      <div class="title">{{ values.status }}</div>
      <div class="mainText">{{ values.text }}</div>
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
    display: flex;
    position: absolute;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    .title{
      font-size: 20px;
      text-transform: capitalize;
    }
    .mainText{
      font-size: 17px;
    }
  }

  
</style>