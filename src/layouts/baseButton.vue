<template>
  <button :class="[color,{centerPos:center}]" v-ripple>
    <slot></slot>  
  </button>
</template>

<script setup lang="ts">
import { defineProps,computed } from 'vue';

const props=defineProps([`color`,`center`])

const color=computed(()=>{
  if(props.color===`green`){
    return `bg-green-C `
  }else if(props.color===`black`){
    return `bg-black-C`
  }else if(props.color===`white`){
    return `bg-white-C`
  }
  return ``
})
</script>

<style scoped>
  button{
    height: 45px;
    width: fit-content;
    text-align: center;
    border-radius: 10px;
    padding: 0 20px;
  }
  .bg-green-C{
    background-color: #B9FF66;
    color:#000000;
  }

  .bg-black-C{
    background-color: #191A23;
    color:#FFFFFF
  }

  .bg-white-C{
    background-color: #FFFFFF;
    color:#000000;
    border: 1px solid #191A23;
  
  }
  .centerPos{
    display: block;
    margin: 0 auto;
  }
</style>