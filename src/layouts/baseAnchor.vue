<template>
  <a class="anchor" :href="to||null" :style="{color:type}">
    {{ text }}
    <slot></slot>
  </a>
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
  .anchor{
    text-decoration: none;
    cursor: pointer;
  }
  .anchor:hover{
    text-decoration: underline;
  }

</style>