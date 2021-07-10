module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'standard',
    'plugin:eslint/recommended',
    'prettier/eslint',
    'prettier/standard',
    'prettier/react'
  ],
  parser: 'eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect',
    },
  }
}
