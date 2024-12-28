import { getDescendantProperty } from "../utilities.js";
import { globals } from "../globals.js";
import { Time } from "../time.js";
const instructions = Object.freeze(`
To generate a birthday, enter the character's age in the input below and click the 'Generate Birthday' button.
The birthday, along with how long ago it was, will be displayed directly below this sentence.
`);
class BirthdayGeneratorElement extends HTMLElement {
    get currentDateValue() {
        return this.getAttribute("current-date-value");
    }
    set currentDateValue(val) {
        this.setAttribute("current-date-value", val);
    }
    constructor() {
        super();
    }
    connectedCallback() {
        this.Render();
    }
    Render() {
        this.innerHTML = "";
        this.currentDate = getDescendantProperty(globals, this.currentDateValue);
        const bdayHeader = document.createElement("h4");
        bdayHeader.textContent = "Generate Birthday";
        bdayHeader.classList.add("birthday-header");
        this.appendChild(bdayHeader);
        const instructionsDisplay = document.createElement("p");
        instructionsDisplay.textContent = instructions;
        instructionsDisplay.classList.add("birthday-instructions");
        this.appendChild(instructionsDisplay);
        if (this.birthday) {
            const bdayDisplay = document.createElement("p");
            bdayDisplay.classList.add("birthday-display");
            bdayDisplay.innerText = `You're birthday is ${this.birthday.toString()}. It was ${Time.BuildDiffString(this.currentDate, this.birthday)}.`;
            this.appendChild(bdayDisplay);
        }
        this.ageInput = document.createElement("input");
        this.ageInput.type = "number";
        this.ageInput.classList.add("birthday-age-input");
        if (this.age) {
            this.ageInput.value = this.age.toString();
        }
        this.appendChild(this.ageInput);
        this.appendChild(document.createElement("br"));
        const generateButton = document.createElement("button");
        generateButton.textContent = "Generate Birthday";
        generateButton.onclick = (event) => this.OnGenerateBirthdayClicked(event);
        generateButton.classList.add("birthday-generate-button");
        this.appendChild(generateButton);
        this.appendChild(document.createElement("br"));
        const resetButton = document.createElement("button");
        resetButton.textContent = "Reset Generator";
        resetButton.onclick = (event) => {
            this.age = 0;
            this.birthday = undefined;
            this.Render();
        };
        resetButton.classList.add("birthday-reset-button");
        this.appendChild(resetButton);
    }
    OnGenerateBirthdayClicked(event) {
        const tempAge = this.ageInput.valueAsNumber;
        if (tempAge) {
            this.age = tempAge;
        }
        else {
            alert("The selected age must be a non-zero number");
            return;
        }
        this.birthday = this.GetRandomBirthday();
        this.Render();
    }
    GetRandomBirthday() {
        const month = Math.floor(Math.random() * 9);
        const day = Math.floor(Math.random() * 28);
        const year = this.currentDate.year - this.age;
        const birthday = new Time(day, month, year);
        if (!this.ValidateBirthday(birthday, this.currentDate, this.age)) {
            if (birthday.year - this.age > 0) {
                birthday.year = birthday.year - 1;
            }
            else {
                birthday.year = birthday.year + 1;
            }
        }
        return birthday;
    }
    ValidateBirthday(birthday, currentDate, age) {
        return currentDate.Subtract(birthday).year === age;
    }
}
customElements.define("ap-birthday-generator", BirthdayGeneratorElement);
//# sourceMappingURL=ap-birthday-generator.js.map