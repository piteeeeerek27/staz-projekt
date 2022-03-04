export const Context = () => {
	const toString = require("../html/_context.html");
	const div = document.createElement("div");
	div.innerHTML = toString.default;
	return div;
};
