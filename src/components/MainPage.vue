<template>
  <div class="mainSectionVrapper">
    <IntroducingSection id="about"></IntroducingSection>
    <BrandsList></BrandsList>
    <SectionHeader
      :title="titleDataArray[0].title"
      :id="titleDataArray[0].id"
      >{{ titleDataArray[0].text }}</SectionHeader
    >
    <ServicesSection></ServicesSection>
    <FreeProposal></FreeProposal>
    <SectionHeader
      :title="titleDataArray[1].title"
      :id="titleDataArray[1].id"
      >{{ titleDataArray[1].text }}</SectionHeader
    >
    <StudiesSwiper></StudiesSwiper>
    <SectionHeader
      :title="titleDataArray[2].title"
      :id="titleDataArray[2].id"
      >{{ titleDataArray[2].text }}</SectionHeader
    >
    <WorkingProccesSection></WorkingProccesSection>
    <SectionHeader
      :title="titleDataArray[3].title"
      :id="titleDataArray[3].id"
      >{{ titleDataArray[3].text }}</SectionHeader
    >
    <TeamsSection></TeamsSection>
    <SectionHeader
      :title="titleDataArray[4].title"
      :id="titleDataArray[4].id"
      >{{ titleDataArray[4].text }}</SectionHeader
    >
    <TestimonialsSection></TestimonialsSection>
    <SectionHeader
      :title="titleDataArray[5].title"
      :id="titleDataArray[5].id"
      >{{ titleDataArray[5].text }}</SectionHeader
    >
    <ContactSection></ContactSection>
  </div>
</template>

<script lang="ts" setup>
import IntroducingSection from "./IntroducingSection.vue";
import BrandsList from "./BrandsList.vue";
import SectionHeader from "../layouts/SectionHeader.vue";
import ServicesSection from "./ServicesSection.vue";
import FreeProposal from "./FreeProposal.vue";
import StudiesSwiper from "./StudiesSwiper.vue";
import WorkingProccesSection from "./WorkingProccesSection.vue";
import TeamsSection from "./TeamsSection.vue";
import TestimonialsSection from "./TestimonialsSection.vue";
import ContactSection from "./ContactSection.vue";
import { inject } from "vue";
const store: any = inject(`store`);
const titleDataArray = store.getters.getTitlesDataArray;
</script>


<style lang="scss" scoped	>
	.mainSectionVrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 120px;
  padding: 20px 7px;
  overflow: hidden;
  min-height: 100vh;
}
</style>