export const Footer = () => {
	const toString = require("../html/_footer.html");
	const footer = document.createElement("footer");
	footer.innerHTML = toString.default;
	return footer;
};
