export const Context: any = () => {
	const toString = require("../html/aboutMe.html");
	const section = document.querySelector(".sectionDivAboutMe");
	section.innerHTML = toString.default;
	return section;
};
