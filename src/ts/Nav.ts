export const Nav: any = () => {
	const toString = require("../html/nav.html");
	const nav = document.createElement("div");
	nav.innerHTML = toString.default;
	return nav;
};
