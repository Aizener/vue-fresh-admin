module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended"
    ],
    "overrides": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "vuefix",
        "@typescript-eslint"
    ],
    "rules": {
        "no-undef": ["off"],
        "@typescript-eslint/no-unused-vars": ["off"],
        "vue/comment-directive": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "vue/multi-word-component-names": ["off"],
        "prefer-const": ["off"]
    }
}
