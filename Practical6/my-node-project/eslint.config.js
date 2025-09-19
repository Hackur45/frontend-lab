
/**  
 * @Eslint bna hai sirf JS aur Node ke liye, isliye we need to import globals from "globals" package
 and also import js from "@eslint/js" package.
*/


import globals from "globals";
import js from "@eslint/js";
import noConsoleLogRule from "./eslint-rules/no-console-log.js";

const customPlugin = {
    rules: {
        "no-console-log": noConsoleLogRule,
    },
};

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"], 
        ignores: ["node_modules/", "src/"], 
        languageOptions: {
            globals: { //not part of js, hence need to be added manually
                ...globals.node,
                ...globals.es2021,
            },
            ecmaVersion: 2021,
            sourceType: "module",
        },
        plugins: {
            custom: customPlugin,
        },
        rules: {
            "custom/no-console-log": "error",
            eqeqeq: "error",
            curly: "error",
            "no-var": "error",
            semi: ["error", "always"],
        },
    },
];
