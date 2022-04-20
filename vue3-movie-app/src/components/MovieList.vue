<template>
  <div class="container">
    <div class="inner">
      <MovieItem
        v-for="item in movies"
        :key="item.imdbID"
        :movie="item" />
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
  components: {
    MovieItem
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies
    }
  }
}
</script>

<style>

</style>