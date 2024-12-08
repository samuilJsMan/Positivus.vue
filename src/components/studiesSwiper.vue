<template>
  <section @touchmove="swipe" @touchstart="clicked = true" @touchend="touchEnd">
    <SectionHeader
      title="Case Studies"
      id="cases"
      text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
    />
    <div :class="[`cardsContainer`,{cardsContainerDesktop:!computedDisplayWidth}]" ref="swipper">
      <BaseCard
        class="card"
        v-for="element in elementsArray"
        :key="element"
        styleProp="black">
        <p class="text">{{ element.text }}</p>
        <BaseAnchor
          theme="green"
          @click="router.push({ path: element.to, query: { name: element.theme } })"
          class="anchor">
          <span class="learnMore">Learn More</span>
          <img :src="require(`../assets/blackArrowButton.png`)" alt="" />
        </BaseAnchor>
      </BaseCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref, inject } from "vue";
const store: any = inject(`store`);
const displayWidth: any = inject(`displayWidth`);
const router: any = inject(`router`);
const swipper = ref();
const elementsArray = store.getters.getSwipperElementsArray;
const computedDisplayWidth = computed(() => {
  return displayWidth.value < 700;
});

const clicked = ref(false);
let swipperMoved = 0;
let clientX = 0;
let swipperOffset = 0;

function swipe(event: TouchEvent) {
  clientX = clientX || event.targetTouches[0].clientX;
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
  if (swipperOffset >= displayWidth.value - 50 || swipperOffset <= -1050) {
    transition(
      Math.abs(
        swipperOffset - (swipperOffset > 0 ? 0 : -1105 + displayWidth.value)
      ),
      swipperOffset >= displayWidth.value - 50
    );
  }
}
</script>

<style lang="scss" scoped>
.cardsContainer {
  gap: 20px;
  display: flex;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 350px;
    box-shadow: none;
    .text {
      color: white;
      font-size: 15px;
      margin-bottom: 10px;
    }
    .anchor {
      display: flex;
      align-items: center;
      width: fit-content;
      .learnMore {
        font-size: 16px;
      }
    }
  }
}

.cardsContainerDesktop {
  background-color: #191A23;
  border-radius: 30px;
  padding: 40px;
  gap: 40px;
  .card{
    padding: 0;
    min-width: 0; 
  }
  .card:nth-child(1) {
    order: 1;
  }
  .card:nth-child(2) {
    order: 3;
  }
  .card:nth-child(3) {
    order: 5;
  }
}
.cardsContainerDesktop::after {
  content: "";
  width: 1px;
  background-color: #ffffff;
  order: 2;
}
.cardsContainerDesktop::before {
  content: "";
  width: 1px;
  background-color: #ffffff;
  order: 4;
}
</style>
