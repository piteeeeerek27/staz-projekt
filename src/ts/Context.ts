export const Context = () => {
	const toString = require("../html/_footer.html");
	const context = document.createElement("div");
	context.innerHTML = toString.default;
	return context;
};
