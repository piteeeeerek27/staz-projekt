export const Context: any = () => {
	const toString = require("../html/context.html");
	const section = document.querySelector(".sectionDiv");
	section.innerHTML = toString.default;
	return section;
};
