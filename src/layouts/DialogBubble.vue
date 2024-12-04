<template>
  <div class="bubble">
    <div class="bubbleHook"></div>
    <slot></slot>  
  </div>
</template>

<style lang="scss" scoped>
  .bubble{
    position: relative;
    background-color: #191A23;
    border: 1px solid #B9FF66;
    padding: 40px;
    border-radius: 45px;
    max-width: 500px;
    min-width: 300px;
    color: white;
    .bubbleHook{
      background-color: #191A23;
      position: absolute;
      height: 32px;
      width: 32px;
      border-bottom: 1px solid  #B9FF66;
      border-right:1px solid  #B9FF66;
      bottom:-16.4px;
      left: 55px;
      transform: rotate(45deg);
    }
  }
</style>