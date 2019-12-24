import { PageInfo } from "./page-info.js";
import { nobleNav } from "../campaigns/noble-rising/scripts/nav.js";
import { sbjNav } from "../campaigns/the-stars-beyond-jurmir/scripts/nav.js";
import { aaronNav } from "../campaigns/the-story-of-aaron/scripts/nav.js";

export const pages = [
	new PageInfo("home_button", "home.html", "Home", "home"),
	new PageInfo(undefined, "templates/character.html", "Character Template", "template-character"),

	new PageInfo(undefined, "pantheon/planes/material-plane.html", "The Material Plane", "material-plane"),
	new PageInfo(undefined, "pantheon/planes/dysvegr.html", "Dysvegr", "dysvegr"),
	new PageInfo(undefined, "pantheon/planes/horgrverold.html", "Horgrverold", "horgrverold"),
	new PageInfo(undefined, "pantheon/planes/frostgard.html", "Frostgard", "frostgard"),
	new PageInfo(undefined, "pantheon/planes/hell.html", "Hell", "hell"),
	new PageInfo(undefined, "pantheon/planes/the-void.html", "The Void", "the-void"),
	new PageInfo(undefined, "pantheon/planes/planes-connection.html", "How the Planes Connect", "planes-connect"),

	new PageInfo(undefined, "pantheon/sithrak.html", "Sithrak", "sithrak"),
	new PageInfo(undefined, "pantheon/durn.html", "Durn", "durn"),
	new PageInfo(undefined, "pantheon/feph.html", "Feph", "feph"),
	new PageInfo(undefined, "pantheon/kriotz.html", "Kriotz", "kriotz"),
	new PageInfo(undefined, "pantheon/kyranious.html", "Kyranious", "kyranious"),
	new PageInfo(undefined, "pantheon/zoltan.html", "Zoltan", "zoltan"),
	new PageInfo(undefined, "pantheon/lagos.html", "Lagos of Chronos", "lagos"),
	new PageInfo(undefined, "pantheon/hrefna.html", "Hrefna Aridottir", "hrefna"),
	new PageInfo(undefined, "pantheon/lindo.html", "Lindo, Sailor of the River Cain", "lindo"),
	new PageInfo(undefined, "pantheon/zigies.html", "Zigies, the Clockwork God", "zigies"),
	new PageInfo(undefined, "pantheon/god-types.html", "God Types", "god-types"),
	new PageInfo(undefined, "pantheon/the-red-king.html", "The Red King, Eater of Gods", "red-king"),

	new PageInfo(undefined, "pantheon/starfinder/fos.html", "Fos, God of Community", "fos"),
	new PageInfo(undefined, "pantheon/starfinder/hipha.html", "Hipha, Goddess of Technology and Knowledge", "hipha"),

	new PageInfo(undefined, "pantheon/history/creation-story.html", "The Story of Creation", "creation-story"),
	new PageInfo(undefined, "pantheon/history/the-drow.html", "How the Drow Came to Be", "the-drow"),

	new PageInfo(undefined, "homebrew/ranger-fix.html", "Ranger Class Fix for D&D 3.5e", "ranger-fix"),
	new PageInfo(undefined, "homebrew/half-races-catalog.html", "Half Races Catalog", "half-races-catalog"),
	new PageInfo(undefined, "homebrew/guild-management-system.html", "Guild Management System", "guild-management-system"),
	new PageInfo(undefined, "homebrew/gms-consequences.html", "Guild Management System Consequences", "gms-consequences"),
	new PageInfo(undefined, "homebrew/3_5-feats.html", "3.5/Pathfinder Homebrew Feats", "3.5-homebrew-feats"),
	new PageInfo(undefined, "homebrew/magic-items.html", "Magic Items", "magic-items"),
	new PageInfo(undefined, "homebrew/bright-one.html", "The Bright One Prestige Class", "bright-one"),
	new PageInfo(undefined, "homebrew/lesser-drow.html", "Lesser Drow", "lesser-drow"),

	new PageInfo(undefined, "https://drive.google.com/open?id=1ig8Abc2VDQf-OX7RUamdHbAtrCKBdyVNs7tkjTxr8Ao", "", "pregnancy", true),
	new PageInfo(undefined, "https://drive.google.com/drive/folders/14hpbIxtHNWXO2PcbTgnrV0cKlz2SzyLV?usp=sharing", "", "3.5-homebrew", true),
	new PageInfo(undefined, "https://drive.google.com/drive/folders/1BJhOezdxdbN7pBTSjqmTLgEm2blqt6qP?usp=sharing", "", "aaron-map", true),
	new PageInfo(undefined, "http://www.d20srd.org/srd/monsters/elf.htm", "", "drow-traits", true),
	new PageInfo(undefined, "http://www.d20srd.org/srd/classes/ranger.htm", "", "3.5-ranger-page", true),

	new PageInfo(undefined, "http://www.d20srd.org/srd/equipment/goodsAndServices.htm#toolsAndSkillKits", "", "srd-tools-and-kits", true),

	new PageInfo(undefined, "images/feph.jpg", "", "feph-image"),
	new PageInfo(undefined, "images/fephinite-general.jpg", "", "fephinite-general-image"),
	new PageInfo(undefined, "images/fephinite-inquisitor.jpg", "", "fephinite-inquisitor-image"),
	new PageInfo(undefined, "images/feph-wander-form.jpg", "", "feph-wander-form-image"),
	new PageInfo(undefined, "images/hrefna.jpg", "", "hrefna-image"),
	new PageInfo(undefined, "images/kriotz.jpg", "", "kriotz-image"),
	new PageInfo(undefined, "images/lagos.png", "", "lagos-image"),
	new PageInfo(undefined, "images/lagos-close-up.jpg", "", "lagos-close-up-image"),
	new PageInfo(undefined, "images/lindo.jpg", "", "lindo-image"),
	new PageInfo(undefined, "images/sithrak.jpg", "", "sithrak-image"),
	new PageInfo(undefined, "images/zigies.jpg", "", "zigies-image"),
	new PageInfo(undefined, "images/zigies-constructor.jpg", "", "zigies-constructor-image"),
	new PageInfo(undefined, "images/zoltan.png", "", "zoltan-image"),
	new PageInfo(undefined, "images/the-red-king.jpeg", "", "the-red-king-image"),
	new PageInfo(undefined, "images/kyranious.jpg", "", "kyranious-image")
].concat(aaronNav, sbjNav, nobleNav);

export function GetPageInfoFromUri(uri: string) {
	return pages.find(pageInfo => {
		return pageInfo.url === uri;
	});
}

export function GetPageInfoFromName(name: string) {
	return pages.find(pageInfo => {
		return pageInfo.name === name;
	});
}
