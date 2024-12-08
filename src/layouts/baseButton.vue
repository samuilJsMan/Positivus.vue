<template>
  <button :class="[color,{centerPos:center}]" v-ripple>
    {{ text }} 
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps,computed } from 'vue';

const props=defineProps([`color`,`center`,`text`])

const color=computed(()=>{
    return props.color
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
  .green{
    background-color: #B9FF66;
    color:#000000;
  }

  .black{
    background-color: #191A23;
    color:#FFFFFF
  }

  .white{
    background-color: #FFFFFF;
    color:#000000;
    border: 1px solid #191A23;
  
  }
  .centerPos{
    display: block;
    margin: 0 auto;
  }
</style>