import Component from "./component.js";

export default class SceneDisplay {
    /**@type {HTMLElement} */
    #main;
    /**@type {Component} */
    #component;
    constructor() {
        this.#main = document.querySelector('main');
    }

    /**
     * @param {Component} component 
     */
    async displayScene(component) {
        if(this.#component) {
            this.#component.remove();
        }
        console.log("Debug: "+component)
        this.#component = component;
        console.log("Debug: "+this.#component)
        await component.appendTo(this.#main);
    }
}