import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
//import tsPlugin from 'typescript-eslint'
//import prettierPlugin from 'eslint-plugin-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignore build output
  globalIgnores(['dist', 'node_modules']),

  // TypeScript + React files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        //project: './tsconfig.json', // optional if you want type-aware rules
      },
    },
    plugins: {
      //prettier: prettierPlugin,
      //'@typescript-eslint': tsPlugin,
    },
    extends: [
      js.configs.recommended,
      //tsPlugin.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      'prettier', // disable conflicting ESLint rules with Prettier
    ],
    rules: {
      // Show Prettier issues as ESLint errors
      'prettier/prettier': 'error',
      // Example: you can override rules here if needed
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
])