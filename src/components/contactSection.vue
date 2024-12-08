<template>
  <section>
    <SectionHeader
      title="Contact Us"
      id="contact"
      text="Connect with Us: Let's Discuss Your Digital Marketing Needs"
    />
    <div class="card">
      <form @submit.prevent class="form">
        <div class="formContainers marginBottom">
          <label
            class="radioContainer"
            v-for="button in radioArray"
            :key="button.value"
            ><p class="label">{{ button.text }}</p>
            <input
              type="radio"
              name="action"
              :checked="button.checked"
              class="customInput"
              :value="button.value"
              v-model="providedData.action"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="formContainers marginBottom">
          <label for="name">Name</label>
          <input
            type="text "
            id="name"
            placeholder="Name"
            v-model="providedData.name"
          />
        </div>
        <div class="formContainers marginBottom">
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
        <PendingButton
          :isPending="isPending"
          :send="send"
          color="black"
          v-if="!computedDisplayWidth"
          text="Send Message"
          class="button"
        />
      </form>
      <div class="image" v-if="!computedDisplayWidth">
        <img
          :src="require(`../assets/ContactUsIllustration.png`)"
          alt="Magic"
        />
      </div>

      <transition>
        <MiniDialog :values="value" v-if="showDialog" />
      </transition>
    </div>
    <PendingButton
      v-if="computedDisplayWidth"
      class="button"
      :isPending="isPending"
      :send="send"
      color="black"
      text="Send Message"
    />
  </section>
</template>

<script lang="ts" setup>
import { inject, computed, ref, reactive } from "vue";
const displayWidth: any = inject(`displayWidth`);
const computedDisplayWidth = computed(() => {
  return displayWidth.value < 700;
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
  if (
    (selector === `email` &&
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
  position: relative; //dialog
  width: 100%;
  border-radius: 30px;
  padding: 40px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  gap: 45%;
  .form {
    min-width: 245px;
    width: 100%;
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
    .marginBottom {
      margin-bottom: 30px;
    }
    .radioContainer {
      display: inline-block;
      height: 23px;
      position: relative;
      cursor: pointer;
      user-select: none;
      .label {
        margin: 0 25px 0 35px;
        line-height: 23px;
      }
      .customInput {
        position: absolute;
        top: 0;
        left: 0;
        height: 23px;
        width: 100%;
        z-index: 50;
        opacity: 0;
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

.button {
  margin-top: 30px;
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

.radioContainer:hover .customInput ~ .checkmark {
  background-color: #ccc;
}

.checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

.radioContainer .customInput:checked ~ .checkmark::after {
  display: block;
}

.radioContainer .checkmark:after {
  top: 4px;
  left: 4px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #b9ff66;
}
</style>
