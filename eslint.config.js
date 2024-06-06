import globals from "globals"
import jsPlugin from "@eslint/js"
import tsPlugin from "typescript-eslint"
import prettierPlugin from "eslint-plugin-prettier/recommended"
import vuePlugin from "eslint-plugin-vue"
import * as graphqlPlugin from "@graphql-eslint/eslint-plugin"

export default tsPlugin.config(
  jsPlugin.configs.recommended,
  ...tsPlugin.configs.recommended,
  ...vuePlugin.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        Prism: "readonly"
      }
    },
    plugins: {
      "@graphql-eslint": graphqlPlugin
    }
  },
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tsPlugin.parser
      }
    }
  },
  // {
  //   // Setup recommended config for schema files
  //   files: [SCHEMA_PATH],
  //   ...graphqlPlugin.flatConfigs['schema-recommended'],
  // },
  {
    // Setup recommended config for operations files
    files: ["src/**/*.{graphql,gql}"],
    ...graphqlPlugin.flatConfigs["operations-recommended"]
  },
  {
    ignores: ["_playground/**", "dist/**/*.js", "public/**/*.js"]
  },
  prettierPlugin
)
