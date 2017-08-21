module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugings": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "globals": {
    "window": true,
    "document": true,
    "fetch": true,
    "localStorage": true
  },
  "rules": {
    "comma-dangle": [1, "never"],
    "semi": [2, "never"],
    "arrow-body-style": 0,
    "quotes": ["error", "double"],
    "react/jsx-closing-bracket-location": [1, "after-props"],
    "no-param-reassign": ["error", { "props": false }],
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "no-use-before-define": 0,
    "camelcase": 0,
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-mixed-operators": 0,
    "import/no-extraneous-dependencies": 0,
    "no-return-assign": 0,
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "new-cap": 0
  }
}