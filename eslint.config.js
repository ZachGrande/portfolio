import react from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
	{
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react,
    },
		rules: {
			semi: "error",
		},
	},
  {
    ignores: [
      ".next/**",
    ]
  }
]);
