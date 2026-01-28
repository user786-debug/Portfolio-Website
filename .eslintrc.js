module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    requireConfigFile: false
  },
  env: {
    browser: true,
    es2021: true,
    node: true      // ✅ add this line
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: ['react'],
  rules: {
    'no-unused-vars': ['error', { "varsIgnorePattern": "^[A-Z_]", "argsIgnorePattern": "^_" }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
