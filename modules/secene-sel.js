import waitForElm from "../utils/waitForElemnt.js";

const scenes = [
    "Gasse", "Daheim", "Schule", "Bibliothek",
    "Haus (außen)", "Haus (innen)", "Pläne", "Heizung",
];

await waitForElm('#scene-sel-con');
const sceneSelCon = document.querySelector('#scene-sel-con');
const scene       = document.querySelector('#scene');
const gasse = document.createElement('button');
gasse.textContent = "Gasse";
gasse.onclick = () => {
    scene.setAttribute('name', 'Szene_01_Gasse/index')
}
sceneSelCon.appendChild(gasse);