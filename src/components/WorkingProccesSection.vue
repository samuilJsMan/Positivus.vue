<template>
  <section >
    <SectionHeader title="Our Working Process" text="Step-by-Step Guide to Achieving Your Business Goals"
      />
    <PopUps
      v-for="popUp in dataArray"
      :key="popUp.number"
      :number="popUp.number"
      :title="popUp.title"
      :description="popUp.description"
    />
  </section>
</template>

<script lang="ts" setup>
import PopUps from "./PopUps.vue";
import { inject } from "vue";

const store:any = inject(`store`);
const dataArray = store.getters.getWorkingProccesDataArray;
</script>

