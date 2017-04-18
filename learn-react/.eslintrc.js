module.exports = {
    parser: "babel-eslint",
    extends: ["eslint:recommended", "plugin:react/recommended"],
    env: {
      node: true,
      "browser": true
    },
    "plugins": [
      "react"
    ],
    rules:{
      'no-console': 'off',
    }
};