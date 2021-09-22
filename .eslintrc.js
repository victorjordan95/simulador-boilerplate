module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  extends: [
    "airbnb",
    "eslint:recommended",
    "prettier",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    document: false,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks", "jest"],
  rules: {
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".js"],
      },
    ],
    "no-undefined": "error",
    "no-undef": "error",
    "react/jsx-no-undef": "error",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "no-param-reassign": "off",
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "consistent-return": "off",
    "react/jsx-props-no-spreading": [
      0,
      {
        exceptions: ["Image", "img", "SvgIcon"],
      },
    ],
    "no-plusplus": [
      1,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_embedded", "_links"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.spec.js", "**/*.spec.jsx"],
      env: {
        jest: true,
      },
    },
  ],
};
