<template>
  <section class="flexWrapper">
    <popUps
      v-for="popUp in dataArray"
      :key="popUp.number"
      :number="popUp.number"
      :title="popUp.title"
      :description="popUp.description"
    ></popUps>
  </section>
</template>

<script lang="ts" setup>
import popUps from "./popUps.vue";
import { inject } from "vue";
const store:any=inject(`store`)
const dataArray = store.getters.getWorkingProccesDataArray
</script>

<style lang="scss" scoped>
.flexWrapper{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
