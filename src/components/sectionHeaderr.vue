<template>
  <div
    :class="[
      `sectionHeader`,
      computeClass ? `modileSectionHeader` : `desktopSectionHeader`,
    ]"
  >
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
    <div class="description">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps,inject } from "vue";

defineProps([`title`]);
const display:any=inject(`display`)

const computeClass = computed(() => {
  if (display.width.value < 700) {
    return true;
  }
  return false;
});
</script>

<style lang="scss">
.sectionHeader { 
  display: flex;
  align-items: center;
  flex-wrap:wrap;
  .header {
    text-align: center;
    h1 {
      display: inline;
      background-color: #b9ff66;
      box-decoration-break: clone;
      padding: 5px 9px;
      border-radius: 7px;
      font-size: 30px;
    }
  }
  p{
    font-size: 15px;
  }
}

.modileSectionHeader {
  justify-content: space-around;
  .description {
    margin-top: 30px;
    width:100%;
    text-align: center;
  }
}

.desktopSectionHeader {
  .description {
    margin-left: 30px;
    max-width: 50%;
  }
}
</style>
