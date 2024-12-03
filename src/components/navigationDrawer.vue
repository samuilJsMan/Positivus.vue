<template>
  <div class="mainDrawer">
    <div class="flexContainer">
      <div class="flexElement">
        <baseButton color="white" @click="sendTo(`contact`)"
          >Request a quote</baseButton
        >
      </div>
      <div class="flexElement" v-for="anchor in anchorList" :key="anchor.text">
        <baseAnchor
          class="navAnchors"
          theme="black"
          :text="anchor.text"
          @click="sendTo(anchor.to)"
        ></baseAnchor>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, defineEmits } from "vue";
const emit = defineEmits([`sendToEmit`]);
const store: any = inject(`store`);
const anchorList = store.getters.getNavAnchorList;

function sendTo(to: string | null) {
  emit(`sendToEmit`, to);
}
</script>

<style lang="scss" scoped>
.mainDrawer {
  position: absolute;
  top: 45px;
  width: 100%;
  border-bottom: 1px solid black;
  border-top: none;
  background-color: #F3F3F3;
  border-radius: 0px 0px 30px 30px;
  overflow: hidden;
  z-index: 1;
  height: 30vh;
  .flexContainer {
    padding-top: 10px;
    display: flex;
    margin: 0px 10px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .flexElement {
      text-align: center;
    }
  }
}

</style>
