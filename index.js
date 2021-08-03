module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],

  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        object: true,
        array: false,
      },
      AssignmentExpression: {
        object: false,
        array: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: ['if', 'for', 'function', 'switch', 'do', 'while', 'try'],
    }],
    'no-restricted-syntax': 'off',
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'no-underscore-dangle': ['error', {
      allow: ['_uid'],
    }],
  },
};
