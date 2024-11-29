<template>
  <v-app :class="{main:true,bigScreen:!mobile}">
    <theNav></theNav>
    <div class="mainSectionVrapper">
      <introducingSection></introducingSection>
      <brandList></brandList>
      <sectionHeaderr title="Our Working Process ">Step-by-Step Guide to Achieving Your Business Goals</sectionHeaderr>
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import theNav from './components/theNav.vue';
import introducingSection from './components/introducingSection.vue';
import brandList from './components/brandList.vue';
import sectionHeaderr from './components/sectionHeaderr.vue';
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

const display=useDisplay()

const mobile=computed(()=>{
  if(display.mdAndDown.value){
    return true
  }else{
    return false
  }
})

</script>

<style lang="scss">
body, html {
overflow-x: hidden;
}

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
*{
  font-family: "Space Grotesk";
  font-size: 13.33px;
}

.main{
  background-color: white;
}
.bigScreen{
  max-width: min(75%, 1000px);
  margin: 0 auto;
}
.mainSectionVrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 1% 0 1%;
}
</style>
