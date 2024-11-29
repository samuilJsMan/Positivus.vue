<template>
  <nav>
    <div class="mainNav">
      <div class="navFlexContainer">
        <div class="navFlexElement">
          <img
            :src="require(`../assets/Vector.png`)"
            alt="empty"
            class="navLogo"
          />
          <img
            :src="require(`../assets/Positivus.png`)"
            alt="empty"
            class="navLogo"
          />
        </div>
        <div class="navFlexElement" v-if="mobile">
          <div></div>
          <div></div>
          <div></div>
          <baseAnchor
            class="navAnchors"
            theme="black"
            text="About us"
          ></baseAnchor>
          <baseAnchor
            class="navAnchors"
            theme="black"
            text="Services"
          ></baseAnchor>
          <baseAnchor
            class="navAnchors"
            theme="black"
            text="Use Cases"
          ></baseAnchor>
          <baseAnchor
            class="navAnchors"
            theme="black"
            text="Pricing"
          ></baseAnchor>
          <baseAnchor
            class="navAnchors"
            theme="black"
            text="Blog"
          ></baseAnchor>
          <baseButton color="white">Request a quote</baseButton>
        </div>
        <div class="mobileFlexElement" v-else>
          <v-icon
            icon="mdi-view-headline"
            color="black"
            size="45"
            v-ripple
            @click="drawer = true"
          ></v-icon>
        </div>
        <v-navigation-drawer
          v-model="drawer"
          temporary
          location="right"
          rail
          rail-width="200"
        >
          <v-list-item>
            <img
              :src="require(`../assets/Positivus.png`)"
              alt="empty"
              class="mobileNavImg"
            />
          </v-list-item>
          <v-divider></v-divider>
          <v-list density="compact" nav>
            <v-list-item>
              <baseButton color="white" @click="sendTo()">Request a quote</baseButton>
            </v-list-item>
            <v-list-item
              v-ripple
              prepend-icon="mdi-view-dashboard"
              title="About us"
              @click="sendTo()"
            >
            </v-list-item>
            <v-list-item
              v-ripple
              prepend-icon="mdi-book"
              title="Services"
              @click="sendTo()"
            >
            </v-list-item>
            <v-list-item
              v-ripple
              prepend-icon="mdi-arrow-up-bold-box-outline"
              title="Use Cases"
              @click="sendTo()"
            >
            </v-list-item>
            <v-list-item
              v-ripple
              prepend-icon="mdi-store"
              title="Pricing"
              @click="sendTo()"
            >
            </v-list-item>
            <v-list-item
              v-ripple
              prepend-icon="mdi-forum"
              title="Blog"
              @click="sendTo()"
            >
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";
import { computed, defineModel } from "vue";

const display = useDisplay();
const drawer = defineModel({ default: false });
const mobile = computed(() => {
  if (display.width.value < 700) {
    return false;
  }
  return true;
});

function sendTo(){
  drawer.value=false
}
</script>

<style scoped>
.mainNav {
  height: 45px;
  margin: 5px;
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

.navFlexElement:nth-child(1) {
  justify-content: start;
}
.navFlexElement:nth-child(2) {
  flex: 15;
}
.navFlexElement:nth-child(2) {
  justify-content: space-between;
}
.navLogo {
  height: 50%;
}
.navLogo:nth-child(1) {
  margin: 3%;
}
.mobileNavImg {
  max-width: 100%;
}
</style>
