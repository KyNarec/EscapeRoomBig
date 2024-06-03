import Component from "../modules/Component.js";



const main = await document.querySelector('main');


const header = new Component("header");
const scene2 = new Component("Szene_02_Daheim/index");

await header.appendTo(main);
scene2.appendTo(main);