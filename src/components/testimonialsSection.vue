<template>
  <section>
    <baseCard styleProp="black" class="card">
      <div class="scrollableWrapper" ref="container">
        <div class="mainWrapper" ref="scrollableField">
          <div class="innerFlex" v-for="n in 5" :key="n" :id="`${n}`">
            <dialogBubble>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </dialogBubble>
            <div class="description">
              <p class="name">John Smith</p>
              <p class="work">Marketing Director at XYZ Corp</p>
            </div>
          </div>
        </div>
      </div>
      <div class="buttonsRow">
        <div
          class="left arrow"
          @click="intoView > 0 ? intoView-- : null"
          v-ripple
          ref="leftArrow"
        >
          <img :src="require(`../assets/right-arrow.png`)" alt="" />
        </div>
        <div class="buttonsItself">
          <div
            v-for="n in 5"
            :key="n"
            class="button"
            v-ripple
            @click="intoView = n - 1"
            ref="button"
          ></div>
        </div>
        <div
          class="right arrow"
          @click="intoView < 4 ? intoView++ : null"
          v-ripple
          ref="rightArrow"
        >
          <img :src="require(`../assets/right-arrow.png`)" alt="" />
        </div>
      </div>
    </baseCard>
  </section>
</template>

<script lang="ts" setup>
import dialogBubble from "./dialogBubble.vue";
import { ref, watch, onMounted, inject } from "vue";
const container = ref();
const scrollableField = ref();
const intoView = ref();
const leftArrow = ref();
const rightArrow = ref();
const button = ref();
const display: any = inject(`display`);

watch([intoView, display.width], () => {
  const bubbeWidth = scrollableField.value.children[0].clientWidth;
  const calculation =
    (bubbeWidth+0.3) * intoView.value +
    40 * intoView.value +
    200 -
    container.value.clientWidth / 2 +
    bubbeWidth / 2;
  scrollableField.value.style.left = -calculation + `px`;

  button.value.forEach((i: any) => {
    i.classList.remove(`active`);
  });

  button.value[intoView.value].classList.add(`active`);

  leftArrow.value.classList.remove("blocked");
  rightArrow.value.classList.remove("blocked");

  if (intoView.value === 0) {
    leftArrow.value.classList.add("blocked");
  } else if (intoView.value === 4) {
    rightArrow.value.classList.add("blocked");
  }
});

onMounted(() => {
  intoView.value = 0;
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  gap: 60px 0;
  padding: 40px 0 !important;
  box-shadow: none !important;
  .scrollableWrapper {
    overflow-x: hidden;
    .mainWrapper {
      transition: left 0.3s;
      position: relative;
      padding: 0 200px;
      width: 600%;
      display: flex;
      column-gap: 40px;
      .innerFlex {
        display: flex;
        flex-direction: column;
        row-gap: 40px;
        .description {
          padding-left: 70px;
          .name {
            color: #b9ff66;
            font-size: 15px;
            font-weight: 500;
          }
          .work {
            color: white;
          }
        }
      }
    }
  }
  .buttonsRow {
    height: 14px;
    width: 60%;
    align-self: center;
    display: flex;
    justify-content: space-evenly;
    .left {
      img {
        transform: rotate(180deg);
      }
    }
    .buttonsItself {
      display: flex;
      width: 30%;
      min-width: 120px;
      justify-content: space-around;
    }
    .button {
      width: 14px;
      height: 14px;
      background-image: url("../assets/sliderButton.png");
      background-size: cover;
      transition: 0.3s;
    }
    .arrow {
      display: flex;
      transition: opacity 0.3s;
      img {
        align-self: center;
        height: 20px;
        filter: invert(100%);
      }
    }
  }
}

.blocked {
  opacity: 0.3;
}
.active {
  background-image: url("../assets/sliderButtonActive.png") !important;
}
</style>
