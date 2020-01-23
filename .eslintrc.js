module.exports = {
	root: true,
	extends: ['airbnb', 'prettier', 'prettier/react'],
	plugins: [
		'react',
		'jsx-a11y',
		'import',
		'eslint-plugin-prettier',
		'eslint-plugin-react'
	],
	settings: {
		'import/resolver': {
			"babel-module": {}
		},
	},
	rules: {
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [
					".js",
					".jsx"
				]
			}
		],
		"prettier/prettier": [
			"error",
			{
				trailingComma: "es5",
				singleQuote: true,
				printWidth: 100,
				jsxSingleQuote: false,
				semi: true,
				jsxBracketSameLine: true
			}
		]
	},
};