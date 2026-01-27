import { defineConfig } from 'eslint/config'
import eslintPlugin from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import nextPlugin from '@next/eslint-plugin-next'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'

// Global ignores configuration
const ignoresConfig = defineConfig([
  {
    name: 'project/ignores',
    ignores: ['.next/', 'node_modules/', 'public/', '.contentlayer/'],
  },
])

// ESLint recommended rules for JavaScript/TypeScript
const eslintConfig = defineConfig([
  {
    name: 'project/javascript-recommended',
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    ...eslintPlugin.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      'no-unused-vars': 'off',
    },
  },
])

// TypeScript configuration
const typescriptConfig = defineConfig([
  {
    name: 'project/typescript',
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: 'readonly',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
])

// React and Next.js configuration
const reactConfig = defineConfig([
  {
    name: 'project/react-next',
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      '@next/next': nextPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: {
        React: 'readonly',
      },
    },
    rules: {
      // React recommended rules
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      // React Hooks rules
      ...reactHooksPlugin.configs.recommended.rules,
      // Accessibility rules
      ...jsxA11yPlugin.configs.recommended.rules,
      // Next.js rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      // Custom overrides
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
    },
  },
])

// Prettier configuration
const prettierConfig = defineConfig([
  {
    name: 'project/prettier',
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
])

// Export the complete configuration
export default defineConfig([
  ...ignoresConfig,
  ...eslintConfig,
  ...typescriptConfig,
  ...reactConfig,
  ...prettierConfig,
])
