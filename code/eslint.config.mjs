// @ts-check
import stylistic from '@stylistic/eslint-plugin';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  ignores: [
    '**/coverage',
    '.vscode/**',
  ],
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/quotes': ['error', 'single'],
  },
});
