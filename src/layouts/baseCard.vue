<template>
  <div :class="[`mainCard`,styleProp]">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps([`styleProp`])
</script>

<style lang="scss" scoped>
  .mainCard{
    padding: 40px;
    border-radius: 30px;
    box-shadow: 0 5px 0 #191A23;
    border: 1px solid #191A23;
  }

  .green{
    background-color: #B9FF66;
  }
  .black{
    background-color: #191A23;
  }
  .white{
    background-color: #F3F3F3;
  }
</style>