<template>
  <v-app :class="['main',{bigScreen: !displayFactor }]">
    <header  style="position:sticky; top: 0; z-index: 2000;">
      <HeaderNav></HeaderNav> 
    </header>
    <main id="goToContainer">
      <router-view >
      </router-view>
    </main>
    <footer>
      <TheFooter></TheFooter>
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import HeaderNav from "./components/HeaderNav.vue";
import TheFooter from "./components/TheFooter.vue";
import { useDisplay,DisplayInstance } from "vuetify";
import { computed, provide} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const display:DisplayInstance = useDisplay();
const router=useRouter()

provide(`display`, display);
provide(`store`, store)
provide(`router`,router)

const displayFactor = computed(() => {
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
  padding: 20px 7px;
  overflow: hidden;
  min-height: 100vh;
}

</style>
