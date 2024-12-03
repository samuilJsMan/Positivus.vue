<template>
  <baseCard
    :styleProp="state ? `white` : `green`"
    class="flexCard"
    :class="desktop ? `mobileFonts` : `desktopFonts`"
  >
    <div class="titleBlock">
      <div class="number">0{{ number }}</div>
      <h1 class="title">
        {{ title }}
      </h1>
      <div class="button" @click="state = !state" v-ripple>
        <p>{{ state ? `+` : ` ̶` }}</p>
      </div>
    </div>
      <div class="textBlock" :style="{height:!state?calculated:0}">
        <br />
        <div ref="textBlockHeight">
          <div class="description" >
            {{ description }}
          </div>
        </div>
      </div>
  </baseCard>
</template>

<script lang="ts" setup>
import { defineProps, ref, computed, inject,watch } from "vue";

const display: any = inject(`display`);
const textBlockHeight=ref()
defineProps([`number`, `title`, `description`]);
let calculated=ref(``)

watch([display.width,textBlockHeight],()=>{
  calculated.value= 40+textBlockHeight.value.offsetHeight+`px`
})  


const state = ref(true);
const desktop = computed(() => {
  return display.width.value < 700;
});
</script>

<style lang="scss" scoped>
.flexCard {
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  overflow: hidden;
  .titleBlock {
    display: flex;
    .number {
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
      height: 60px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      border: 1px solid black;
      justify-content: center;
      align-self: center;
      display: flex;
      p {
        font-size: 40px;
        user-select: none;
      }
    }
  }
  .textBlock {
    height: 0px;
    transition: 0.3s;
    .description {
      border-top: 1px solid black;
      padding-top: 25px;
    }
  }
}

.mobileFonts {
  padding: 30px;
  .number {
    font-size: 30px;
  }
  .title {
    font-size: 15px;
  }
  p {
    font-size: 30px;
  }
}

.desktopFonts {
  padding: 40px;
  .number {
    font-size: 40px;
  }

  .title {
    font-size: 20px;
  }

  p {
    font-size: 40px;
  }
}

br {
  content: "";
  display: block;
  height: 40px;
}
</style>
