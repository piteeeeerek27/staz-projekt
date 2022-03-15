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
class Project {
	mainDiv = document.querySelector(".mainDiv");
	mainContent = document.querySelector(".leftSection");
	section = document.querySelector(".sectionDiv");
	aside = document.querySelector<HTMLElement>(".asideDiv");

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
		const sectionn = document.querySelector(".section-text-div");
		// NAV TABS
		const homeTab = document.querySelector(".tabHome");
		const aboutMeTab = document.querySelector(".tabAboutMe");
		const projectsTab = document.querySelector(".tabProjects");
		const technologiesTab = document.querySelector(".tabTechnologies");
		// TEXT SECTIONS
		const homeText = document.querySelector(".text");
		const aboutMeText = document.querySelector(".textAboutMe");
		const projectsText = document.querySelector(".textProjects");
		const technologiesText =
			document.querySelector<HTMLElement>(".textTechnologies");
		function listener(
			tab,
			removeText1,
			removeText2,
			removeText3,
			section,
			appendText,
			display,
		) {
			return tab.addEventListener("click", () => {
				removeText1.remove();
				removeText2.remove();
				removeText3.remove();
				appendText.style.display = display;
				section.appendChild(appendText);
			});
		}
		// HOME LISTENER
		listener(
			homeTab,
			aboutMeText,
			projectsText,
			technologiesText,
			sectionn,
			homeText,
			Displays.flex,
		);
		// ABOUT ME LISTENER
		listener(
			aboutMeTab,
			homeText,
			projectsText,
			technologiesText,
			sectionn,
			aboutMeText,
			Displays.flex,
		);
		// PROJECTS LISTENER
		listener(
			projectsTab,
			homeText,
			aboutMeText,
			technologiesText,
			sectionn,
			projectsText,
			Displays.block,
		);

		technologiesTab.addEventListener("click", () => {
			homeText.remove();
			aboutMeText.remove();
			projectsText.remove();
			technologiesText.style.display = Displays.flex;
			sectionn.appendChild(technologiesText);

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
		function listenerSidebar(
			sidebar1,
			sidebar2,
			aside,
			display1,
			display2,
			display3,
		) {
			return sidebar1.addEventListener("click", () => {
				aside.style.display = display1;
				sidebar1.style.display = display2;
				sidebar2.style.display = display3;
			});
		}
		listenerSidebar(
			showSidebar,
			hideSidebar,
			this.aside,
			Displays.flex,
			Displays.none,
			Displays.block,
		);
		listenerSidebar(
			hideSidebar,
			showSidebar,
			this.aside,
			Displays.none,
			Displays.none,
			Displays.block,
		);
	}
}
new Project();
