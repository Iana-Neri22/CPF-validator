module.exports = {
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "camelcase": ["error", { "properties": "always" }],
    "keyword-spacing": ["error", { "before": true }],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "space-before-blocks": ["error", "always"],
    "spaced-comment": ["error", "always", { "exceptions": ["-", "+"] }],
    "key-spacing": ["error", { "afterColon": true }],
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "space-in-parens": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "padded-blocks": ["error", "never"],
    "no-floating-decimal": ["error"],
    "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "no-array-constructor": ["error"]
  }
};