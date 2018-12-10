// This file requires the IO.js file to function

const indexPage = "home.html";
const page_area = "page_area";

const basic_title = " - World of Jurmir Reference Document";

// const buttons = 
// 	{
// 		'home.html':'home_button',
// 		'GameProgramming/GP_Objectives.html':'game_button',
// 		'AdvancingComputerScience/ACS_Objectives.html':'acs_button'
// 	};

function SetActive(page)
{
	// Cleanse our active button and set our active button
	for (const button of buttons)
	{
        if (button.button != undefined)
        {
            if (page != button.url) ResetButtonActive(button.button);
            else SetButtonActive(button.button);
        }
	}
}

function SetActiveAndLoad(page, title)
{
	SetActive(page);
	LoadPage(page, undefined, title);
}

function LoadByName(button_name)
{
    let found = buttons.find(button => {
        return button.name === button_name;
    });

    if (found != undefined)
    {
        let page = found.url;

        if ((page != undefined) && (page != ""))
        {
            SetActiveAndLoad(page, found.title + basic_title);
        }
    }
}

function SetButtonActive(button)
{
	button.classList.add('active');
	if (button.classList.contains('navigator')) button.classList.remove('navigator');
}

function ResetButtonActive(button)
{
	if (button.classList.contains('active')) 
	{
		button.classList.remove('active');
		button.classList.add('navigator');
	}
}

function SetupButtons(currentPage)
{
	// Update buttons from ids to actual buttons
	for (const button of buttons) { button.UpdateButton(); }
	
    // Update our buttons active status if we aren't on the index page
	SetActive(currentPage);
}

function GetPageTitle(uri)
{
    for (const button of buttons)
    {
        if (button.url === uri) { return button.title + basic_title; }
    }

    return undefined;
}