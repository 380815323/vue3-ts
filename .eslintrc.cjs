module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'plugin:vue/essential',
    'standard',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue'],
  rules: {
    'no-redeclare': 0,
    'vue/multi-word-component-names': 0,
    eqeqeq: 0,
    'no-debugger': 1,
    'array-callback-return': 0,
    'no-unused-vars': 0,
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 4
      },
      multiline: {
        max: 4
      }
    }]
  }

}
