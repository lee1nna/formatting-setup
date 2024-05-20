module.exports = {
    root: true,
    plugins: ["import", "react"],
    extends: ["airbnb", "plugin:import/recommended", "plugin:react/recommended", "plugin:prettier/recommended",],
    rules: {
        "no-console": "error"
    },
    env: {
        "browser": true,
        "node": true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
    }
};

