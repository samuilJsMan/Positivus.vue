<template>
    <baseButton :color="color" center="true" @click="send" class="button">
      <transition mode="out-in">
      <div class="progressWrapper" v-if="isPending">
        <v-progress-circular color="white" class="progress" indeterminate></v-progress-circular>
      </div>
      <span v-else> {{buttonText}} </span>
    </transition>
    </baseButton>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineProps([`isPending`, `send`,`color`,`buttonText`]);
</script>

<style lang="scss" scoped>
.progressWrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #191a23;
  height: 45px;
  border-radius: 10px;
  opacity: 0.7;
}

.button{
  width: 100%;
}

.v-enter-from, .v-leave-to{
  opacity: 1;
}

.v-enter-to,.v-leave-from{
  opacity: 0.7;
}

.progress{
  width: 100%;
}
</style>
