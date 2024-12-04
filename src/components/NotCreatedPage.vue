<template>
  <div class="mainWrapper">
    <img :src="require(`../assets/Emoji.png`)" alt="">
    <p class="text">UH OH</p>  
    <p class="subtext">Look like "{{ queryText }}" 
      <br>
      part still not created</p>
    <p class="subtext">Sadly...</p>
    <p class="subtext">Come back in near future</p>
    <BaseButton style="font-size: 20px;" color="green" :center="true" @click="router.go(-1)"> Back to Page</BaseButton>
  </div>
</template>

<script lang="ts" setup>
import { onMounted,inject,computed } from 'vue';
const router:any =inject(`router`)
const queryText=computed(()=>{
  return router.currentRoute.value.query.name
})
onMounted(()=>{
  window.scrollTo({top:0,behavior:'smooth'});
})
</script>

<style lang="scss" scoped>
  .mainWrapper{
    min-height:calc(100vh - 312px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .text{
    font-size: 60px;
  }
  .subtext{
    text-align: center;
    font-size:40px 
  }
</style>