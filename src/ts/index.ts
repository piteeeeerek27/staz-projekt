// import { Nav } from "./Nav";
// import { Context } from "./Context";
// import { Aside } from "./Aside";
import "../styles/main.scss";

// const mainContent = document.querySelector(".leftSection");
// const section = document.querySelector(".sectionDiv");

class Project {
	mainDiv = document.getElementById("mainDiv");
	// NAV TABS
	tabHome = document.querySelector(".tabHome");
	tabAboutMe = document.querySelector(".tabAboutMe");
	tabProjects = document.querySelector(".tabProjects");
	tabsTechnologies = document.querySelector(".tabTechnologies");
	// TABS SECTIONS
	text = document.querySelector(".text");
	textAboutMe = document.querySelector(".textAboutMe");
	textProjects = document.querySelector(".textProjects");
	textTechnologies = document.querySelector(".textTechnologies");

	sectionn = document.querySelector(".section");

	constructor() {
		this.run();
		this.toggleSidebar();
	}
	run() {
		this.textAboutMe.remove();
		this.textProjects.remove();
		this.textTechnologies.remove();
		// mainContent.appendChild(this.Nav());
		// mainContent.appendChild(this.Context());
		this.Aside();
		this.clicked();
	}
	clicked() {
		this.tabHome.addEventListener("click", () => {
			this.textAboutMe.remove();
			this.textProjects.remove();
			this.textTechnologies.remove();
			this.sectionn.appendChild(this.text);
		});
		this.tabAboutMe.addEventListener("click", () => {
			this.text.remove();
			this.textProjects.remove();
			this.textTechnologies.remove();
			this.sectionn.appendChild(this.textAboutMe);
		});
		this.tabProjects.addEventListener("click", () => {
			this.text.remove();
			this.textAboutMe.remove();
			this.textTechnologies.remove();
			this.sectionn.appendChild(this.textProjects);
		});
		this.tabsTechnologies.addEventListener("click", () => {
			this.text.remove();
			this.textAboutMe.remove();
			this.textProjects.remove();
			this.sectionn.appendChild(this.textTechnologies);
			const progressBar =
				document.querySelectorAll<HTMLElement>(".progress-bar");
			progressBar.forEach((bar) => {
				bar.style.width = "0%";
				let progressEndValue = +bar.dataset.progress;
				let progressValue = 0;
				let speed = 70;
				let progress = setInterval(() => {
					progressValue++;
					bar.style.opacity = "1";
					bar.style.width = progressValue.toString() + "%";
					bar.innerHTML = `<span class="progressSpan">${progressValue}%</span>`;
					if (progressValue == progressEndValue) {
						clearInterval(progress);
					}
				}, speed);
			});
		});
	}

	// Nav: any = () => {
	// 	const toString = require("../html/nav.html");
	// 	const nav = document.querySelector(".leftSectionNav");
	// 	nav.innerHTML = toString.default;
	// 	return nav;
	// };
	// Context: any = () => {
	// 	const toString = require("../html/context.html");
	// 	const section = document.querySelector(".sectionDiv");
	// 	section.innerHTML = toString.default;
	// 	return section;
	// };
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
			sidebar.style.display = "flex";
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
