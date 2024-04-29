import Component from "../modules/Component.js";

console.log('test')
const header = new Component('header');
header.appendTo(document.getElementsByTagName('main')[0]);