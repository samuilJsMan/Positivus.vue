<template>
  <div class="mainWrapper">
    <img :src="require(`../assets/Emoji.png`)" alt="">
    <div class="text">UH OH</div>  
    <div class="subtext">Look like "{{ queryText }}" 
      <br>
      part still not created</div>
    <div class="subtext">Sadly...</div>
    <div class="subtext">Come back in near future</div>
    <BaseButton style="font-size: 20px;" color="green" :center="true" @click="router.go(-1)" text="Back to Page"/>
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
    text-align: center;
    margin-bottom: 2vh;
    >*{
      margin-top: 2vh;
    }
    .text{
      font-size: 60px;
    }
    .subtext{
      text-align: center;
      font-size:40px 
    }
  }
  
</style>