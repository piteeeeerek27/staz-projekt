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
	aside = document.querySelector(".asideDiv");
	// asideDiv = this.aside.querySelector(".aside");
	sectionn = document.querySelector(".section");
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

	constructor() {
		this.run();
		this.toggleSidebar();
	}
	run() {
		this.mainContent.appendChild(Nav());
		this.mainContent.appendChild(Context());
		this.aside.appendChild(Aside());

		// NULL
		// this.textAboutMe.remove();
		// this.textProjects.remove();
		// this.textTechnologies.remove();
		// this.clicked();
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
			this.tabHome,
			this.textAboutMe,
			this.textProjects,
			this.textTechnologies,
			this.sectionn,
			this.text,
		);
		// ABOUT ME LISTENER
		listener(
			this.tabAboutMe,
			this.text,
			this.textProjects,
			this.textTechnologies,
			this.sectionn,
			this.textAboutMe,
		);
		// PROJECTS LISTENER
		listener(
			this.tabProjects,
			this.text,
			this.textAboutMe,
			this.textTechnologies,
			this.sectionn,
			this.textProjects,
		);
		this.tabsTechnologies.addEventListener("click", () => {
			this.text.remove();
			this.textAboutMe.remove();
			this.textProjects.remove();
			this.sectionn.appendChild(this.textTechnologies);

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
		const asdd = this.aside.querySelector<HTMLElement>(".aside");
		showSidebar.addEventListener("click", () => {
			asdd.style.display = Displays.flex;
			showSidebar.style.display = Displays.none;
			hideSidebar.style.display = Displays.block;
		});
		hideSidebar.addEventListener("click", () => {
			asdd.style.display = Displays.none;
			showSidebar.style.display = Displays.block;
			hideSidebar.style.display = Displays.none;
		});
	}
}
new Project();
