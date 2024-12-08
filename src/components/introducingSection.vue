<template>
  <section :class="{section:true,mobile:computedDisplayWidth}">
    <p class="title">Navigating the digital landscape for success</p>
    <img class="image" :src="require(`../assets/introduction.png`)" alt="Social Media" />
    <p>
      Our digital marketing agency helps businesses grow and succeed online
      through a range of services including SEO, PPC, social media marketing,
      and content creation.
    </p>
    <BaseButton
      color="black"
      :center="computedDisplayWidth"
      class="button"
      @click="store.dispatch(`scrollToAction`, `contact`)"
      text="Book a consultation"
    />
  </section>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";

const store: any = inject(`store`);
const displayWidth: any = inject(`displayWidth`);

const computedDisplayWidth = computed(() => {
  return displayWidth.value < 700;
});
</script>

<style scoped lang="scss">
.section{
  display: grid;
  gap: 25px 4%;
  grid-template-columns: 48% 48%;
  align-items: center;
  .image {
    object-fit: contain;
    width: 100%;
    grid-row-start: span 3;
  }
  .title{
    font-size: 45px;
  }
}

.mobile {
  grid-template-columns: 1fr;
  .title {
    font-size: 28.666px;
  }
  .button {
    width: 100%;
  }
  .image{
    grid-row-start: span 1;
  }
}
</style>
