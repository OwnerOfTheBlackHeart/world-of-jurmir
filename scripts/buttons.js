class Button
{
    constructor(id, url, title, name)
    {
        this.button;
        this.id = id;
        this.url = url;
        this.title = title;
        this.name = name;
    }

    UpdateButton()
    {
        if ((this.id != undefined) && (this.id != ""))
        {
            this.button = document.getElementById(this.id);
        }
    }
}

const buttons = [
    new Button('home_button', 'home.html', 'Home', 'home'),
    new Button(undefined, 'templates/character.html', 'Character Template', 'template-character'),
    new Button(undefined, 'campaigns/the-story-of-aaron/main.html', 'The Story of Aaron', 'aaron-main'),
    new Button(undefined, 'campaigns/the-story-of-aaron/notes.html', 'The Story of Aaron Notes', 'aaron-notes'),
    new Button(undefined, 'pantheon/planes/material-plane.html', 'The Material Plane', 'material-plane'),
    new Button(undefined, 'pantheon/planes/dysvegr.html', 'Dysvegr', 'dysvegr'),
    new Button(undefined, 'pantheon/planes/horgrverold.html', 'Horgrverold', 'horgrverold'),
    new Button(undefined, 'pantheon/planes/frostgard.html', 'Frostgard', 'frostgard'),
    new Button(undefined, 'pantheon/planes/hell.html', 'Hell', 'hell'),
    new Button(undefined, 'pantheon/planes/the-void.html', 'The Void', 'the-void'),
    new Button(undefined, 'pantheon/planes/planes-connection.html', 'How the Planes Connect', 'planes-connect'),
    new Button(undefined, 'pantheon/sithrak.html', 'Sithrak', 'sithrak'),
    new Button(undefined, 'pantheon/durn.html', 'Durn', 'durn'),
    new Button(undefined, 'pantheon/god-types.html', 'God Types', 'god-types'),
    new Button(undefined, 'campaigns/the-story-of-aaron/characters/chione.html', 'Chione of Ashborne', 'chione'),
    new Button(undefined, 'campaigns/the-story-of-aaron/characters/erik.html', 'Erik Ericson, Son of Eric', 'erik'),
    new Button(undefined, 'campaigns/the-story-of-aaron/locations/ashborne.html', 'Ashborne', 'ashborne'),
];