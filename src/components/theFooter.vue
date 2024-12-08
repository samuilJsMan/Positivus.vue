<template>
  <div :class="[`footerWrapper`, { footerWrapperMobile: computedDisplayWidth }]">
    <div class="navBlock">
      <div class="logo" @click="sendTo(`about`)">
        <img class="first" :src="require(`../assets/Vector.png`)" alt="Positivus Logo" />
        <img class="second" :src="require(`../assets/Positivus.png`)" alt="Positivus Logo" />
      </div>
      <div class="navAnchors">
        <BaseAnchor
          v-for="anchor in anchorList"
          class="anchor"
          theme="white"
          :text="anchor.text"
          :key="anchor.text"
          @click="sendTo(anchor.to)"
        />
      </div>
      <SocialIcons v-if="!computedDisplayWidth"/>
    </div>
    <div class="contactBlock">
      <div class="adressBlock">
        <span class="label">Contact us:</span>
        <p class="adress">Email: info@positivus.com</p>
        <p class="adress">Phone: 555-567-8901</p>
        <p class="adress">
          Address: 1234 Main St
          <br />
          Moonstone City, Stardust State 12345
        </p>
      </div>
      <div class="emailForm">
        <input
          class="input"
          type="email"
          placeholder="Email"
          id="email"
          v-model="providedData.value"
          @blur="checkValues"
          ref="inputElement"
        />
        <PendingButton
          :isPending="isPending"
          :send="send"
          text="Subscribe to news"
          color="green"
          class="baseButton"
        />
      </div>
    </div>
    <SocialIcons class="socialIcons" v-if="computedDisplayWidth"/>
    <div class="legalBlock">
      <p class="year">© 2023 Positivus. All Rights Reserved.</p>
      <BaseAnchor @click="router.push({path:`/PrivacyPolicy`,query:{name:`Privacy policy`}})" class="privacy" text="Privacy Policy"/>
    </div>
    <transition>
      <MiniDialog v-if="showDialog" :values="value"/>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed, ref, reactive } from "vue";
import SocialIcons from "../layouts/SocialIcons.vue";
const displayWidth: any = inject(`displayWidth`);
const store: any = inject(`store`);
const router:any =inject(`router`)
const anchorList = store.getters.getNavAnchorList;
const showDialog = ref(false);
const isPending = ref(false);
const inputElement = ref();
const value = reactive({ status: ``, text: `` });
const providedData = reactive({ value: ``, valid: false });

const computedDisplayWidth = computed(() => {
  return displayWidth.value < 700;
});

function sendTo(to: string) {
  if(router.currentRoute.value.path!==`/home`){
    router.go(-1)
  }
  setTimeout(()=>{
    store.dispatch(`scrollToAction`, to);
  },10) 
}

function checkValues() {
  if (providedData.value.match(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g /* eslint-disable-line */
    )
  ) {
    inputElement.value.style.border = ``;
    providedData.valid = true;
    
  } else {
    inputElement.value.style.border = `1px solid red`;
    providedData.valid = false;
  }
}

async function send() {
  checkValues()
  if(providedData.valid){
  isPending.value=true
  const returned = await store.dispatch(`sendRequest`, providedData.value);
    if(returned){
      value.status = `Success`;
      value.text = `Your Email was Saved`;
      providedData.value = ``;
    }else{
      value.status = `Error`;
      value.text = `Please try send Email later`;
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
.footerWrapper {
  position: relative;  //dialog
  border-radius: 45px 45px 0 0;
  background-color: #191a23;
  padding: 40px;
  color: white;
  .navBlock {
    display: flex;
    justify-content: space-between;
    gap: 4%;
    .logo {
      display: flex;
      align-items: center;
      width: fit-content;
      margin: 0 auto;
      filter: invert(100%);
      .first {
        height: 24px;
        margin-right: 6px;
      }
      .second {
        height: 16px;
      }
    }
    .navAnchors {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      .anchor{
        padding: 3px 0;
      }
    }
  }
  .contactBlock {
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    .adressBlock {
      min-width: 222px;
      .label {
        background-color: #b9ff66;
        color: black;
        border-radius: 5px;
        padding: 2px 5px;
        font-weight: 500;
      }
      .adress {
        font-size: 12px;
        margin-top: 10px;
      }
      .adress:nth-child(2) {
        margin-top: 30px;
      }
    }
    .emailForm {
      min-width: 60%;
      display: flex;
      background-color: #292a32;
      border-radius: 14px;
      padding: 30px;
      align-items: center;
      justify-content: center;
      gap: 10px;
      .input {
        display: block;
        color: white;
        font-size: 15px;
        padding: 10px;
        border: 1px solid white;
        background-color: #292a32;
        border-radius: 10px;
        height: 45px;
        max-width: 50%;
      }
      .baseButton {
        max-width: 50%;
        height: 45px;
      }
    }
  }
  .legalBlock {
    width: 100%;
    display: flex;
    gap: 35px;
    padding-top: 25px;
    border-top: 1px solid white;
    .year {
      font-size: 12px;
    }
    .privacy {
      font-size: 12px;
      color: white;
      text-decoration: none;
      cursor: pointer;
    }
    .privacy:hover{
      text-decoration: underline;
    }
  }
  .socialIcons{
    margin: 0 auto;
  }
}

.footerWrapperMobile {
  text-align: center;
  padding: 30px 10px 10px 10px;
  border-radius: 0px;
  align-items: center;
  .navBlock {
    display: block;
    .logo {
      padding-bottom: 27px;
    }
    .navAnchors {
      flex-direction: column;
    }
  }
  .contactBlock {
    display: block;
    .emailForm {
      margin-top: 20px;
      display: block;
      width: 100%;
      .baseButton {
        max-width: 100%;
        margin-top: 15px;
      }
      .input {
        max-width: 100%;
        width: 100%;
        margin: 0;
      }
    }
  }
  .legalBlock {
    gap: 20px;
    margin-top: 30px;
    flex-direction: column;
  }
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
</style>
