import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import next from "@next/eslint-plugin-next";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default defineConfig([
	{
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react,
      "@next/next": next,
      "@typescript-eslint": typescriptEslint,
    },
		rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...next.configs.recommended.rules,
			semi: "error",
		},
    languageOptions: {
      parser: typescriptParser,
    },
    settings: {
      react: {
        version: "detect",
      }
    }
	},
  {
    ignores: [
      ".next/**",
    ]
  }
]);
