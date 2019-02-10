class LinkImage extends HTMLElement 
{
    static get observedAttributes() { return ['linkName', 'disabled']; }

    get linkName()
    {
        return this.getAttribute('linkName');
    }

    set linkName(val)
    {
        this.setAttribute('linkName', val);
    }

    get disabled()
    {
        return this.hasAttribute('disabled');
    }

    set disabled(val)
    {
        if (val) 
        {
            this.setAttribute('disabled', '');
        }
        else
        {
            this.removeAttribute('disabled');
        }
    }

    constructor() 
    {
        // Always call super first in constructor
        super();

        this.image;
        this.imagePageInfo;
    }

    click()
    {
        // Only load by name when we have an internal link
        // if (PageInfo.IsInternalPage(this.imagePageInfo))
        // {
        //     SetHashByPageInfo(this.imagePageInfo);
        // }
    }

    connectedCallback()
    {
        this.addEventListener('click', this.click);

        this.image = document.createElement('img');    
        this.UpdateLink();

        this.innerHTML = "";
        this.appendChild(this.image);       
    }

    attributeChangedCallback(attrName, oldVal, newVal)
    {
        if (attrName === "linkName")
        {
            this.UpdateLink();
        }
        else if (attrName === "disabled")
        {
            // Put in disabled code here...
        }
    }

    UpdateLink()
    {
        this.imagePageInfo = PageInfo.GetPageInfoFromName(this.linkName);

        if (this.imagePageInfo != undefined)
        {
            this.image.src = this.imagePageInfo.url;
        }
        else
        {
            this.image.src = this.linkName;
        }
    }
}

customElements.define('ap-image', LinkImage);