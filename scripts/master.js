import { Auth } from "./auth.js";
import "./custom-elements/custom-elements.js";
import { globals, LoadGlobalsJson } from "./globals.js";
import * as io from "./io.js";
export function onAuthButtonClick() {
    let authInput = document.getElementById("auth-input");
    Auth.SetAuthByAccessCode(authInput.value);
    authInput.value = "";
}
export function OnAuthKeyDown(event) {
    if (event.key === "Enter") {
        onAuthButtonClick();
    }
}
async function InitialSiteLoad() {
    await LoadGlobalsJson();
    await Promise.all([
        io.LoadIntoElement("header.html", "#header").then(() => {
            document.getElementById("auth-input").onkeyup = OnAuthKeyDown;
            document.getElementById("authorize-button").onclick = onAuthButtonClick;
        }),
        io.LoadIntoElement("footer.html", "#footer"),
        io.OnInitialLoad(),
    ]);
}
io.SetTitlePostfix(globals.titlePostfix);
InitialSiteLoad();
Auth.UpdateCurrentAuth();
onpopstate = io.OnPopState;
//# sourceMappingURL=master.js.map