<template>
  <section>
    <div class="card">
      <form @submit.prevent class="form">
        <div class="formContainers radio">
          <label class="container" v-for="n in radioArray" :key="n.value"
            ><p>{{n.text}}</p>
            <input
              type="radio"
              name="action"
              :checked="n.checked"
              class="inp"
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
            @blur="blur(providedData.email,`email`)"
            :ref="el=>providedData.email.tag=el"
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
            @blur="blur(providedData.message,`message`)"
            :ref="el=>providedData.message.tag=el"
          ></textarea>
        </div>
        <div class="formContainers" v-if="computedWidth">
          <baseButton
            color="black"
            style="width: 100%"
            center="true"
            @click="send"
          >
            Send Message
          </baseButton>
        </div>
      </form>
      <div class="image" v-if="computedWidth">
        <img :src="require(`../assets/ContactUsIllustration.png`)" alt="" />
      </div>
    </div>
    <baseButton
      color="black"
      style="width: 100%; margin-top: 40px"
      center="true"
      v-if="!computedWidth"
      @click="send"
    >
      Send Message
    </baseButton>
  </section>
</template>

<script lang="ts" setup>
import { inject, computed, ref, reactive } from "vue";
const display: any = inject(`display`);
const providedData = reactive({
  action: ``,
  name: ``,
  email: { data: ``, valid: false ,tag:ref() },
  message: { data: ``, valid: false ,tag:ref()},
});

const radioArray=[{text:`Say Hi`,value:`greetengs`,checked:true},{text:`Get a Quote`,value:`quote`}]
const computedWidth = computed(() => {
  return display.width.value >= 700;
});


function addRed(target:any){
  target.valid=false
  target.tag.classList.add(`redBorder`)
}

function removeRed(target:any){
  target.valid=true
  target.tag.classList.remove(`redBorder`)
}

function blur(target: any,selector:string) {
  if (selector === `email`&&target.data.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {/* eslint-disable-line */
    removeRed(target)
  } else if (selector === `message` && target.data.length >= 10) {
    removeRed(target)
  }else{ 
    addRed(target)
  }
}

function send() {
  if (providedData.email.valid && providedData.message.valid) {

    //fetchrequest

    providedData.action = ``;
    providedData.name = ``;
    providedData.email.data = ``;
    providedData.email.valid = false;
    providedData.message.data = ``;
    providedData.message.valid = false;
  }else{
    if(!providedData.email.valid){
      addRed(providedData.email)
    }
    if(!providedData.message.valid){
      addRed(providedData.message)
    }
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
  .form {
    min-width: 245px;
    width: 100%;
    gap: 30px;
    display: flex;
    flex-direction: column;
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
.inp {
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

.container .inp {
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

.container:hover .inp ~ .checkmark {
  background-color: #ccc;
}

.checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

.container .inp:checked ~ .checkmark::after {
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
.redBorder {
  border: 1px solid red !important;
}

</style>
