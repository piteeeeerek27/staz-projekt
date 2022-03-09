export const Context: any = () => {
	const toString = require("../html/context.html");
	// console.log("toSTring", toString);

	const mainDiv = document.createElement("div");
	mainDiv.classList.add("sectionDiv");
	mainDiv.innerHTML = toString.default;
	return mainDiv;
};
