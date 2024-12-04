<template>
  <section>
    <div class="card">
      <form @submit.prevent class="form">
        <div class="formContainers radio">
          <label class="container" v-for="n in radioArray" :key="n.value"
            ><p>{{ n.text }}</p>
            <input
              type="radio"
              name="action"
              :checked="n.checked"
              class="customInput"
              :value="n.value"
              v-model="providedData.action"
            />
            <transition>
              <span class="checkmark"></span>
            </transition>
          </label>
        </div>
        <div class="formContainers">
          <label for="name">Name</label>
          <input
            type="text "
            id="name"
            placeholder="Name"
            v-model="providedData.name"
          />
        </div>
        <div class="formContainers">
          <label for="email">Email*</label>
          <input
            type="email "
            id="email"
            placeholder="Email"
            v-model="providedData.email.data"
            @blur="blur(providedData.email, `email`)"
            :ref="(el) => (providedData.email.tag = el)"
          />
        </div>
        <div class="formContainers">
          <label for="message">Message*</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="7"
            v-model="providedData.message.data"
            @blur="blur(providedData.message, `message`)"
            :ref="(el) => (providedData.message.tag = el)"
          ></textarea>
        </div>
        <pendingButton
          :isPending="isPending"
          :send="send"
          color="black"
          buttonText="Send Message"
          v-if="computedWidth"
        ></pendingButton>
      </form>
      <div class="image" v-if="computedWidth">
        <img :src="require(`../assets/ContactUsIllustration.png`)" alt="" />
      </div>

      <transition>
        <MiniDialig
          :values="value"
          v-if="showDialog"
        ></miniDialig>
      </transition>
    </div>
    <div v-if="!computedWidth" class="outsideButton">
      <pendingButton :isPending="isPending" :send="send" color="black" buttonText="Send Message" ></pendingButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject, computed, ref, reactive } from "vue";
import pendingButton from "./pendingButton.vue";
import MiniDialig from "@/layouts/miniDialig.vue";
const display: any = inject(`display`);
const isPending = ref(false);
const providedData = reactive({
  action: `greetengs`,
  name: ``,
  email: { data: ``, valid: false, tag: ref() },
  message: { data: ``, valid: false, tag: ref() },
});

const radioArray = [
  { text: `Say Hi`, value: `greetengs`, checked: true },
  { text: `Get a Quote`, value: `quote` },
];

const showDialog = ref(false);

const computedWidth = computed(() => {
  return display.width.value >= 700;
});
const value = reactive({ status: ``, text: `` });

function addRed(target: any) {
  target.valid = false;
  target.tag.classList.add(`redBorder`);
}

function removeRed(target: any) {
  target.valid = true;
  target.tag.classList.remove(`redBorder`);
}

function blur(target: any, selector: string) {
  if (
    selector === `email` &&
    target.data.match(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g /* eslint-disable-line */
    )
  ) {
    removeRed(target);
  } else if (selector === `message` && target.data.length >= 10) {
    removeRed(target);
  } else {
    addRed(target);
  }
}

function send() {
  blur(providedData.message, `message`)
  blur(providedData.email, `email`)
  if (providedData.email.valid && providedData.message.valid) {
    const object = {
      name: providedData.name || null,
      action: providedData.action,
      email: providedData.email.data,
      message: providedData.message.data,
    };
    isPending.value = true;

    fetch(
      `https://positivus-e2786-default-rtdb.europe-west1.firebasedatabase.app/requests.json`,
      {
        method: `POST`,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      }
    )
      .then((responce) => responce.json())
      .then(() => {
        value.status = `Success`;
        value.text = `Message was sended succesfully`;
        providedData.action = `greetengs`;
        providedData.name = ``;
        providedData.email.data = ``;
        providedData.email.valid = false;
        providedData.message.data = ``;
        providedData.message.valid = false;
      })
      .catch(() => {
        value.status = `Error`;
        value.text = `Please try send message later`;
      })
      .finally(() => {
        isPending.value = false;
        showDialog.value = true;
        setTimeout(() => {
          showDialog.value = false;
        }, 2500);
      });
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  border-radius: 30px;
  padding: 40px;
  background-color: #f3f3f3;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  gap: 45%;
  position: relative;
  .form {
    min-width: 245px;
    width: 100%;
    gap: 30px;
    display: flex;
    flex-direction: column;
    .redBorder {
      border: 1px solid red !important;
    }
    #name,
    #email,
    #message {
      display: block;
      border: 1px solid black;
      background-color: white;
      border-radius: 10px;
      padding: 12px;
      width: 100%;
      margin-top: 10px;
      resize: none;
    }
    .radio {
      display: flex;
      .container {
        height: 23px;
        display: flex;
        align-items: center;
        p {
          margin-left: 39px;
        }
      }
      .container:nth-child(1) {
        margin-right: 50px;
      }
    }
  }
  .image {
    align-self: center;
    width: 0px;
    img {
      height: 420px;
      transform: translateX(-196px);
    }
  }
}
.outsideButton {
  margin-top: 30px;
}
.progressWrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #191a23;
  height: 45px;
  border-radius: 10px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: 0.3s;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.customInput {
  position: absolute;
  top: 0;
  left: 0;
  height: 23px;
  width: 100%;
  z-index: 50;
}
.container {
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container .customInput {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 23px;
  width: 23px;
  background-color: #f3f3f3;
  border-radius: 50%;
  border: 1px solid black;
}

.container:hover .customInput ~ .checkmark {
  background-color: #ccc;
}

.checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

.container .customInput:checked ~ .checkmark::after {
  display: block;
}

.container .checkmark:after {
  top: 4px;
  left: 4px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #b9ff66;
}
</style>
