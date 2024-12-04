<template>
  <div>
    <a :href="to||null" :style="{color:type}">
      {{ text }}
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { defineProps,computed } from 'vue';
const props=defineProps([`to`,`theme`,`text`])

const type=computed(()=>{
  if(props.theme==`green`){
    return `#B9FF66`
  }else
  return props.theme
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