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
    new PageInfo(undefined, 'pantheon/planes/material-plane.html', 'The Material Plane', 'material-plane'),
    new PageInfo(undefined, 'pantheon/planes/dysvegr.html', 'Dysvegr', 'dysvegr'),
    new PageInfo(undefined, 'pantheon/planes/horgrverold.html', 'Horgrverold', 'horgrverold'),
    new PageInfo(undefined, 'pantheon/planes/frostgard.html', 'Frostgard', 'frostgard'),
    new PageInfo(undefined, 'pantheon/planes/hell.html', 'Hell', 'hell'),
    new PageInfo(undefined, 'pantheon/planes/the-void.html', 'The Void', 'the-void'),
    new PageInfo(undefined, 'pantheon/planes/planes-connection.html', 'How the Planes Connect', 'planes-connect'),
    new PageInfo(undefined, 'pantheon/sithrak.html', 'Sithrak', 'sithrak'),
    new PageInfo(undefined, 'pantheon/durn.html', 'Durn', 'durn'),
    new PageInfo(undefined, 'pantheon/god-types.html', 'God Types', 'god-types'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/chione.html', 'Chione of Ashborne', 'chione'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/erik.html', 'Erik Ericson, Son of Eric', 'erik'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/helmer.html', 'Helmer', 'helmer'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/characters/hunts-on-stone.html', 'Hunts on Stone', 'hunts-on-stone'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/locations/ashborne.html', 'Ashborne', 'ashborne'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/kobold-heavy.html', 'Kobold Heavy', '3-5-kobold-heavy'),
    new PageInfo(undefined, 'campaigns/the-story-of-aaron/enemies/wild-elf-warrior.html', 'Wild Elf Warrior', 'wild-elf-warrior'),
    new PageInfo(undefined, 'homebrew/ranger-fix.html', 'Ranger Class Fix for D&D 3.5e', 'ranger-fix'),

    new PageInfo(undefined, 'https://drive.google.com/open?id=1ig8Abc2VDQf-OX7RUamdHbAtrCKBdyVNs7tkjTxr8Ao', '', 'pregnancy', true),
    new PageInfo(undefined, 'https://drive.google.com/drive/folders/14hpbIxtHNWXO2PcbTgnrV0cKlz2SzyLV?usp=sharing', '', '3.5-homebrew', true),
];