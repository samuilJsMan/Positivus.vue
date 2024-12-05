<template>
  <nav>
    <div class="mainNav">
      <div class="navFlexContainer">
        <div @click="sendTo(`about`)" class="navFlexElement">
          <img
            :src="require(`../assets/Vector.png`)"
            alt="Positivus Logo"
            class="navLogo"
          />
          <img
            :src="require(`../assets/Positivus.png`)"
            alt="Positivus Logo"
            class="navLogo"
          />
        </div>
        <div class="navFlexElement" v-if="!displayFactor">
          <baseAnchor
            v-for="anchor in anchorList"
            class="navAnchors"
            theme="black"
            :text="anchor.text"
            :key="anchor.text"
            @click="sendTo(anchor.to)"
          ></baseAnchor>

          <baseButton color="white" @click="sendTo(`contact`)"
            >Request a quote</baseButton
          >
        </div>
        <div class="mobileFlexElement" v-else>
          <v-icon
            icon="mdi-view-headline"
            color="black"
            size="45"
            v-ripple
            @click="drawer = !drawer"
          ></v-icon>
        </div>
      </div>
    </div>
    <transition name="drawer">
      <NavigationDrawer
        v-if="drawer&&displayFactor"
        class="drawer"
        @sendToEmit="sendTo"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      ></NavigationDrawer>
    </transition>
    <transition name="backdrop">
      <div
        class="backdrop"
        v-if="drawer&&displayFactor"
        @click="drawer=false"
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
const display: any = inject(`display`);
const store: any = inject(`store`);
const router:any =inject(`router`)
const anchorList = store.getters.getNavAnchorList;
const drawer = ref(false);

const displayFactor = computed(() => {
  return display.width.value < 700;
});

function sendTo(to: string) {
  if(router.currentRoute.value.path!==`/home`){
    router.go(-1)
  }
    drawer.value=false
    setTimeout(()=>{
      store.dispatch(`scrollToAction`, to);
    },10) 
  
}
</script>

<style scoped>
.mainNav {
  border-top:none;
  border-radius: 0 0 10px 10px;
  background-color: #F3F3F3;
  position: sticky;
  height: fit-content;
  padding: 5px;
  z-index: 2;
}
.navFlexContainer {
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.navFlexElement {
  align-self: center;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
}
.backdrop {
  background-color: gray;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.4;
}
.navFlexElement:nth-child(1) {
  justify-content: start;
}
.navFlexElement:nth-child(2) {
  justify-content: space-between;
  width: 70%;
}

.navLogo {
  height: 50%;
}
.navLogo:nth-child(1) {
  padding-right: 5px;
  height: 30px;
}
.mobileNavImg {
  max-width: 100%;
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
