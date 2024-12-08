<template>
  <div class="mainDrawer">
    <BaseButton
      class="element"
      color="white"
      @click="sendTo(`contact`)"
      text="Request a quote"
    />
    <BaseAnchor
      class="element"
      v-for="anchor in anchorList"
      :key="anchor.text"
      theme="black"
      :text="anchor.text"
      @click="sendTo(anchor.to)"
    />
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
  background-color: #f3f3f3;
  border-radius: 0px 0px 30px 30px;
  overflow: hidden;
  z-index: 1;
  padding-top: 10px;
  .element{
    display: block;
    width: fit-content;
    margin: 0 auto 15px auto;
  }
}
</style>
