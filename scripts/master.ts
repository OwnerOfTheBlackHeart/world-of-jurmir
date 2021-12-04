import { Auth } from "./auth.js";
import "./custom-elements/custom-elements.js";
import { globals } from "./globals.js";
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

// ************* NAVIGATION INITIALIZATION *******************
io.SetTitlePostfix(globals.titlePostfix);

// index.html
io.LoadIntoElement("header.html", "#header").then(() => {
	(document.getElementById("auth-input") as HTMLInputElement).onkeyup = OnAuthKeyDown;
	(document.getElementById("authorize-button") as HTMLButtonElement).onclick = onAuthButtonClick;
});
io.LoadIntoElement("footer.html", "#footer");
io.OnInitialLoad();

Auth.UpdateCurrentAuth();
onpopstate = io.OnPopState;
