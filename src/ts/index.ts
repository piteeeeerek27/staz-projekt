import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Context } from "./Context";
import "../styles/main.scss";

const indexDiv = document.getElementById("mainDiv");

class Project {
	constructor() {
		this.Nav();
		this.Context();
		this.Foooter();
	}
	Nav() {
		indexDiv.appendChild(Nav());
	}
	Foooter() {
		indexDiv.appendChild(Footer());
	}
	Context() {
		indexDiv.appendChild(Context());
	}
}
new Project();
console.log(Footer());
