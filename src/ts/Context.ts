export const Context: any = () => {
	const toString = require("../html/context.html");
	const mainDiv = document.createElement("div");
	mainDiv.classList.add("sectionDiv");
	mainDiv.innerHTML = toString.default;
	return mainDiv;
};
