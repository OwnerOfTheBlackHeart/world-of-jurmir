class PageInfo
{
    constructor(id, url, title, name, external)
    {
        this.button;
        this.id = id;
        this.url = url;
        this.title = title;
        this.name = name;

        this.external = external || false;
    }

    UpdateButton()
    {
        if ((this.id != undefined) && (this.id != ""))
        {
            this.button = document.getElementById(this.id);
        }
    }

    static GetPageInfoFromUri(uri)
    {
        return pages.find((pageInfo) => {
            return pageInfo.url === uri;
        });
    }

    static GetPageInfoFromName(name)
    {
        return pages.find(pageInfo => {
            return pageInfo.name === name;
        });
    }

    static IsInternalPage(pageInfo)
    {
        return !((pageInfo == undefined) || pageInfo.external);
    }
}

const pages = [
    new PageInfo('home_button', 'home.html', 'Home', 'home'),
    new PageInfo(undefined, 'templates/character.html', 'Character Template', 'template-character'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/main.html', 'The Story of Aaron', 'aaron-main'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/notes.html', 'The Story of Aaron Notes', 'aaron-notes'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/caravan.html', "Aaron's Caravan", 'aaron-caravan'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/timeline.html', "Story of Aaron Timeline", 'aaron-timeline'),
    new PageInfo(undefined, 'pantheon/planes/material-plane.html', 'The Material Plane', 'material-plane'),
    new PageInfo(undefined, 'pantheon/planes/dysvegr.html', 'Dysvegr', 'dysvegr'),
    new PageInfo(undefined, 'pantheon/planes/horgrverold.html', 'Horgrverold', 'horgrverold'),
    new PageInfo(undefined, 'pantheon/planes/frostgard.html', 'Frostgard', 'frostgard'),
    new PageInfo(undefined, 'pantheon/planes/hell.html', 'Hell', 'hell'),
    new PageInfo(undefined, 'pantheon/planes/the-void.html', 'The Void', 'the-void'),
    new PageInfo(undefined, 'pantheon/planes/planes-connection.html', 'How the Planes Connect', 'planes-connect'),
    new PageInfo(undefined, 'pantheon/sithrak.html', 'Sithrak', 'sithrak'),
    new PageInfo(undefined, 'pantheon/durn.html', 'Durn', 'durn'),
    new PageInfo(undefined, 'pantheon/feph.html', 'Feph', 'feph'),
    new PageInfo(undefined, 'pantheon/kriotz.html', 'Kriotz', 'kriotz'),
    new PageInfo(undefined, 'pantheon/kyranious.html', 'Kyranious', 'kyranious'),
    new PageInfo(undefined, 'pantheon/zoltan.html', 'Zoltan', 'zoltan'),
    new PageInfo(undefined, 'pantheon/lagos.html', 'Lagos of Chronos', 'lagos'),
    new PageInfo(undefined, 'pantheon/hrefna.html', 'Hrefna Aridottir', 'hrefna'),
    new PageInfo(undefined, 'pantheon/god-types.html', 'God Types', 'god-types'),
    new PageInfo(undefined, 'pantheon/history/creation-story.html', 'The Story of Creation', 'creation-story'),
    new PageInfo(undefined, 'pantheon/history/the-drow.html', 'How the Drow Came to Be', 'the-drow'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/chione.html', 'Chione of Ashborne', 'chione'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/erik.html', 'Erik Ericson, Son of Eric', 'erik'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/helmer.html', 'Helmer', 'helmer'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/hunts-on-stone.html', 'Hunts on Stone', 'hunts-on-stone'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/paavu.html', 'Paavu Flesheater Ogolakanu', 'paavu'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/drik-tik.html', 'Drik-Tik', 'drik-tik'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/ashborne.html', 'Ashborne', 'ashborne'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/arx.html', 'The Holy City of Arx', 'arx'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/ruined-wizardry-school.html', 'Ruined Wizardry School', 'ruined-wizardry-school'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/lyrna/the-oasis.html', 'The Oasis Guild Fortress', 'oasis'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/kobold-heavy.html', 'Kobold Heavy', '3-5-kobold-heavy'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/wild-elf-warrior.html', 'Wild Elf Warrior', 'wild-elf-warrior'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/urban-surface-drow.html', 'Urban Surface Drow', 'urban-surface-drow'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/drow-cleric.html', 'Drow Cleric', 'drow-cleric'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/goblin-lieutenant.html', 'Goblin Lieutenant', 'goblin-lieutenant'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/goblin-sergeant.html', 'Goblin Sergeant', 'goblin-sergeant'),
    new PageInfo(undefined, 'homebrew/ranger-fix.html', 'Ranger Class Fix for D&D 3.5e', 'ranger-fix'),

    new PageInfo(undefined, 'https://drive.google.com/open?id=1ig8Abc2VDQf-OX7RUamdHbAtrCKBdyVNs7tkjTxr8Ao', '', 'pregnancy', true),
    new PageInfo(undefined, 'https://drive.google.com/drive/folders/14hpbIxtHNWXO2PcbTgnrV0cKlz2SzyLV?usp=sharing', '', '3.5-homebrew', true),
    new PageInfo(undefined, 'https://drive.google.com/drive/folders/1BJhOezdxdbN7pBTSjqmTLgEm2blqt6qP?usp=sharing', '', 'aaron-map', true),
    new PageInfo(undefined, 'http://www.d20srd.org/srd/monsters/elf.htm', '', 'drow-traits', true),
];