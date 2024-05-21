module.exports = {
    root: true,
    plugins: ['import', 'react', '@typescript-eslint'],
    extends: [
        'plugin:import/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
    ],
    rules: {
        'no-console': 'error',
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
}
