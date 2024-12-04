<template>
  <section>
    <div class="card">
      <form @submit.prevent class="form">
        <div class="formContainers radio">
          <label class="container" v-for="button in radioArray" :key="button.value"
            ><p>{{ button.text }}</p>
            <input
              type="radio"
              name="action"
              :checked="button.checked"
              class="customInput"
              :value="button.value"
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
            @blur="checkValues(providedData.email, `email`)"
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
            @blur="checkValues(providedData.message, `message`)"
            :ref="(el) => (providedData.message.tag = el)"
          ></textarea>
        </div>
        <pendingButton
          :isPending="isPending"
          :send="send"
          color="black"
          v-if="!displayFactor"
        >
          Send Message
        </pendingButton>
      </form>
      <div class="image" v-if="!displayFactor">
        <img :src="require(`../assets/ContactUsIllustration.png`)" alt="Magic" />
      </div>

      <transition>
        <MiniDialog :values="value" v-if="showDialog"></MiniDialog>
      </transition>
    </div>
    <div v-if="displayFactor" class="outsideButton">
      <PendingButton :isPending="isPending" :send="send" color="black">
        Send Message
      </PendingButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject, computed, ref, reactive } from "vue";
const display: any = inject(`display`);
const displayFactor = computed(() => {
  return display.width.value < 700;
});
const store: any = inject(`store`);
const radioArray = [
  { text: `Say Hi`, value: `greetengs`, checked: true },
  { text: `Get a Quote`, value: `quote` },
];
const providedData = reactive({
  action: `greetengs`,
  name: ``,
  email: { data: ``, valid: false, tag: ref() },
  message: { data: ``, valid: false, tag: ref() },
});
const isPending = ref(false);
const showDialog = ref(false);
const value = reactive({ status: ``, text: `` });

function checkValues(target: any, selector: string) {
  if ((selector === `email` &&
      target.data.match(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g /* eslint-disable-line */
      )) ||
    (selector === `message` && target.data.length >= 10)
  ) {
    target.valid = true;
    target.tag.classList.remove(`redBorder`);
  } else {
    target.valid = false;
    target.tag.classList.add(`redBorder`);
  }
}

async function send() {
  checkValues(providedData.message, `message`);
  checkValues(providedData.email, `email`);
  if (providedData.email.valid && providedData.message.valid) {
    isPending.value = true;
    const returned = await store.dispatch(`sendRequest`, {
      name: providedData.name || null,
      action: providedData.action,
      email: providedData.email.data,
      message: providedData.message.data,
    });

    if (returned) {
      value.status = `Success`;
      value.text = `Message was sended succesfully`;
      providedData.action = `greetengs`;
      providedData.name = ``;
      providedData.email.data = ``;
      providedData.email.valid = false;
      providedData.message.data = ``;
      providedData.message.valid = false;
    } else {
      value.status = `Error`;
      value.text = `Please try send message later`;
    }

    isPending.value = false;
    showDialog.value = true;
    setTimeout(() => {
      showDialog.value = false;
    }, 2500);
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
