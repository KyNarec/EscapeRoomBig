export default class Component extends HTMLElement {

    /**@type {ShadowRoot} */
    shadow;

    static get observedAttributes() {
        return ['name'];
    }

    constructor() {
        super();
    }

    connectedCallback() {

    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'name':
                if (oldValue == newValue) {
                    break;
                }
                console.debug(name+'changed from '+oldValue+' to '+newValue);
                this.loadComponent(newValue);
                break;
            default:
                console.error(`No behavior for attribute-change of ${name} defined`);
        }
    }

    async loadComponent(name) {
        if(name == 0) {
            return;
        }
        const response = await fetch('/components/'+name+'.html');
        if (!response.ok) throw Error('Could not fetch component: '+name);

        const tempDiv  = document.createElement('div');
        tempDiv.innerHTML = await response.text(); 

        const fragment = document.createDocumentFragment();
        const childCount = tempDiv.childElementCount;

        for (let i = 0; i < childCount; i++) {
            fragment.appendChild(tempDiv.children[0]);
        }
        this.innerHTML = '';
        this.appendChild(fragment);
        //this.shadow.appendChild(fragment);
    }
}