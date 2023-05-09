const path = require('path');

module.exports = {
    extends: [
        'airbnb-base',
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended",
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: path.resolve(__dirname, './tsconfig.json'),
    },
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        browser: true,
    },
    settings: {
    },
    rules: {
        '@typescript-eslint/no-explicit-any': ['error'],
        'import/no-cycle': ['error'],
        'no-debugger': ['error'],
        'no-console': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-restricted-globals': ['warn'],
        'no-plusplus': ['warn'],
        'dot-notation': ['off'],
        'func-names': ['error'],
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
            }
        ],
        'prettier/prettier': ['error'],
        'import/prefer-default-export': ['warn'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/*.test.ts', '**/*.stories.ts']
            }
        ]
    }
}
