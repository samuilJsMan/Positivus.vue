<template>
  <section>
    <baseCard class="card" styleProp="white">
      <div class="textSection section">
        <h1>Let’s make things happen</h1>
        <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <baseButton color="black" style="font-size: 16px;">Get your free proposal</baseButton>
      </div>
      <div class="imgSection section" v-if="!computeClass">
        <img :src="require(`../assets/proposal.png`)" alt="">
      </div>
    </baseCard>
  </section>
</template>

<script lang="ts" setup>
import { computed,inject  } from 'vue'

const display:any=inject(`display`)

const computeClass = computed(() => {
  return display.width.value < 700;
});
</script>

<style lang="scss" scoped>
  .card{
    border: none;
    box-shadow: none;
    display: flex;
    gap: 10%;
    .textSection{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 25px 0;
      h1{
        font-size: 23px;
      }
      p{
        font-size: 15px;
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
</style>