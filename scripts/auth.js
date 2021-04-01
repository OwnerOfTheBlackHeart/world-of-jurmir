let onAuthChangedValue = [];
export class Auth {
    constructor(name, accessCode, permissions) {
        this.name = name;
        this.accessCode = accessCode;
        this.permissions = permissions;
    }
    static get currentAuth() {
        if (localStorage.currentAuth && !(localStorage.currentAuth === "undefined")) {
            return JSON.parse(localStorage.currentAuth);
        }
        else {
            return undefined;
        }
    }
    static set currentAuth(val) {
        if (val instanceof Auth || val === undefined) {
            localStorage.currentAuth = JSON.stringify(val);
            Auth.onAuthChangedList.forEach((onAuthChanged) => onAuthChanged(val));
        }
    }
    static get onAuthChangedList() {
        if (onAuthChangedValue) {
            return onAuthChangedValue;
        }
        else {
            return [];
        }
    }
    static set onAuthChangedList(val) {
        onAuthChangedValue = val;
    }
    static CheckAccessLevel(permissions) {
        if (permissions === "none" && !Auth.currentAuth) {
            return true;
        }
        else if (permissions === "none") {
            return false;
        }
        else if (!Auth.currentAuth) {
            return false;
        }
        else if (permissions === "any" && Auth.currentAuth) {
            return true;
        }
        else {
            const permissionList = permissions.split(" ");
            return (Auth.currentAuth.permissions.some((authPermission) => authPermission === "all") ||
                Auth.currentAuth.permissions.some((authPermission) => {
                    return permissionList.some((permission) => permission === authPermission);
                }));
        }
    }
    static SetAuthByAccessCode(accessCode) {
        if (accessCode === undefined) {
            Auth.currentAuth = undefined;
            return undefined;
        }
        let foundAuth = authList.find((auth) => auth.accessCode === accessCode);
        if (!foundAuth) {
            return undefined;
        }
        Auth.currentAuth = foundAuth;
        return Auth.currentAuth;
    }
    static UpdateCurrentAuth() {
        if (Auth.currentAuth) {
            Auth.currentAuth = authList.find((auth) => auth.name === Auth.currentAuth.name);
        }
    }
}
const authList = Object.freeze([
    new Auth("GM", "my players will never see this", ["all"]),
    new Auth("Cody", "Al1ce", [
        "cody",
        "luta",
        "huntsing-down-the-cult",
        "nesserr-black-personality",
        "camilia-alignment",
        "camilia-personality",
        "nera",
    ]),
    new Auth("Dan", "Coolguy420", ["dan", "aaron-full"]),
    new Auth("Keith", "Random26", ["wolf", "sariel"]),
    new Auth("Liam", "SawIt", ["aaron-full", "kali-spell-list", "kali-rituals", "kali"]),
    new Auth("M3t4", "Noble Rising", ["pigman", "m3t4"]),
    new Auth("Austin", "hearMeRoar", ["austin", "aaron-full", "draggin"]),
    new Auth("Dora", "giveFood", ["dora", "aaron-full"]),
]);
//# sourceMappingURL=auth.js.map