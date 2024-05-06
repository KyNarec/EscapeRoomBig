import Component from "../modules/Component.js";
import {Scenes}  from "../utils/component_enum.js"

console.log('test')
const header = new Component('header');
header.appendTo(document.getElementsByTagName('main')[0]);

const scene1 = new Component(Scenes.Scene1);
