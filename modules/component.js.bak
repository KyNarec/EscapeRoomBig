export default class Component {
    #comp_id;
    #fragment;
    #comp_name;
    #target_node;
    static #instance_count = 0;

    /**
     * @param {string} component_name 
     * @param {Node | Element} target_node 
     */
    constructor(component_name, target_node = document.getElementsByTagName('main')[0]) {
        this.#target_node = target_node;
        this.#comp_id = 'component-id-'+Component.#instance_count;
        Component.#instance_count++;

        this.#comp_name = component_name;
        this.#fragment = this.#createFrag();
    }

    async #createFrag() {
        const response = await fetch('/components/'+this.#comp_name+'.html');
        const html_str = await response.text();

        const fragment = document.createDocumentFragment(), div = document.createElement('div');
        div.innerHTML = html_str;
        div.id = this.#comp_id;
        div.style = '';
        fragment.appendChild(div);
        return fragment;
    }

    /**
     * @param {Node | Element} node;
     */
    async appendTo(node = this.#target_node) {
        node.appendChild(await this.#fragment);
    }

    async prependTo(node = this.#target_node) {
        node.prepend(await this.#fragment)
    }

    remove() {
        document.getElementById(this.#comp_id);
    }

}