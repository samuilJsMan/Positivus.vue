<template>
  <section>
    <SectionHeader
      title="Services"
      id="services"
      text="At our digital marketing agency, we offer a range of services to help
      businesses grow and succeed online. These servicesinclude:"
    />
    <div class="containerServices">
      <BaseCard
        v-for="card in servicesCardArray"
        :styleProp="card.style"
        :key="card.name"
        :class="{card:true,mobile:computedDisplayWidth}"
      >
        <div class="titleWrapper">
          <h1 class="title" :style="{ backgroundColor: card.textBack }">
            {{ card.name }}
          </h1>
        </div>
        <img :src="card.img" :alt="card.alt" class="image" />
        <a
          @click="router.push({ path: card.to, query: { name: card.name } })"
          class="more"
        >
          <img class="icon" :src="card.arrow" alt="Arrow" v-ripple />
          <p
            class="text"
            :style="{ color: card.style == `black` ? `white` : `black` }"
          >
            Learn More
          </p>
        </a>
      </BaseCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";
const store: any = inject(`store`);
const displayWidth: any = inject(`displayWidth`);
const router: any = inject(`router`);
const servicesCardArray = store.getters.getServicesCardArray;
const computedDisplayWidth = computed(() => {
  return displayWidth.value < 700;
});
</script>

<style lang="scss" scoped>
.containerServices {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  .card {
    width: 48%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    .more {
      width: fit-content;
      display: flex;
      align-self: end;
      align-items: center;
      .icon {
        padding-right: 10px;
      }
      .text {
        min-width: 72px;
      }
    }
    .title {
      display: inline;
      font-size: 23px;
      border-radius: 7px;
      padding: 5px 9px;
      box-decoration-break: clone;
    }
    .image {
      grid-row-start: span 2;
      width: 100%;
      justify-self: end;
      align-self: center;
    }
  }
  .mobile {
    width: 95%;
    .titleWrapper {
      grid-column-start: span 2;
    }
    .image {
      grid-row-start: span 1;
      order: 1;
    }
    .text {
      display: none;
    }
  }
}
</style>
