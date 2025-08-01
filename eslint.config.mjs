// eslint.config.ts
import tsParser from '@typescript-eslint/parser';
import oxlint from 'eslint-plugin-oxlint';
import globals from 'globals';
import tseslint from 'typescript-eslint';
// import pluginLocal from './eslint-plugin-local/dist/index.js';

const ignores = ['eslint-plugin-local/**'];

export default tseslint.config(
  {
    linterOptions: {
      // oxlintで使用してるignoreコメントが使ってないものとして検出されるためoff
      reportUnusedDisableDirectives: 'off',
    },
  },
  {
    ignores: ['./node_modules/**'],
  },
  {
    files: ['app/**/*.{ts,tsx}'],
    ignores,
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
    },
  },
  ...oxlint.buildFromOxlintConfigFile('.oxlintrc.json')

  /* プロジェクト固有のカスタムeslintルール */
  // {
  //   files: ['src/**/*.{ts,tsx}'],
  //   ignores: ['src/ui/i18n/**'],
  //   plugins: { local: pluginLocal },
  //   rules: {
  //     'local/enforce-const-object-union': 'error',
  //     'local/naming-convention-types': 'error',
  //     'local/naming-convention-variables': 'error',
  //     'local/no-typescript-enum': 'error',
  //   },
  // }
);
