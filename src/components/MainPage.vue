<template>
  <div class="mainSectionContainer">
    <IntroducingSection id="about"/>
    <BrandsList/>
    <ServicesSection/>
    <FreeProposal/>
    <StudiesSwiper/>
    <WorkingProccesSection/>
    <TeamsSection/>
    <TestimonialsSection/>
    <ContactSection/>
  </div>
</template>

<script lang="ts" setup>
import IntroducingSection from "./IntroducingSection.vue";
import BrandsList from "./BrandsList.vue";
import ServicesSection from "./ServicesSection.vue";
import FreeProposal from "./FreeProposal.vue";
import StudiesSwiper from "./StudiesSwiper.vue";
import WorkingProccesSection from "./WorkingProccesSection.vue";
import TeamsSection from "./TeamsSection.vue";
import TestimonialsSection from "./TestimonialsSection.vue";
import ContactSection from "./ContactSection.vue";
</script>


<style lang="scss" scoped	>
.mainSectionContainer {
  overflow: hidden;
  padding: 20px 7px;
  > *{
    margin-bottom: 120px;
  }
}

</style>