<template>
  <section v-if="!computeClass">
    <baseCard styleProp="black" class="flexContainer flexContainerDesktop">
      <div
        class="textElement"
        v-for="element in elementsArray"
        :key="element.text"
      >
        <p class="text">
          {{ element.text }}
        </p>
        <baseAnchor theme="green" :to="element.to" class="anchor">
          <div class="anchorFlex">
            <p class="learnMore">Learn More</p>
            <img :src="require(`../assets/blackArrowButton.png`)" alt="" />
          </div>
        </baseAnchor>
      </div>
    </baseCard>
  </section>
  <section
    v-else
    @touchmove="swipe"
    @touchstart="clicked = true"
    @touchend="touchEnd"
  >
    <div class="flexContainer flexContainerMobile" ref="swipper">
      <baseCard
        class="textElement"
        v-for="element in elementsArray"
        :key="element"
        styleProp="black"
      >
        <p class="text">{{ element.text }}</p>
        <baseAnchor theme="green" :to="element.to" class="anchor">
          <div class="anchorFlex">
            <p class="learnMore">Learn More</p>
            <img :src="require(`../assets/blackArrowButton.png`)" alt="" />
          </div>
        </baseAnchor>
      </baseCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref ,inject} from "vue";
const store:any=inject(`store`)
const display:any=inject(`display`)
const swipper = ref();
const clicked = ref(false);
const computeClass = computed(() => {
  return display.width.value < 700;
});
const elementsArray = store.getters.getSwipperElementsArray

let swipperMoved = 0;
let clientX = 0;
let swipperOffset = 0;

function swipe(event: TouchEvent) {
  if (clicked.value) {
    clientX=clientX||event.targetTouches[0].clientX
    swipperOffset = swipperMoved + (event.targetTouches[0].clientX - clientX);
    swipper.value.style.transform = `translateX(${swipperOffset}px)`;
  }
}

function transition(transitionValue: number, to: boolean) {
  if (Math.abs(transitionValue) < 5 || clicked.value) {
    return;
  }
  let calcValue = transitionValue * 0.9;
  let newSwiperOffset = transitionValue - calcValue;
  to ? (swipperOffset -= newSwiperOffset) : (swipperOffset += newSwiperOffset);
  swipper.value.style.transform = `translateX(${swipperOffset}px)`;
  swipperMoved = +swipper.value.style.transform.slice(11, -3);
  setTimeout(() => transition(calcValue, to), 10);
}

function touchEnd() {
  clientX = 0;
  clicked.value = false;
  swipperMoved = +swipper.value.style.transform.slice(11, -3);
  if (swipperOffset > display.width.value-90 || swipperOffset < -1000) {
    transition(
      Math.abs(swipperOffset - (swipperOffset > 0 ? 0 : -1100+display.width.value)),
      swipperOffset > 300
    );
  }
}
</script>

<style lang="scss" scoped>
.flexContainer {
  display: flex;
  .textElement {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .text {
      color: white;
      font-size: 15px;
    }
    .anchor {
      width: fit-content;
      .anchorFlex {
        display: flex;
        align-items: center;
        .learnMore {
          font-size: 16px;
        }
      }
    }
  }
}

.flexContainerDesktop {
  gap: 40px;

  .textElement:nth-child(1) {
    order: 1;
  }
  .textElement:nth-child(2) {
    order: 3;
  }
  .textElement:nth-child(3) {
    order: 5;
  }
}

.flexContainerDesktop::after {
  content: "";
  width: 1px;
  background-color: #ffffff;
  order: 2;
}
.flexContainerDesktop::before {
  content: "";
  width: 1px;
  background-color: #ffffff;
  order: 4;
}

.flexContainerMobile {
  gap: 20px;
  .textElement {
    min-width: 350px;
  }
}
.mainCard{
  box-shadow: none !important;
}
</style>
