// eslint.config.js
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import prettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  tseslint.configs.recommendedTypeChecked,
  eslint.configs.recommended,
  {
    ignores: [
      "dist/**/*.{js,mjs,cjs,ts,jsx,tsx}",
      "**/*.mjs",
      "eslint.config.{js,ts,mjs,mts}",
      "postcss.config.{js,ts,mjs,mts}",
      "vite.config.{js,ts,mjs,mts}",
      "tailwind.config.{js,ts,mjs,mts}",
    ],
  },
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    // Set the react version
    settings: {
      react: {
        version: "18.3",
      },
    },
    plugins: {
      // Add the react plugin
      react,
      prettier,
    },
    rules: {
      // Enable its recommended rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
        },
        {
          selector: "variable",
          modifiers: ["const", "exported"],
          types: ["function"],
          format: ["PascalCase"],
          filter: {
            regex: "^use[A-Z]",
            match: false,
          },
        },
      ],
      "react/jsx-pascal-case": [
        2,
        {
          allowNamespace: true,
          ignore: [],
        },
      ],
    },
  },
  prettierRecommended,
);
