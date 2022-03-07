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
		// this.Aside();
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
	ShowSidebar() {}
}
new Project();
