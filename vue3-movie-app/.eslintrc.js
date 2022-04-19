module.exports = {
  env: {
    browser: true,
    node: true
  },
  // 코드 규칙
  extends: [
    // vue
    //'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    //'plugin:vue/vue3-recommended', // Lv3
    
    // js
    'eslint:recommended'
  ],
  // 코드 분석기
  parserOptions: {
    // parser: 'babel-eslint',
    // parser: 'vue-eslint-parser',
  },
  // 사용자 지정 규칙
  rules: {
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    'vue/multi-word-component-names': 0,
    
  }
}