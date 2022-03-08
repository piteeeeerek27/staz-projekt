export const Nav: any = () => {
	const toString = require("../html/nav.html");
	const mainDiv = document.createElement("div");
	mainDiv.innerHTML = toString.default;
	return mainDiv;
};
