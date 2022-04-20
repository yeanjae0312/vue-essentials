<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text"
      placeholder="Search for Movies, Series & more" 
      @keyup.enter="apply" />
    <div class="selects">
      <select 
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option 
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode'],
        },
        {
          name: 'number',
          items: [10, 20, 30],
        },
        {
          name: 'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear() // 현재 년도

            for(let i=thisYear; i>=1985; i-=1) {
              years.push(i)
            }

            return years
          })(),
        }
      ],
    }
  },
  methods: {
    async apply() {
      // Search movies...
      // https://www.omdbapi.com/ 사이트 영화api 사용
      const OMDB_API_KEY = '69213124'
      const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`); // https로 수정
      console.log(res);
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    --gap: 10px;
    display: flex;
    gap: var(--gap);
    font-size: 15px;

    .selects {
      display: flex;
      gap: var(--gap);

      select {
        width: 120px;
      }
    }

    .btn {
      width: 120px;
      height: 50px;
      font-weight: 700;
      flex-shrink: 0; // 길이 비율이 줄어들지 않게 하겠다. 1이면 줄어들게 하겠다.
    }
  }
</style>