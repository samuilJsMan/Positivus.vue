<template>
  <div class="social"> 
    <a v-for="logo in logoArray" :href="logo.href" :key="logo.id" target="_blank">
      <img :src="logo.src" :alt="logo.alt"/>
    </a>
  </div>

</template>

<script lang="ts" setup>
import {inject} from 'vue'
const store:any=inject(`store`)
const logoArray=store.getters.getLogoArray
</script>

<style lang="scss" scoped>
.social {
  width: fit-content;
  display: flex;
  a {
    display: block;
    height: 24px;
  }
  img {
    height: 24px;
  }
}

.social :nth-child(2){
  img{
    padding:0 10px;
  }
} 
</style>
