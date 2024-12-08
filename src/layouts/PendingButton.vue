<template>
    <BaseButton :color="color" :center="center" @click="send" class="button">
      <div class="progressWrapper" v-if="isPending">
        <v-progress-circular color="white" class="progress" indeterminate></v-progress-circular>
      </div>
      <span v-else> 
        {{text}} 
      </span>
    </BaseButton>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineProps([`isPending`, `send`,`color`,`text`,`center`]);
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
  padding: 0;
  width: 100%;
}

</style>
