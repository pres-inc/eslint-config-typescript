module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "import",
    "@typescript-eslint"
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript"
  ],
  "rules": {
    "import/order": [
      "error",
      {
        "newlines-between": "always"
      }
    ],
    "import/no-unresolved": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-duplicates": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-function-return-type": "error"
  }
}
