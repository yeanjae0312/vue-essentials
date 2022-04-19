<template>
  <header>
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name" 
        class="nav-item">
        <!-- active-class는 기존의 router 액티브 효과인 'router-link-active'를 부트스트랩의 액티브 효과인 'active'로 변경하겠다 -->
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  }
}
</script>

<style>

</style>