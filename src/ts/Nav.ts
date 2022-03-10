export const Nav: any = () => {
	const toString = require("../html/nav.html");
	const nav = document.querySelector(".leftSectionNav");
	nav.innerHTML = toString.default;
	return nav;
};
