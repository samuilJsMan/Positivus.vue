<template>
  <section class="flexWrapper" ref="wrapper">
    <div class="cardWrapper" >
      <baseCard
        styleProp="white"
        v-for="card in cardData"
        :key="card.name"
        class="cardItself"
        :style="{width:desktop}"
      >
        <div class="titleSide">
          <div class="photo">
            <img :src="card.image" alt=""/>
          </div>
          <div class="introducrion">
            <a href="#" class="linkedINlogo">
              <img
                
                :src="require(`../assets/SocialIcon.png`)"
                alt=""
              />
            </a>
            <p class="name">{{ card.name }}</p>
            <p class="work">{{ card.work }}</p>
          </div>
        </div>
        <div class="descriptionSide">
          <p class="description">{{ card.descrription }}</p>
        </div>
      </baseCard>
    </div>
    <div class="buttonWrapper">
      <baseButton color="black" :center="false" class="button" ref="button" :style="{minWidth:button}"> See all team </baseButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref,watch,inject } from "vue";
const store:any=inject(`store`)
const display:any=inject(`display`)
const cardData = store.getters.getTeamCardData;
const wrapper=ref()
const button=ref()
const desktop=ref(`98%`)

watch([display.width,wrapper],()=>{
  if(wrapper.value.clientWidth<630){
    desktop.value=`98%`
    button.value=`100%`
  }else if(wrapper.value.clientWidth<980){
    desktop.value=`49%`
    button.value=`0`
  }else if(wrapper.value.clientWidth>=980){
    desktop.value=`32.5%`
    button.value=`0`
  }
})
</script>

<style lang="scss" scoped>
.flexWrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
  .cardWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px 0;
    .cardItself {
      .titleSide {
        display: flex;
        padding-bottom: 20px;
        height: 50%;
        .photo {
          display: flex;
          align-items: flex-end;
          aspect-ratio: 1/1;
          img {
            width: 100%;
          }
        }
        .introducrion {
          width: 90%;
          height: 100%;
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .linkedINlogo {
            align-self: flex-end;
            border-radius: 50%;
          }
          .name{
            padding-left: 10px;
            font-size: 15px;
            font-weight: bold;
          }
          .work{
            padding-left: 10px;
          }
        }
      }
      .descriptionSide {
        padding-top: 20px;
        border-top: 1px solid black;
      }
    }
  }
  .buttonWrapper{
  display: flex;
  justify-content: flex-end;
  .button{
    padding: 0 60px ;
  }
}
}

</style>
