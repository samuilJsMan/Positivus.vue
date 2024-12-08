<template>
  <nav>
    <div class="mainNav">
      <div @click="sendTo(`about`)" class="navLogo">
        <img
          :src="require(`../assets/Vector.png`)"
          alt="Positivus Logo"
          class="navLogoImage"
        />
        <img
          :src="require(`../assets/Positivus.png`)"
          alt="Positivus Logo"
          class="navLogoText"
        />
      </div>
      <div class="navElement" v-if="!computedDisplayWidth">
        <BaseAnchor
          v-for="anchor in anchorList"
          class="navAnchors"
          theme="black"
          :text="anchor.text"
          :key="anchor.text"
          @click="sendTo(anchor.to)"
        />

        <BaseButton
          color="white"
          @click="sendTo(`contact`)"
          text="Request a quote"
        />
      </div>
      <v-icon
        v-else
        icon="mdi-view-headline"
        color="black"
        size="45"
        v-ripple
        @click="drawer = !drawer"
      ></v-icon>
    </div>
    <transition name="drawer">
      <NavigationDrawer
        v-if="drawer && computedDisplayWidth"
        @sendToEmit="sendTo"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      />
    </transition>
    <transition name="backdrop">
      <div
        class="backdrop"
        v-if="drawer && computedDisplayWidth"
        @click="drawer = false"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      ></div>
    </transition>
  </nav>
</template>

<script lang="ts" setup>
import { computed, inject, ref } from "vue";
import NavigationDrawer from "./NavigationDrawer.vue";
const displayWidth: any = inject(`displayWidth`);
const store: any = inject(`store`);
const router: any = inject(`router`);
const anchorList = store.getters.getNavAnchorList;
const drawer = ref(false);

const computedDisplayWidth = computed(() => {
  return displayWidth.value < 700;
});

function sendTo(to: string) {
  if (router.currentRoute.value.path !== `/home`) {
    router.go(-1);
  }
  drawer.value = false;
  setTimeout(() => {
    store.dispatch(`scrollToAction`, to);
  }, 10);
}
</script>

<style scoped lang="scss">
.mainNav {
  border-top: none;
  border-radius: 0 0 10px 10px;
  background-color: #f3f3f3;
  position: sticky;
  padding: 5px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  .navLogo {
    align-self: center;
    display: flex;
    margin-right: 20px;
    .navLogoImage {
      padding-right: 5px;
      height: 30px;
    }
    .navLogoText {
      height: 50%;
    }
  }
  .navElement {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
  }
}

.backdrop {
  background-color: gray;
  position: fixed;
  height: 100%;
  width: 100%;
  opacity: 0.4;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateY(-30vh);
  opacity: 0;
}
.drawer-enter-active,
.drawer-leave-active {
  transition: 0.35s;
}
.drawer-enter-to,
.drawer-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
.backdrop-enter-active,
.backdrop-leave-active {
  transition: 0.3s;
}
.backdrop-enter-to,
.backdrop-leave-from {
  opacity: 0.4;
}
</style>
