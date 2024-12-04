<template>
  <div class="social">
    <a href="https://www.facebook.com/" target="_blank">
      <img :src="require(`../assets/facebookFooter.png`)" alt=""
    /></a>
    <a href="https://www.linkedin.com/" target="_blank">
      <img
        class="middle"
        :src="require(`../assets/linkedInFooter.png`)"
        alt=""
      />
    </a>
    <a href="https://x.com/" target="_blank">
      <img :src="require(`../assets/twitterFooter.png`)" alt=""
    /></a>
  </div>
</template>

<style lang="scss" scoped>
.social {
  width: fit-content;
  display: flex;
  a {
    display: block;
    height: 24px;
  }
  img {
    height: 24px;
  }
  .middle {
    padding: 0px 10px;
  }
}
</style>
