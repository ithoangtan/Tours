module.exports = {
   parser: "babel-eslint",
   plugins: ["react"],
   parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
         jsx: true
      }
   },
   extends: ["eslint:recommended"],
   rules: {
      semi: 1,
      "react/prop-types": ["warn"],
      "react/forbid-prop-types": 1
   }
};
