// import { Nav } from "./Nav";
// import { Context } from "./Context";
// import { Aside } from "./Aside";
import "../styles/main.scss";

const mainContent = document.querySelector(".leftSection");
const mainDiv = document.getElementById("mainDiv");
const section = document.querySelector(".sectionDiv");

// NAV TABS
const tabHome = document.querySelector(".tabHome");
const tabAboutMe = document.querySelector(".tabAboutMe");
const tabProjects = document.querySelector(".tabProjects");
const tabsTechnologies = document.querySelector(".tabTechnologies");
// TABS SECTIONS
const text = document.querySelector(".text");
const textAboutMe = document.querySelector(".textAboutMe");
const textProjects = document.querySelector(".textProjects");
const textTechnologies = document.querySelector(".textTechnologies");

const sectionn = document.querySelector(".section");
class Project {
	constructor() {
		this.run();
		this.toggleSidebar();
	}
	run() {
		textAboutMe.remove();
		textProjects.remove();
		textTechnologies.remove();
		// mainContent.appendChild(this.Nav());
		// mainContent.appendChild(this.Context());
		mainDiv.appendChild(this.Aside());
		this.clicked();
	}
	clicked() {
		tabHome.addEventListener("click", () => {
			textAboutMe.remove();
			textProjects.remove();
			textTechnologies.remove();
			sectionn.appendChild(text);
		});
		tabAboutMe.addEventListener("click", () => {
			text.remove();
			textProjects.remove();
			textTechnologies.remove();
			sectionn.appendChild(textAboutMe);
		});
		tabProjects.addEventListener("click", () => {
			text.remove();
			textAboutMe.remove();
			textTechnologies.remove();
			sectionn.appendChild(textProjects);
		});
		tabsTechnologies.addEventListener("click", () => {
			text.remove();
			textAboutMe.remove();
			textProjects.remove();
			sectionn.appendChild(textTechnologies);
		});
	}
	Nav: any = () => {
		const toString = require("../html/nav.html");
		const nav = document.querySelector(".leftSectionNav");
		nav.innerHTML = toString.default;
		return nav;
	};
	Context: any = () => {
		const toString = require("../html/context.html");
		const section = document.querySelector(".sectionDiv");
		section.innerHTML = toString.default;
		return section;
	};
	Aside: any = () => {
		const toString = require("../html/aside.html");
		const div = document.querySelector(".asideDiv");
		div.classList.add("asideDiv");
		div.innerHTML = toString.default;
		return div;
	};

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
