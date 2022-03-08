import { Nav } from "./Nav";
import { Context } from "./Context";
import { Aside } from "./Aside";
import "../styles/main.scss";

const mainContent = document.querySelector(".leftSection");
const mainDiv = document.getElementById("mainDiv");

enum displays {
	grid = "none",
	block = "none",
	none = "none",
}

class Project {
	constructor() {
		this.run();
		this.toggleSidebar();
	}
	run() {
		mainContent.appendChild(Nav());
		mainContent.appendChild(Context());
		mainDiv.appendChild(Aside());
	}
	toggleSidebar() {
		const showSidebar = document.getElementById("showSidebar");
		const hideSidebar = document.getElementById("hideSidebar");
		const sidebar = document.getElementById("aside");
		showSidebar.addEventListener("click", () => {
			sidebar.style.display = "grid";
			showSidebar.style.display = "none";
			hideSidebar.style.display = "block";
		});
		hideSidebar.addEventListener("click", () => {
			sidebar.style.display = "none";
			showSidebar.style.display = "block";
			hideSidebar.style.display = "none";
		});
	}
}
new Project();
