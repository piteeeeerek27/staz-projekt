export const Nav = () => {
	const toString = require("../html/_nav.html");
	const div = document.createElement("div");
	div.innerHTML = toString.default;
	return div;
};
