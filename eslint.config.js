import antfu from "@antfu/eslint-config"
import perfectionist from "eslint-plugin-perfectionist"

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: "double",
    },
    typescript: true,
  },
  {
    plugins: [perfectionist.configs["recommended-alphabetical"]],
    rules: {
      "no-console": "off",
      "no-empty-pattern": "off",
      "node/prefer-global/process": "off",
      "perfectionist/sort-objects": "error",
      "ts/no-redeclare": "off",
      "unicorn/throw-new-error": "off",
      "unused-imports/no-unused-imports": "error",
    },
  },
  {
    rules: {
      "ts/consistent-type-definitions": "off",
    },
  },
)
