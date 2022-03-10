export const Aside: any = () => {
	const toString = require("../html/aside.html");
	const div = document.querySelector(".asideDiv");
	div.classList.add("asideDiv");
	div.innerHTML = toString.default;
	return div;
};
