import { globals } from "../globals.js";
import * as Utilities from "../utilities.js";
const instructions = Object.freeze(`
To generate a birthday, enter the character's age in the input below and click the 'Generate Birthday' button.
The birthday, along with how long ago it was, will be displayed directly below this sentence.
`);
const randomOption = "Random";
class SexGeneratorElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.Render();
    }
    Render() {
        this.BuildSelectBoxes();
        const inputContainer = document.createElement("div");
        this.appendChild(inputContainer);
        const table = document.createElement("table");
        table.classList.add("invisible");
        inputContainer.appendChild(table);
        let row = document.createElement("tr");
        table.appendChild(row);
        row.appendChild(Utilities.CreateTableData("<b>Race:</b>"));
        let data = document.createElement("td");
        data.appendChild(this.raceSelect);
        row.appendChild(data);
        row = document.createElement("tr");
        table.appendChild(row);
        row.appendChild(Utilities.CreateTableData("<b>Sex:</b>"));
        data = document.createElement("td");
        data.appendChild(this.sexSelect);
        row.appendChild(data);
        row = document.createElement("tr");
        table.appendChild(row);
        data = document.createElement("td");
        data.colSpan = 2;
        this.isHeroicCheckbox = document.createElement("input");
        this.isHeroicCheckbox.type = "checkbox";
        this.isHeroicCheckbox.id = "is-heroic-checkbox";
        data.appendChild(this.isHeroicCheckbox);
        const isHeroicLabel = document.createElement("label");
        isHeroicLabel.htmlFor = "is-heroic-checkbox";
        isHeroicLabel.textContent = "Heroic Dick Size";
        data.appendChild(isHeroicLabel);
        row.appendChild(data);
        row = document.createElement("tr");
        table.appendChild(row);
        data = document.createElement("td");
        data.colSpan = 2;
        const button = document.createElement("button");
        button.textContent = "Generate Sexual Attributes";
        button.onclick = () => this.OnGenerateClick();
        data.appendChild(button);
        row.appendChild(data);
        this.output = document.createElement("div");
        this.appendChild(this.output);
    }
    BuildSelectBoxes() {
        this.races = [];
        this.raceSelect = document.createElement("select");
        this.sexSelect = document.createElement("select");
        this.raceSelect.id = "race-select-box";
        this.sexSelect.id = "sex-select-box";
        let option;
        option = document.createElement("option");
        option.value = randomOption;
        option.text = randomOption;
        this.raceSelect.appendChild(option);
        globals.sexualCharacteristics.forEach((characteristic) => characteristic.races.forEach((race) => {
            option = document.createElement("option");
            option.value = race;
            option.text = race;
            this.raceSelect.appendChild(option);
            this.races.push({
                races: [race],
                dickLength: characteristic.dickLength,
                heroicDickLength: characteristic.heroicDickLength,
                breastSize: characteristic.breastSize,
            });
        }));
        option = document.createElement("option");
        option.value = randomOption;
        option.text = randomOption;
        this.sexSelect.appendChild(option);
        globals.sexRanges.forEach((sexRange) => {
            option = document.createElement("option");
            option.value = sexRange.value;
            option.text = sexRange.value;
            this.sexSelect.appendChild(option);
        });
    }
    OnGenerateClick() {
        const sexInfo = this.GenerateSexualCharacteristics();
        this.output.innerHTML = "";
        const p = document.createElement("p");
        this.output.appendChild(p);
        p.innerHTML = '<i class="power">Race:</i> ' + sexInfo.race + '<br/>\n<i class="power">Sex:</i> ' + sexInfo.sex;
        if (sexInfo.dickLength) {
            p.innerHTML += '<br/>\n<i class="power">Dick Length:</i> ' + sexInfo.dickLength + '"';
        }
        if (sexInfo.cupSize) {
            p.innerHTML += '<br/>\n<i class="power">Cup Size:</i> ' + sexInfo.cupSize;
        }
    }
    GenerateSexualCharacteristics() {
        let race;
        let sex;
        if (this.raceSelect.value === randomOption) {
            race = this.races[Utilities.getRndInteger(0, this.races.length - 1)];
        }
        else {
            let toFind = this.raceSelect.value;
            race = this.races.find((race) => race.races.firstElement() === toFind);
        }
        if (this.sexSelect.value === randomOption) {
            sex = this.GetRandomSex();
        }
        else {
            sex = globals.sexRanges.find((sexRange) => sexRange.value === this.sexSelect.value);
        }
        const toReturn = { race: race.races.firstElement(), sex: sex.value };
        if (sex.hasDick) {
            toReturn.dickLength = this.isHeroicCheckbox.checked ? race.heroicDickLength.roll().total : race.dickLength.roll().total;
        }
        if (sex.hasBoobs) {
            if (race.breastSize) {
                const boobsRoll = race.breastSize.roll().total;
                const breastSize = globals.breastSizes.find((size) => size.roll === boobsRoll);
                toReturn.breastSize = breastSize.inchesSize;
                toReturn.cupSize = breastSize.cupSize;
            }
            else {
                toReturn.breastSize = 0;
                toReturn.cupSize = "N/A";
            }
        }
        return toReturn;
    }
    GetRandomSex() {
        const roll = Utilities.getRndInteger(globals.sexRanges.firstElement().from, globals.sexRanges.lastElement().to);
        return globals.sexRanges.find((sexRange) => Utilities.isInRange(roll, sexRange.from, sexRange.to));
    }
}
customElements.define("ap-sex-generator", SexGeneratorElement);
//# sourceMappingURL=ap-sex-generator.js.map