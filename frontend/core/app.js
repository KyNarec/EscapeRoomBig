import LandingPage from "../layouts/landing_page.js";
import Component from "../modules/Component.js";
import {Scenes}  from "../utils/scenes_enum.js"

const main = await document.querySelector('main');

const header = new Component('header')
const scene2 = new Component('Szene_02_Daheim/index');
await scene2.appendTo(document.querySelector('main'));
const screen_interact = document.querySelector('#screen-interact');

const screen = new Component('screen');

screen_interact.onclick = () => {
    header.appendTo(main);
    alert('adf');
}