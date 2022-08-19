module.exports = {
	trailingComma: "all",
	tabWidth: 4,
	semi: true,
	singleQuote: false,
	endOfLine: "auto",
	plugins: [require.resolve("@prettier/plugin-pug")],
	pugWrapAttributesThreshold: -1,
};
