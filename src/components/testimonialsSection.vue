<template>
  <section ref="container">
    <SectionHeader
      title="Testimonials"
      id="blog"
      text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
    />
    <BaseCard styleProp="black" class="card">
      <div class="scrollableField" ref="scrollableField">
        <div v-for="n in 5" :key="n" :id="`${n}`">
          <DialogBubble>
            "We have been working with Positivus for the past year and have seen
            a significant increase in website traffic and leads as a result of
            their efforts. The team is professional, responsive, and truly cares
            about the success of our business. We highly recommend Positivus to
            any company looking to grow their online presence."
          </DialogBubble>
          <div class="description">
            <p class="name">John Smith</p>
            <p class="work">Marketing Director at XYZ Corp</p>
          </div>
        </div>
      </div>
      <div class="buttonsRow">
        <img
          :src="require(`../assets/right-arrow.png`)"
          class="left arrow"
          @click="intoView > 0 ? intoView-- : null"
          ref="leftArrow"/>
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
        <img
          :src="require(`../assets/right-arrow.png`)"
          class="arrow"
          @click="intoView < 4 ? intoView++ : null"
          ref="rightArrow"/>
      </div>
    </BaseCard>
  </section>
</template>

<script lang="ts" setup>
import DialogBubble from "../layouts/DialogBubble.vue";
import { ref, watch, onMounted, inject } from "vue";
const container = ref();
const scrollableField = ref();
const intoView = ref();
const leftArrow = ref();
const rightArrow = ref();
const button = ref();
const displayWidth: any = inject(`displayWidth`);

watch([intoView, displayWidth], () => {
  const bubbeWidth = scrollableField.value.children[0].clientWidth;
  const calculation =
    (bubbeWidth + 0.3) * intoView.value +
    40 * intoView.value -
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
  overflow-x: hidden;
  width: 100%;
  padding: 40px 0 !important;
  box-shadow: none !important;
  .scrollableField {
    transition: left 0.3s;
    position: relative;
    width: 500%;
    display: flex;
    column-gap: 40px;
    .description {
      margin-top: 40px;
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
  .buttonsRow {
    margin: 70px auto 0 auto ;
    height: 14px;
    width: 80%;
    align-self: center;
    display: flex;
    justify-content: space-evenly;
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
      transition: 0.3s;
    }
    .arrow {
      transition: opacity 0.3s;
      align-self: center;
      height: 20px;
      filter: invert(100%);
    }
    .left {
      transform: rotate(180deg);
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
