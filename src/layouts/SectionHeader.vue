<template>
  <div
    :class="[`sectionHeader`,{modileSectionHeader: computedDisplayWidth},]"
  >
    <div class="header">
      <h1 class="title">{{ title }}</h1>
    </div>
    <p class="description">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps,inject } from "vue";

defineProps([`title`,`text`]);
const displayWidth:any=inject(`displayWidth`)

const computedDisplayWidth = computed(() => {
  return displayWidth.value < 700
});
</script>

<style lang="scss">
.sectionHeader { 
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  .header {
    text-wrap: nowrap;
    text-align: center;
    .title {
      display: inline;
      background-color: #b9ff66;
      box-decoration-break: clone;
      padding: 5px 9px;
      border-radius: 7px;
      font-size: 30px;
    }
  }
  .description {
    margin: 0 0 0 30px;
    max-width: 50%;
    font-size: 15px;
  }
}

.modileSectionHeader {
  display: block;
  .description {
    margin: 30px 0 0 0;
    max-width: 100%;
    text-align: center;
  }
}

</style>
