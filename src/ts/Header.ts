export const Header = () => {
	const toString = require("../html/_header.html");
	const header = document.createElement("header");
	header.innerHTML = toString.default;
	return header;
};
