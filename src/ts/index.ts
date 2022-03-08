import { Nav } from "./Nav";
import { Context } from "./Context";
import { Aside } from "./Aside";
import "../styles/main.scss";

const mainContent = document.querySelector(".leftSection");
const mainDiv = document.getElementById("mainDiv");

class Project {
	constructor() {
		this.Nav();
		this.Context();
		this.Aside();
		this.toggleSidebar();
	}
	Nav() {
		mainContent.appendChild(Nav());
	}
	Context() {
		mainContent.appendChild(Context());
	}
	Aside() {
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
			hideSidebar.style.display = "none";
			showSidebar.style.display = "block";
			sidebar.style.display = "none";
		});
	}
}
new Project();
