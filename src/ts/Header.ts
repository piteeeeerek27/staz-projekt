export const Header = () => {
	const toString = require("../html/_header.html");
	const div = document.createElement("div");
	div.innerHTML = toString.default;
	return div;
};
