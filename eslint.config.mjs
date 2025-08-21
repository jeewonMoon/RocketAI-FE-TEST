export default [
    eslint.configs.recommended,
    prettierConfig,
    {
        files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
        ignores: ["/node_modules/**", ".next/**"],
        rules: {
            semi: "error",
            quotes: "error",
            "no-duplicate-imports": "error",
            "no-unused-vars": "off",
            "no-console": "warn",
            "prefer-const": "error",
        }
    }
]