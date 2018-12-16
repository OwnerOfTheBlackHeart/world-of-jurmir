// This file requires the IO.js file to function

const indexPage = "home.html";
const page_area = "page_area";

const basic_title = " - World of Jurmir Reference Document";

var backButton;
var backLog = [];
var currentPage;
var defaultPage = "home";

function SetActive(page)
{
	// Cleanse our active button and set our active button
	for (const button of pages)
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

function LoadByName(page_name)
{
    let found = PageInfo.GetPageInfoFromName(page_name);

    LoadByPageInfo(found);
}

function LoadByPageInfo(pageInfo)
{
    if (pageInfo != undefined)
    {
        let page = pageInfo.url;

        if ((page != undefined) && (page != ""))
        {
            SetActiveAndLoad(page, pageInfo.title + basic_title);
        }
    }
}

function SetHashByPageInfo(pageInfo)
{
    if (pageInfo != undefined)
    {
        parent.location.hash = pageInfo.url;
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
	for (const button of pages) { button.UpdateButton(); }
	
    // Update our buttons active status if we aren't on the index page
	SetActive(currentPage);
}

function GetPageTitle(uri)
{
    let button = PageInfo.GetPageInfoFromUri(uri);

    if (button != undefined)
    {
        return button.title + basic_title;
    }

    return undefined;
}

window.onhashchange = function()
{
    LoadByPageInfo(Utilities.GetCurrentPageInfo());
};