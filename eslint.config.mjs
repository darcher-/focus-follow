export default {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:jest/recommended",
    "eslint:recommended",
    "eslint-config-prettier",
    "eslint-config-with-prettier",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "no-unused-vars": ["error", {}],
    "jsx-a11y/no-onchange": 0,
  },
  ignorePatterns: ["coverage/**/*", "dist/**/*", "node_modules/**/*"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
};
