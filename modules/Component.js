export default class Component extends HTMLElement {

    /**@type {ShadowRoot} */
    shadow;

    static get observedAttributes() {
        return ['src'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.shadow = this.attachShadow({mode: "open"});
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'src':
                this.loadComponent(newValue);
                break;
            default:
                console.error(`No behavior for attribute-change of ${name} defined`);
        }
    }

    async loadComponent(path) {
        const response = await fetch(path);
        if (!response.ok) throw Error('Could not fetch path: '+path);

        const tempDiv  = document.createElement('div');
        tempDiv.innerHTML = await response.text(); 

        const fragment = document.createDocumentFragment();
        const childCount = await tempDiv.childElementCount;
        for (let i = 0; i < childCount; i++) {
            fragment.appendChild(tempDiv.children[0]);
        }

        this.shadow.appendChild(fragment);
    }
}