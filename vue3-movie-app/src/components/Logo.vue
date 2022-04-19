<template>
  <RouterLink
    to="/"
    class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "~/scss/main";

  .logo {
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    color: $black; // $black은 부트스트랩 variables에 정의되어 있는 색상
    text-decoration: none;

    &:hover {
      color: $black;
    }

    span {
      color: $primary;
    }
  }
</style>