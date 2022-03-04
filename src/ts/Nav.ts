export const Nav = () => {
	const toString = require("../html/_nav.html");
	const mainDiv = document.createElement("div");
	mainDiv.innerHTML = toString.default;
	return mainDiv;
};
