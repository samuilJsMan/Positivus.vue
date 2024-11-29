<template>
  <section :class="[`brandList`,mobile ? `brandListDesktop` : `brandListMobile`]">
    <div class="spacer" style="width: 14.285%;"></div>
    <div class="logoWrapper">
      <img class="logo" :src="require(`../assets/Company logo1.png`)" alt="" />
    </div>
    <div class="logoWrapper">
      <img class="logo" :src="require(`../assets/Company logo2.png`)" alt="" />
    </div>
    <div class="logoWrapper">
      <img class="logo" :src="require(`../assets/Company logo3.png`)" alt="" />
    </div>
    <div class="logoWrapper">
      <img class="logo" :src="require(`../assets/Company logo4.png`)" alt="" />
    </div>
    <div class="logoWrapper">
      <img class="logo" :src="require(`../assets/Company logo5.png`)" alt="" />
    </div>
    <div class="logoWrapper">
      <img class="logo" :src="require(`../assets/Company logo6.png`)" alt="" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

const display=useDisplay()

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
  margin-top: 50px;
  justify-content: space-between;
  .spacer{
    display: none;
  }
}

.brandListMobile {
  width: 120%;
  min-width: 440px;
  animation: 10s linear 0s infinite logoAnim;
  margin-top: 35px;
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
