<template>
  <h1>{{ message }}</h1>
  <HelloWorld />
</template>

<script>
import HelloWorld from '~/components/HelloWorld' // '~/'는 webpack.config.js에서 경로별칭으로 설정해줌

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'Hello Vue!!!!'
    }
  }
}
</script>
