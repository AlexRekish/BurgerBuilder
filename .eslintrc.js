module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
  },
  env: {
    jest: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
