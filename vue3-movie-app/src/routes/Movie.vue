<template>
  <h1>Movie!</h1>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('movie/searchMovieWidthID', {
      // movie/tt123456
      id: this.$route.params.id
    })
  }
}
</script>

<style>

</style>