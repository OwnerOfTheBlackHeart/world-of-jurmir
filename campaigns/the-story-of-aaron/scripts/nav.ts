/// <reference path="../../../scripts/page-info.ts" />

const aaronNav = [
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/main.html', 'The Story of Aaron', 'aaron-main'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/notes.html', 'The Story of Aaron Notes', 'aaron-notes'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/caravan.html', "Aaron's Caravan", 'aaron-caravan'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/timeline.html', "Story of Aaron Timeline", 'aaron-timeline'),

    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/chione.html', 'Chione of Ashborne, Hammer of Aaron', 'chione'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/erik.html', 'Erik Ericson, Son of Eric', 'erik'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/helmer.html', 'Helmer the Dragon Elf', 'helmer'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/hunts-on-stone.html', 'Hunts on Stone, Lizardfolk Ranger', 'hunts-on-stone'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/paavu.html', 'Paavu Flesheater Ogolakanu, Slayer of Great Beasts', 'paavu'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/drik-tik.html', 'Drik-Tik', 'drik-tik'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/rass.html', 'Rass the Half-Gnoll Lizard', 'rass'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/bhintel.html', 'Bhintel Coboryn, Eldritch Trap', 'bhintel'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/luta.html', 'Luta Dagdottir, Two Weapon Fighter/Rogue', 'luta'),

    new PageInfo(undefined, 'campaigns/the-story-of-aaron/npcs/anterin.html', 'Anterin Beltith, enslaved drow male', 'anterin'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/npcs/ereltha.html', 'Ereltha Tuin of House Duskryn', 'ereltha'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/npcs/lydriia.html', 'Lydriia Blunduin, brainwashed drow cleric', 'lydriia'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/npcs/charda.html', 'Charda Diliriy, Chione\'s Drow Slave', 'charda'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/npcs/signy.html', 'Signy Validottir, Oasis Wet Nurse', 'signy'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/npcs/white-skull-and-blackmane/white-skull.html', 'White Skull, Gnoll Exile', 'white-skull'),

    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/main.html', 'The Country of Lyrna', 'lyrna'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/ashborne.html', 'The Town of Ashborne', 'ashborne'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/cuul.html', 'The ____ of Cuul', 'cuul'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/wrethian.html', 'The ____ of Wrethian', 'wrethian'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/arx.html', 'The Holy City of Arx', 'arx'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/ruined-wizardry-school.html', 'Ruined Wizardry School', 'ruined-wizardry-school'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/the-oasis.html', 'The Oasis Guild Fortress', 'oasis'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/oasis-library.html', 'The Library in Oasis', 'oasis-library'),

    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/cestrad/main.html', 'The Country of Cestrad', 'cestrad'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/cestrad/mordain.html', 'The ____ of Mordain', 'mordain'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/cestrad/nyr.html', 'The ____ of Nyr', 'nyr'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/cestrad/seablood.html', 'The Town of Seablood', 'seablood'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/cestrad/fa`adin.html', 'The City of Fa`adin, Capital of Cestrad', 'faadin'),

    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/sokjin/main.html', 'The _____ of Sokjin', 'sokjin'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/sokjin/danghae.html', 'The City of Danghae', 'danghae'),

    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/dragonkin/kobold-heavy.html', 'Kobold Heavy', '3-5-kobold-heavy'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/wild-elves/wild-elf-warrior.html', 'Wild Elf Warrior', 'wild-elf-warrior'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/drow/urban-surface-drow.html', 'Urban Surface Drow', 'urban-surface-drow'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/drow/drow-cleric.html', 'Drow Cleric', 'drow-cleric'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/goblinoids/goblin-lieutenant.html', 'Goblin Lieutenant', 'goblin-lieutenant'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/goblinoids/goblin-sergeant.html', 'Goblin Sergeant', 'goblin-sergeant'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/gnolls/gnoll-warlord.html', 'Gnoll Warlord', 'gnoll-warlord'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/gnolls/gnoll-ambusher.html', 'Gnoll Ambusher', 'gnoll-ambusher'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/the-church/paladin.html', 'Paladin of Durn', 'paladin'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/the-church/ordained-cleric.html', 'Ordained Cleric of Durn', 'ordained-cleric'),
    
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/plotlines/index.html', 'Plotline Index', 'aaron-plotline-index'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/plotlines/durns-inquisition.html', 'Durn\'s Inquisition', 'aaron-durn-inquisition'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/plotlines/invasion-of-regra.html', 'The Invasion of Regra', 'aaron-regra-invasion'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/plotlines/revival-of-the-red-king.html', 'Revival of the Red King', 'aaron-red-king-revival'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/plotlines/rise-of-general-rorshath.html', 'Rise of General Rorshath', 'aaron-general-rorshath'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/plotlines/white-skull-and-blackmane.html', 'White Skull and Blackmane', 'aaron-white-skull'),

    new PageInfo(undefined, 'campaigns/the-story-of-aaron/spellbooks/main.html', 'Spellbooks', 'aaron-spellbooks'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/spellbooks/oasis-inquisitor.html', 'The Oasis Inquisitor\'s Spellbook', 'oasis-inquisitor-spellbook'),

    new PageInfo(undefined, 'campaigns/the-story-of-aaron/guild-folder/missions.html', 'Guild Missions', 'aaron-guild-missions'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/guild-folder/guild-members.html', 'Guild Members', 'aaron-guild-members'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/guild-folder/oasis-servants.html', 'Guild Members', 'oasis-servants'),

    new PageInfo(undefined, 'images/chione.png', '', 'chione-image'),
    new PageInfo(undefined, 'images/luta.png', '', 'luta-image')
];