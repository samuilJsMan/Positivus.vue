<template>
  <section>
    <BaseCard class="card" styleProp="white">
      <div class="textSection">
        <h1 class="header">Let’s make things happen</h1>
        <p class="text">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <BaseButton :class="[`button`,{buttonMobile:computedDisplayWidth}]" color="black" @click="sendTo(`contact`)" text="Get your free proposal"/>
      </div>
      <div class="imgSection" v-if="!computedDisplayWidth">
        <img :src="require(`../assets/proposal.png`)" alt="Magic">
      </div>
    </BaseCard>
  </section>
</template>

<script lang="ts" setup>
import { computed,inject  } from 'vue'

const displayWidth:any=inject(`displayWidth`)
const store:any=inject(`store`)

function sendTo(to: string | null) {
  store.dispatch(`scrollToAction`, to);
}
const computedDisplayWidth = computed(() => {
  return displayWidth.value < 700;
});
</script>

<style lang="scss" scoped>
  .card{
    border: none !important;
    box-shadow: none !important;
    display: flex;
    gap: 10%;
    .textSection{
      flex: 1;
      gap: 25px 0;
      .header{
        font-size: 23px;
        margin-bottom: 35px;
      }
      .text{
        font-size: 15px;
        margin-bottom: 25px;
      }
      .button{
        font-size: 16px;
      }
    }
    .imgSection{
      flex: 1;
      position: relative;
      img{
        position: absolute;
        top:50%;
        left:50%;
        transform: scale(1.5) translate(-33.33%, -33.333%);
        height: 100%;
      }
    }
  }
  .buttonMobile{
    width: 100%;
  }
</style>