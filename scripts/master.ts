import { Auth } from "./auth.js";
import "./custom-elements/custom-elements.js";
import { globals, LoadGlobalsJson } from "./globals.js";
import * as io from "./io.js";

// ****************** AUTH FUNCTIONS *************************
export function onAuthButtonClick() {
	let authInput = document.getElementById("auth-input") as HTMLInputElement;
	Auth.SetAuthByAccessCode(authInput.value);
	authInput.value = "";
}

export function OnAuthKeyDown(event: KeyboardEvent) {
	if (event.key === "Enter") {
		onAuthButtonClick();
	}
}

// ******************** "ON LOAD" ****************************
async function InitialSiteLoad() {
	await LoadGlobalsJson();

	// index.html
	await Promise.all([
		io.LoadIntoElement("header.html", "#header").then(() => {
			(document.getElementById("auth-input") as HTMLInputElement).onkeyup = OnAuthKeyDown;
			(document.getElementById("authorize-button") as HTMLButtonElement).onclick = onAuthButtonClick;
		}),
		io.LoadIntoElement("footer.html", "#footer"),
		io.OnInitialLoad(),
	]);
}

io.SetTitlePostfix(globals.titlePostfix);
InitialSiteLoad();
Auth.UpdateCurrentAuth();
onpopstate = io.OnPopState;
