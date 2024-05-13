import LandingPage from "../layouts/landing_page.js";
import Component from "../modules/Component.js";
import {Scenes}  from "../utils/scenes_enum.js"

const main = await document.querySelector('main');

const header = new Component("header");
const testSzene01 = new Component("Szene_01_Gasse/index");

await header.appendTo(main);
await testSzene01.appendTo(main);