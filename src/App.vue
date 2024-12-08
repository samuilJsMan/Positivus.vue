<template>
  <v-app :class="{ bigScreen: !displayWidth }">
    <header style="position: sticky; top: 0; z-index: 2000">
      <HeaderNav />
    </header>

    <main id="goToContainer">
      <router-view />
    </main>

    <footer>
      <TheFooter />
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import HeaderNav from "./components/HeaderNav.vue";
import TheFooter from "./components/TheFooter.vue";
import { useDisplay, DisplayInstance } from "vuetify";
import { computed, provide } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const display: DisplayInstance = useDisplay();
const router = useRouter();

provide(`displayWidth`, display.width);
provide(`store`, store);
provide(`router`, router);

const displayWidth = computed(() => {
  return display.width.value < 1000;
});
</script>

<style lang="scss">

* {
  font-family: "Space Grotesk";
  font-size: 13.33px;
}

.bigScreen {
  max-width: 1000px;
  margin: 0 auto;
}



</style>
