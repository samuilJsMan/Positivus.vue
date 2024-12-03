<template>
  <v-app :class="{ main: true, bigScreen: !mobile }">
    <header  style="position:sticky; top: 0; z-index: 2000;">
      <theNav></theNav> 
    </header>
    <main class="mainSectionVrapper" id="goToContainer">
      <introducingSection id="about"></introducingSection>
      <brandList></brandList>
      <sectionHeaderr :title="titleDataArray[0].title" :id="titleDataArray[0].id">{{titleDataArray[0].text}}</sectionHeaderr> 
      <servicesSection></servicesSection>
      <freeProposal></freeProposal>
      <sectionHeaderr :title="titleDataArray[1].title" :id="titleDataArray[1].id">{{titleDataArray[1].text}}</sectionHeaderr>
      <studiesSwiper></studiesSwiper>
      <sectionHeaderr :title="titleDataArray[2].title" :id="titleDataArray[2].id">{{titleDataArray[2].text}}</sectionHeaderr>
      <workingProccesPopUps></workingProccesPopUps>
      <sectionHeaderr :title="titleDataArray[3].title" :id="titleDataArray[3].id">{{titleDataArray[3].text}}</sectionHeaderr>
      <teansSection></teansSection>
      <sectionHeaderr :title="titleDataArray[4].title" :id="titleDataArray[4].id">{{titleDataArray[4].text}}</sectionHeaderr>
      <testimonialsSection></testimonialsSection>
      <sectionHeaderr :title="titleDataArray[5].title" :id="titleDataArray[5].id">{{titleDataArray[5].text}}</sectionHeaderr>
      <contactSection></contactSection>
    </main>
    <footer>
      <theFooter></theFooter>
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import theNav from "./components/theNav.vue";
import introducingSection from "./components/introducingSection.vue";
import brandList from "./components/brandList.vue";
import sectionHeaderr from "./components/sectionHeaderr.vue";
import servicesSection from "./components/servicesSection.vue";
import freeProposal from "./components/freeProposal.vue";
import studiesSwiper from "./components/studiesSwiper.vue";
import workingProccesPopUps from "./components/workingProccesPopUps.vue";
import teansSection from "./components/teansSection.vue";
import testimonialsSection from "./components/testimonialsSection.vue";
import contactSection from "./components/contactSection.vue";
import theFooter from "./components/theFooter.vue";
import { useDisplay } from "vuetify";
import { computed, provide } from "vue";
import { useStore  } from "vuex";

const store = useStore();
const display: any = useDisplay();
const titleDataArray = store.getters.getTitlesDataArray;
provide(`display`, display);
provide(`store`, store);

const mobile = computed(() => {
  return display.width.value < 1000;
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap");
* {
  font-family: "Space Grotesk";
  font-size: 13.33px;
}

.main {
  position: relative;
  background-color: white;
}
.bigScreen {
  max-width: 1000px;
  margin: 0 auto;
}
.mainSectionVrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 120px;
  padding: 20px 1% 0 1%;
  overflow: hidden;
}
</style>
