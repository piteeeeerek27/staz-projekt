export const Footer = () => {
	const toString = require("../html/_footer.html");
	const mainDiv = document.createElement("div");
	mainDiv.innerHTML = toString.default;
	return mainDiv;
};
