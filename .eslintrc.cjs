module.exports = {
    extends: ["standard"],
    plugins: ["only-warn"],
    rules: {
        semi: ["warn", "always"],
        indent: ["warn", 4],
        "no-unused-vars": ["warn"],
        "prefer-const": ["warn"],
        quotes: ["warn", "double"],
        "comma-dangle": ["off"],
        "multiline-ternary": ["off"]
    }
};

