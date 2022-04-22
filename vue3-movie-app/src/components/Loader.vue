<template>
  <!-- class 사용시 z-index를 zIndex인 카멜케이스로 사용해도 내부에서 대시로 변환해줌 -->
  <div
    :style="{ width: `${size}rem`, height: `${size}rem`, zIndex: zIndex }"
    :class="{ absolute: absolute, fixed: fixed }"
    class="spinner-border text-primary">
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 2
    },
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .spinner-border {
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &.absolute {
      position: absolute;
    }

    &.fixed {
      position: fixed;
    }
  }
</style>