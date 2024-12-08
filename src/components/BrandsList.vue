<template>
  <div
    :class="{brandList:true, mobile:computedDisplayWidth}"
  >
    <div v-for="logo in logoArray" class="logoWrapper" :key="logo.alt">
      <a class="anchor" :href="logo.href" target="_blank">
        <img class="logo" :src="logo.src" :alt="logo.alt" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";

const displayWidth: any = inject(`displayWidth`);
const store: any = inject(`store`);

const logoArray = computed(() => {
  return store.getters.getCompaniesLogo;
});

const computedDisplayWidth = computed(() => {
  return displayWidth.value < 700;
});
</script>

<style lang="scss" scoped>
.brandList {
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .logo {
    display: block;
    width: 100px;
    filter: grayscale(1);
  }
}

.mobile {
  width: 120%;
  justify-content: flex-start;
  min-width: 440px;
  animation: 10s linear 0s infinite logoAnim;
  .logoWrapper {
    width: 28.57%;
    .anchor {
      display: block;
      width: fit-content;
      margin: 0 auto;
    }
  }
  .logoWrapper:nth-child(1) {
    margin-left: 14.285%;
  }
  .logoWrapper:nth-child(4),
  .logoWrapper:nth-child(6){
    order: 1;
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
