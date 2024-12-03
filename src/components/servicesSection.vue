<template>
  <section class="flexContainerServices">
    <baseCard
      v-for="card in servicesCardArray"
      :styleProp="card.style"
      :key="card.name"
      :class="[`flexCard`, computeClass ? `flexCardMobile` : `flexCardDesktop`]"
    >
      <div class="title">
        <h1 :style="{ backgroundColor: card.textBack }">
          {{ card.name }}
        </h1>
      </div>
      <img :src="card.img" alt="" class="image" />
      <div class="more">
        <a href="" class="icon"><img :src="card.arrow" alt=""  /></a>
        <baseAnchor
          class="text"
          :theme="card.style == `black` ? `white` : `black`"
          text="Learn More"
          :to="card.to"
        ></baseAnchor>
      </div>
    </baseCard>
  </section>
</template>

<script lang="ts" setup>
import { computed,inject } from "vue";
const store:any=inject(`store`)
const display:any=inject(`display`)

const servicesCardArray = store.getters.getServicesCardArray
const computeClass = computed(() => {
  return display.width.value < 700;
});
</script>

<style lang="scss" scoped>
.flexContainerServices {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 20px; 
  .flexCard{
    display: grid;
    min-height: 233px;
  }
  .more {
    display: flex;
    align-items: center;
  }
  h1 {
    display: inline;
    font-size: 23px;
    border-radius: 7px;
    padding: 5px 9px;
    box-decoration-break: clone;
  }
  .image{
    aspect-ratio: 5/4;
  }
  a{
    display: flex;
  }
}

.flexCardDesktop {
  grid-template-columns: 1fr 1fr;
  width: 48%;
  gap: 4%;
  .image {
    width: 100%;
    grid-row-start: span 2;
    align-self: center;
    object-fit: contain;
  }
  .more {
    align-self: end;
    .icon {
      padding-right: 10px;
    }
  }
}

.flexCardMobile {
  width: 95%;
  gap: 4%;
  .title{
    grid-column-start: span 2;
  }
  .image{
    order: 1;
    align-self:flex-end;
    margin-left: auto;
    width: 70%;
  }
  .text{
    display: none;
  }
  .icon{
    align-self:flex-end;
  }
}
</style>
