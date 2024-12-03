<template>
  <div :class="[`brandList`,mobile ? `brandListDesktop` : `brandListMobile`]">
    <div class="spacer" style="width: 14.285%;"></div>
    <div v-for="n in 6" class="logoWrapper" :key="n">
      <img class="logo" :src="require(`../assets/Company logo${n}.png`)" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed,inject  } from 'vue'

const display:any=inject(`display`)

const mobile = computed(() => {
  if (display.width.value < 700) {
    return false;
  }
  return true;
});

</script>

<style lang="scss">
.brandList {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
  .logo {
    display: block;
    width: 100px;
    margin: 0 auto;
    filter: grayscale(1);
  }
}

.brandListDesktop {
  width: 100%;
  justify-content: space-between;
  .spacer{
    display: none;
  }
}

.brandListMobile {
  width: 120%;
  min-width: 440px;
  animation: 10s linear 0s infinite logoAnim;
  .logoWrapper {
    width: 28.57%;
  }
  .logoWrapper:nth-child(6){
    order: 1;
  }
  .logoWrapper:nth-child(5){
    order: 2;
  }
  .logoWrapper:nth-child(7){
    order: 3;
  }
}

@keyframes logoAnim {
  0% {
    transform: translateX(min(-15%, -85px));
  }
  50% {
    transform: translateX(-3%);
  }
  100% {
    transform: translateX(min(-15%, -85px));
  }
}
</style>
