module.exports = {
	'env': {
		'node': true,
		'commonjs': true
	},
	'extends': 'eslint:recommended',
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-unused-vars': 'off'
	},
	'parserOptions': {
		'ecmaVersion': 2020
	},
};