import { Nav } from "./Nav";
import { Context } from "./Context";
import { Aside } from "./Aside";
import "../styles/main.scss";

interface Bar {
	endValue: number;
	value: number;
	speed: number;
}

enum Displays {
	block = "block",
	flex = "flex",
	none = "none",
}

// console.log("aboutMeText", aboutMeText);
// console.log("projectsText", projectsText);
// console.log("technologiesText", technologiesText);

class Project {
	mainDiv = document.querySelector(".mainDiv");
	mainContent = document.querySelector(".leftSection");
	section = document.querySelector(".sectionDiv");
	aside = document.querySelector<HTMLElement>(".asideDiv");
	sectionn = Context().querySelector(".section");

	// NAV TABS
	homeTab = Nav().querySelector(".tabHome");
	aboutMeTab = Nav().querySelector(".tabAboutMe");
	projectsTab = Nav().querySelector(".tabProjects");
	technologiesTab = Nav().querySelector(".tabTechnologies");
	// TEXT SECTIONS
	homeText = Context().querySelector(".text");
	aboutMeText = Context().querySelector(".textAboutMe");
	projectsText = Context().querySelector(".textProjects");
	technologiesText = Context().querySelector(".textTechnologies");

	constructor() {
		this.run();
		this.toggleSidebar();
	}
	run() {
		this.mainContent.appendChild(Nav());
		this.mainContent.appendChild(Context());
		this.aside.appendChild(Aside());
		this.clicked();
	}

	clicked() {
		function listener(
			tab,
			removeText1,
			removeText2,
			removeText3,
			section,
			appendText,
		) {
			return tab.addEventListener("click", () => {
				removeText1.remove();
				removeText2.remove();
				removeText3.remove();
				section.appendChild(appendText);
			});
		}
		// HOME LISTENER
		listener(
			this.homeTab,
			this.aboutMeText,
			this.projectsText,
			this.technologiesText,
			this.sectionn,
			this.homeText,
		);
		// ABOUT ME LISTENER
		listener(
			this.aboutMeTab,
			this.homeText,
			this.projectsText,
			this.technologiesText,
			this.sectionn,
			this.aboutMeText,
		);
		// PROJECTS LISTENER
		listener(
			this.projectsTab,
			this.homeText,
			this.aboutMeText,
			this.technologiesText,
			this.sectionn,
			this.projectsText,
		);
		this.technologiesTab.addEventListener("click", () => {
			console.log("CLICK TAB");
			this.homeText.remove();
			this.aboutMeText.remove();
			this.projectsText.remove();
			this.sectionn.appendChild(this.technologiesText);

			const progressBar =
				document.querySelectorAll<HTMLElement>(".progress-bar");

			progressBar.forEach((bar) => {
				const values: Bar = {
					endValue: +bar.dataset.progress,
					value: 0,
					speed: 50,
				};
				bar.style.width = "0%";
				let progress = setInterval(() => {
					values.value++;
					bar.style.opacity = "1";
					bar.style.width = values.value.toString() + "%";
					bar.innerHTML = `<span class="progressSpan">${values.value}%</span>`;
					if (values.value == values.endValue) {
						clearInterval(progress);
					}
				}, values.speed);
			});
		});
	}
	toggleSidebar() {
		const showSidebar = document.getElementById("showSidebar");
		const hideSidebar = document.getElementById("hideSidebar");
		showSidebar.addEventListener("click", () => {
			this.aside.style.display = Displays.flex;
			showSidebar.style.display = Displays.none;
			hideSidebar.style.display = Displays.block;
		});
		hideSidebar.addEventListener("click", () => {
			this.aside.style.display = Displays.none;
			showSidebar.style.display = Displays.block;
			hideSidebar.style.display = Displays.none;
		});
	}
}
new Project();
