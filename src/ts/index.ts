import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Context } from "./Context";
import { Aside } from "./Aside";
import "../styles/main.scss";

const mainContent = document.querySelector(".leftSection");
const sidebar = document.querySelector(".sidebar");
const mainDiv = document.getElementById("mainDiv");

class Project {
	constructor() {
		this.Nav();
		this.Context();
		this.Footer();
		this.Aside();
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
	Footer() {
		mainContent.appendChild(Footer());
	}
}
new Project();
