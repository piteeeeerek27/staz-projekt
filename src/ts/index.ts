import { Nav } from "./Nav";
import { Footer } from "./Footer";
import "../styles/main.scss";

const indexDiv = document.getElementById("mainDiv");

class Project {
	constructor() {
		this.Nav();
	}
	Nav() {
		indexDiv.appendChild(Nav());
	}
	Foooter() {
		indexDiv.appendChild(Footer());
	}
}
new Project();
