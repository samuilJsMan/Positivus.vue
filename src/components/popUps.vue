<template>
  <BaseCard :styleProp="state ? `white` : `green`" class="card">
    <div class="titleBlock">
      <div class="number">0{{ number }}</div>
      <h1 class="title">
        {{ title }}
      </h1>
      <div class="button" @click="state = !state" v-ripple>
        <p class="plus" v-if="state">+</p>
        <p class="minus" v-else></p>
      </div>
    </div>
    <div class="textBlock" :style="{height:!state?calculated:0}">
      <br />
      <div class="description" ref="textBlockHeight">
        {{ description }}
      </div>
    </div>
  </BaseCard>
</template>

<script lang="ts" setup>
import { defineProps, ref, computed, inject,watch } from "vue";

const displayWidth: any = inject(`displayWidth`);
const textBlockHeight=ref()
defineProps([`number`, `title`, `description`]);
let calculated=ref(``)

watch([displayWidth,textBlockHeight],()=>{
  calculated.value= 40+textBlockHeight.value.offsetHeight+`px`
})  


const state = ref(true);
const computedDisplayWidth = computed(() => {
  return displayWidth.value < 700;
});
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 2.5vh;
  transition: 0.3s;
  overflow: hidden;
  .titleBlock {
    display: flex;
    .number {
      font-size: 40px;
      font-weight: bold;
      align-self: center;
    }
    .title {
      padding-left: 10px;
      font-size: 18px;
      align-self: center;
    }
    .button {
      background-color: #f3f3f3;
      margin-left: auto;
      height: 50px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      border: 1px solid black;
      justify-content: center;
      align-items: center;
      align-self: center;
      display: flex;
      .plus {
        font-size: 40px;
        user-select: none;
      }
      .minus::after{
        content:'';
        height: 3.5px;
        width: 16px;
        background-color: black;
        display: block;
      }
    }
  }
  .textBlock {
    height: 0px;
    transition: 0.3s;
    br {
      content: "";
      display: block;
      height: 40px;
    }
    .description {
      border-top: 1px solid black;
      padding-top: 25px;
    }
  }
}
</style>
