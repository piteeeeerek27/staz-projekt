export const Context: any = () => {
	const toString = require("../html/context.html");
	const section = document.createElement("div");
	section.classList.add("divSection");
	section.innerHTML = toString.default;
	return section;
};
