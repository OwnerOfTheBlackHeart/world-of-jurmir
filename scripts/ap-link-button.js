class LinkButton extends HTMLElement 
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

        this.link;
        this.buttonInfo;
    }

    click()
    {
        // Only load by name when we have an internal link
        if (!((this.buttonInfo == undefined) || (this.buttonInfo.external)))
        {
            LoadByName(this.linkName);
        }
    }

    connectedCallback()
    {
        this.addEventListener('click', this.click);
        let innerData = this.innerHTML;

        this.link = document.createElement('a');
        this.link.innerHTML = innerData;
        
        this.UpdateLink();

        this.innerHTML = "";
        this.appendChild(this.link);       
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
        this.buttonInfo = buttons.find((value) =>
        {
            return value.name === this.linkName;
        });

        if (this.buttonInfo != undefined)
        {
            if (this.buttonInfo.external)
            {
                this.SetExternalLink(this.buttonInfo.url);
            }
            else
            {
                this.SetInternalLink(this.buttonInfo.url);
            }
        }
        else
        {
            this.SetExternalLink(this.linkName);
        }
    }

    SetExternalLink(url)
    {
        this.link.setAttribute('href', url);
        this.link.setAttribute('target', '_blank');
        this.link.setAttribute('rel', 'external');
    }

    SetInternalLink(url)
    {
        this.link.setAttribute('href', 'index.html#' + url);
        this.link.setAttribute('target', '_self');
        this.link.removeAttribute('rel');
    }
  }

  customElements.define('ap-link-button', LinkButton);