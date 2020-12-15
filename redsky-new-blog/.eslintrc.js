module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential", // base 규칙과 함계 에러를 내는 코드와, 예상치 못한 결과를 낳는 코드를 예측
    "eslint:recommended", // eslint 공식 홈페이지에서 제공하는 기본 룰 적용.
    "plugin:prettier/recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "tabWidth": 2,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "es5",
        "bracketSpacing": true,
        "jsxBracketSameLine": false,
        "endOfLine": "auto"
      }
    ]
  }
};
