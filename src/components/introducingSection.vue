<template>
  <section :class="[`sectionFlex`, computeClass ? `mobileFlex` : `desktopFlex`]">
    <div class="sectionElement">
      <p class="title">Navigating the digital landscape for success</p>
    </div>
    <div class="sectionElement">
      <img
        :src="require(`../assets/introduction.png`)"
        alt="no photo("
      />
    </div>
    <div class="sectionElement">
      <p class="text">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
    </div>
    <div class="sectionElement">  
      <baseButton color="black" :center="computeClass">Book a consultation</baseButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed,inject  } from 'vue'

const display:any=inject(`display`)

const computeClass = computed(() => {
  return display.width.value < 700
});
</script>

<style scoped lang="scss">
.sectionFlex{
  gap: 2% 4% ;
  .sectionElement{
    display: flex;
    align-items: center;
  }
  img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}
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
  align-items: center;
  .title{
    font-size: 45px;
  }
  .sectionElement:nth-child(2) {
    grid-row-start: span 3;
  }
}



</style>
