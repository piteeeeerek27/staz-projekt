import { Header } from "./Header";
import "../styles/main.scss";

class Project {
	constructor() {
		Header();
	}
}
new Project();

console.log("header", Header());
