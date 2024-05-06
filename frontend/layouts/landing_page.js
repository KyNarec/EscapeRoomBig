import Component from "../modules/Component.js";

export default class LandingPage {
    constructor(){
       this.#build(); 
    }

    async #build() {
        const header = new Component('header');
        const start_message = new Component('start_message');
        const main = document.getElementsByTagName('main')[0];
        await header.appendTo(main);
        await start_message.appendTo(main);
    }
}