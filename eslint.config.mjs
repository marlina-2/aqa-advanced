import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        jest: true,
        describe: true,
        test: true,
        it: true,
        beforeAll: true,
        afterAll: true,
        expect: true,
      },
    },
  },
  {
    ignores: ['node_modules/*'],
  },
  pluginJs.configs.recommended,
];
