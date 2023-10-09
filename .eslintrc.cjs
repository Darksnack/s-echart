/*
 * @Author:
 * @Date: 2023-10-08 13:39:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-08 16:02:01
 * @Description: 请填写简介
 */
module.exports = {
	env: { browser: true, es2021: true },
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-essential", "plugin:prettier/recommended"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "vue"],
	rules: {
		indent: ["off", 2, { SwitchCase: 1 }],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-unused-vars": 1,
		"no-console": 2,
		"no-debugger": 2,
		"vue/multi-word-component-names": "off",
		"@typescript-eslint/no-explicit-any": ["off"],
	},
};
