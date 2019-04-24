module.exports = {
    'env': {
        'node': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'camelcase': 2,
        'keyword-spacing': 1,
        'semi': [2, "always"],
        'eslint comma-spacing': ['error', { "before": false, "after": true }],
        'eslint key-spacing': ["error", { "beforeColon": true }],
        'eslint space-before-function-paren': ["error", "never"],
        'eslint padded-blocks': ["error", "never"],
        'eslint quotes' : ["error", "single"]
    }
};