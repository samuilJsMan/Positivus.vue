<template>
  <section v-if="!displayFactor">
    <baseCard styleProp="black" class="flexContainer flexContainerDesktop">
      <div
        class="textElement"
        v-for="element in elementsArray"
        :key="element.text"
      >
        <p class="text">
          {{ element.text }}
        </p>
        <baseAnchor theme="green" class="anchor" @click="router.push({path:element.to, query:{name:element.theme}})">
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
const router:any=inject(`router`)
const swipper = ref();
const elementsArray = store.getters.getSwipperElementsArray
const displayFactor = computed(() => {
  return display.width.value < 700;
});

const clicked = ref(false);
let swipperMoved = 0;
let clientX = 0;
let swipperOffset = 0;

function swipe(event: TouchEvent) {
  clientX=clientX||event.targetTouches[0].clientX
  swipperOffset = swipperMoved + (event.targetTouches[0].clientX - clientX);
  swipper.value.style.transform = `translateX(${swipperOffset}px)`;
}

function transition(transitionValue: number, to: boolean) {
  if (Math.abs(transitionValue) < 5 || clicked.value) {
    return;
  }
  let newSwiperOffset = transitionValue - transitionValue * 0.9;
  to ? (swipperOffset -= newSwiperOffset) : (swipperOffset += newSwiperOffset);
  swipper.value.style.transform = `translateX(${swipperOffset}px)`;
  swipperMoved = +swipper.value.style.transform.slice(11, -3);
  setTimeout(() => transition(transitionValue * 0.9, to), 10);
}

function touchEnd() {
  clientX = 0;
  clicked.value = false;
  swipperMoved = +swipper.value.style.transform.slice(11, -3);
  if (swipperOffset >= display.width.value-50 || swipperOffset <= -1050) {
    transition(
      Math.abs(swipperOffset - (swipperOffset > 0 ? 0 : -1105+display.width.value)),
      swipperOffset > 325
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
