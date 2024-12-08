<template>
  <section ref="wrapper">
    <SectionHeader
      title="Team"
      id="team"
      text="Meet the skilled and experienced team behind our successful digital marketing strategies"
    />
    <div :class="[`container`,columnsQuantity]">
      <BaseCard
        styleProp="white"
        v-for="card in cardData"
        :key="card.name"
      >
        <div class="title">
          <img class="photo" :src="card.image" :alt="card.alt" />
          <div class="introducrion">
            <a
              href="https://www.linkedin.com/"
              class="linkedINlogo"
              target="_blank"
            >
              <img
                :src="require(`../assets/SocialIcon.png`)"
                alt="LinkedIn icon"
              />
            </a>
            <div class="info">
              <p class="text name">{{ card.name }}</p>
              <p class="text">{{ card.work }}</p>
            </div>
          </div>
        </div>
        <div class="description">
         {{ card.descrription }}
        </div>
      </BaseCard>
    </div>
    <BaseButton
      @click="router.push({ path: `/Team`, query: { name: `Team` } })"
      color="black"
      :center="false"
      class="button"
      ref="button"
      :style="{ minWidth: columnsQuantity===`containerSmall`?`100%`:`0`}"
      text="See all team"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref, watch, inject } from "vue";
const store: any = inject(`store`);
const displayWidth: any = inject(`displayWidth`);
const router: any = inject(`router`);
const cardData = store.getters.getTeamCardData;
const wrapper = ref();
const columnsQuantity = ref();

watch([displayWidth, wrapper], () => {
  if (wrapper.value.clientWidth < 630) {
    columnsQuantity.value = `containerSmall`;
  } else if (wrapper.value.clientWidth < 980) {
    columnsQuantity.value = `containerMedium`;
  } else{
    columnsQuantity.value = `containerBig`;
  }
});
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
  .title {
    display: flex;
    padding-bottom: 20px;
    .photo {
      align-self: center;
    }
    .introducrion {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .linkedINlogo {
        margin-left: auto;
        border-radius: 50%;
        font-size: 0px;
      }
      .info {
        padding-left: 10px;
        font-size: 15px;
        .name {
          font-weight: bold;
        }
        .text{
          margin: 0;
        }
      }
    }
  }
  .description {
    padding-top: 20px;
    border-top: 1px solid black;
  }
}
.button {
  padding: 0 60px;
  display: block;
  margin-left: auto;
}
.containerBig{
  grid-template-columns: 1fr 1fr 1fr;
}
.containerMedium{
  grid-template-columns: 1fr 1fr;
}
.containerSmall{
  grid-template-columns: 1fr;
}
</style>
