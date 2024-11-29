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
import { useDisplay } from "vuetify";
import { computed, defineProps } from "vue";

const props = defineProps([`title`]);
const display = useDisplay();

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
  .header {
    width: fit-content;
    h1 {
      display: inline;
      text-align: center;
      background-color: #b9ff66;
      box-decoration-break: clone;
      padding: 5px 9px;
      border-radius: 7px;
      font-size: 26.6667px;
    }
  }
}

.modileSectionHeader {
  margin-top: 60px;
  margin-bottom: 30px;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  .header{
    max-width: 240px;
  }
  .description {
    margin-top: 30px;
    width:100%;
    text-align: center;
  }
}

.desktopSectionHeader {
  margin-top: 80px;
  margin-bottom: 60px;
  .header{
    height: fit-content;
  }
  .description {
    margin-left: 30px;
    overflow: hidden;
    max-width: 50%;
    // display: -webkit-box;
    // -webkit-line-clamp: 2;
    // line-clamp: 2;
    // -webkit-box-orient: vertical;
    //width: 50%;
    //min-width: 500px;
  }
}
</style>
