let onAuthChangedValue: ((auth: Auth) => void)[] = [];

class Auth
{
	name: string;
	accessCode: string;
	permissions: string[];

    static get currentAuth(): Auth {
        if (localStorage.currentAuth && !(localStorage.currentAuth === 'undefined'))
        {
            return JSON.parse(localStorage.currentAuth);
        }
        else { return undefined; }
    }
    static set currentAuth(val: Auth) {
        if ((val instanceof Auth) || val === undefined) 
        { 
            localStorage.currentAuth = JSON.stringify(val); 
            Auth.onAuthChangedList.forEach(onAuthChanged => onAuthChanged(val)); 
        }
    }

    // This should be in the format of function(auth)
    static get onAuthChangedList() {
        if (onAuthChangedValue){ return onAuthChangedValue; }
        else { return []; }
    }
    static set onAuthChangedList(val) {
        onAuthChangedValue = val;
    }

    constructor(name: string, accessCode: string, permissions: string[])
    {
        this.name = name;
        this.accessCode = accessCode;
        this.permissions = permissions;
    }

    static CheckAccessLevel(permissions: string)
    {
        if ((permissions === "none") && !Auth.currentAuth) { return true; }
        else if (permissions === "none") { return false; }
        else if (!Auth.currentAuth) { return false; }
        else if ((permissions === "any") && Auth.currentAuth) { return true; }
        else 
        {
            const permissionList = permissions.split(" ");
            return Auth.currentAuth.permissions.some(authPermission => authPermission === "all") || 
                Auth.currentAuth.permissions.some(authPermission => {
                    return permissionList.some(permission => permission === authPermission);
                });
        }
    }

    static SetAuthByAccessCode(accessCode: string)
    {
        if (accessCode === undefined)
        {
            Auth.currentAuth = undefined;
            return undefined;
        }

        let foundAuth = authList.find(auth => auth.accessCode === accessCode);

        if (!foundAuth) { return undefined; }

        Auth.currentAuth = foundAuth;
        return Auth.currentAuth;
    }

    static UpdateCurrentAuth() {
        if (Auth.currentAuth) {
            Auth.currentAuth = authList.find(auth => auth.name === Auth.currentAuth.name);
        }
    }
}

const authList = Object.freeze([
    new Auth("GM", "my players will never see this", ["all"]),
    new Auth("Cody", "Al1ce", ["cody", "luta", "huntsing-down-the-cult"]),
    new Auth("Dan", "Coolguy420", ["dan", "aaron-full"]),
]);