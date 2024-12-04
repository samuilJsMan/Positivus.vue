<template>
  <div :class="[`brandList`,displayFactor ?  `brandListMobile`: `brandListDesktop`]">
    <div class="spacer"></div>
    <div v-for="logo in logoArray" class="logoWrapper" :key="logo.alt">
      <img class="logo" :src="logo.src" :alt="logo.alt" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed,inject  } from 'vue'

const display:any=inject(`display`)
const store:any=inject(`store`)

const logoArray=computed(()=>{
  return store.getters.getCompaniesLogo
})

const displayFactor = computed(() => {
  return display.width.value < 700
});

</script>

<style lang="scss">
.brandList {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
  .spacer{
    width: 14.285%;
  }
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
