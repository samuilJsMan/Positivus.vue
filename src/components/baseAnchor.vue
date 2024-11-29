<template>
  <div>
    <a :href="to||null" :style="{color:type}">
      {{ text }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { defineProps,computed } from 'vue';
const props=defineProps([`to`,`theme`,`text`])

const type=computed(()=>{
  if(props.theme==`green`){
    return `green`
  }else if(props.theme==`white`){
    return `white`
  }else if(props.theme==`black`){
    return `black`
  }
  return ``
})

</script>

<style scoped>
  a{
    text-decoration: none;
    cursor: pointer;
  }
  a:hover{
    text-decoration: underline;
  }

</style>