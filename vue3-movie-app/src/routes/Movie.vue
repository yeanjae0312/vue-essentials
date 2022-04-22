<template>
  <div class="container">
    <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
    <!-- fixed는 :fixed="true"를 의미함 -->
    <Loader
      :size="3"
      :z-index="9"
      fixed />
  </div>
</template>

<script>
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  created() {
    this.$store.dispatch('movie/searchMovieWidthID', {
      // movie/tt123456
      id: this.$route.params.id
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '~/scss/main';

  .container {
    padding-top: 40px;
  }

  .skeletons {
    display: flex;
    gap: 70px;

    .poster {
      flex-shrink: 0;
      $width: 500px;
      width: $width;
      height: $width * 3/2;
    }

    .specs {
      flex-grow: 1;
    }

    .skeleton {
      border-radius: 10px;
      background-color: $gray-200;

      &.title {
        width: 80%;
        height: 70px;
      }

      &.spec {
        width: 60%;
        height: 30px;
        margin-top: 20px;
      }

      &.plot {
        width: 100%;
        height: 250px;
        margin-top: 20px;
      }

      &.etc {
        width: 50%;
        height: 50px;
        margin-top: 20px;
      }
    }
  }
</style>