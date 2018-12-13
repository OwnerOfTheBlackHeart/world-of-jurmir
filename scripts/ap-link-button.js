class LinkButton extends HTMLElement 
{
    get homeButton()
    {
        return this.hasAttribute('homeButton');
    }

    set homeButton(val)
    {
        if (val) 
        {
            this.setAttribute('homeButton', '');
        }
        else
        {
            this.removeAttribute('homeButton');
        }
    }
    
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

        this.button;
    }

    click()
    {
        LoadByName(this.linkName);
    }

    connectedCallback()
    {
        this.addEventListener('click', this.click);
        let innerData = this.innerHTML;

        this.link = document.createElement('a');
        this.link.innerHTML = innerData;
        
        let buttonData = buttons.find((value) =>
        {
            return value.name === this.linkName;
        });

        if (buttonData != undefined)
        {
            this.link.setAttribute('href', 'index.html#' + buttonData.url);
        }

        this.innerHTML = "";
        this.appendChild(this.link);       
    }

    attributeChangedCallback(attrName, oldVal, newVal)
    {

    }
  }

  customElements.define('ap-link-button', LinkButton);