<template>
  <section :class="computeClass ? `mobileFlex` : `desktopFlex`">
    <div class="sectionElement">
      <p class="title">Navigating the digital landscape for success</p>
    </div>
    <div class="sectionElement">
      <img
        :src="require(`../assets/Screenshot 2024-11-28 185106.png`)"
        alt="no photo("
      />
    </div>
    <div class="sectionElement">
      <p class="text">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <baseButton color="black" :center="computeClass">
        Book a consultation</baseButton
      >
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";
import { computed } from "vue";
const display = useDisplay();

const computeClass = computed(() => {
  if (display.width.value < 700) {
    return true;
  }
  return false;
});
</script>

<style scoped lang="scss">
.sectionElement:nth-child(1) {
  display: flex;
  align-items: center;
}
.sectionElement:nth-child(3) {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.mobileFlex {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .sectionElement {
    width: 100%;
    .title{
      font-size: 28.666px;
    }
  }
}

.desktopFlex {
  display: grid;
  grid-template-columns: 48% 48%;
  grid-template-rows: auto auto;
  grid-gap: 0 3%;
  .title{
    font-size: 45px;
  }
  .sectionElement:nth-child(2) {
    grid-row-start: span 2;
  }
}

img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.text {
  display: inline-block;
  padding-bottom: 15px;
}
</style>
