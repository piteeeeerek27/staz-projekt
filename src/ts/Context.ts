export const Context = () => {
	const toString = require("../html/_context.html");
	const mainDiv = document.createElement("div");
	mainDiv.classList.add("sectionDiv");
	mainDiv.innerHTML = toString.default;
	return mainDiv;
};
