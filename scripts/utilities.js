var Utilities = 
{
    IsGoodString: function(str)
    {
        return (str != undefined) && (str != "");
    },

    CreateHeader: function(data, className)
    {
        let header = document.createElement('th');
        header.innerHTML = data;

        if (Utilities.IsGoodString(className))
        {
            header.className = className;
        }

        return header;
    },

    CreateData: function(data, className)
    {
        let dataElement = document.createElement('td');
        dataElement.innerHTML = data;

        if (Utilities.IsGoodString(className))
        {
            dataElement.className = className;
        }

        return dataElement;
    },

    GetCurrentPage: function()
    {
        let uri = parent.location.hash;
        if (Utilities.IsGoodString(uri))
        {
            uri = uri.slice(1);
        }
        return uri;
    },

    GetCurrentPageInfo: function()
    {
        return PageInfo.GetPageInfoFromUri(Utilities.GetCurrentPage());
    }
}