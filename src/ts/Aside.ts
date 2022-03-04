export const Aside = () => {
	const toString = require("../html/_aside.html");
	const div = document.createElement("div");
	div.classList.add("asideDiv");
	div.innerHTML = toString.default;
	return div;
};
