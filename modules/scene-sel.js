import waitForElm from "../utils/waitForElemnt.js";


await waitForElm('#scene-sel-con');
const sceneSelCon   = document.querySelector('#scene-sel-con');
const scene         = document.querySelector('#scene');
const passwordInput = document.querySelector('#pw-input');
const password      = "test";


// Gasse
const gasse = document.createElement('button');
gasse.textContent = "Gasse";
gasse.onclick = (e) => {
    scene.setAttribute('name', 'Szene_01_Gasse/index');
    password = "test";
};
sceneSelCon.appendChild(gasse);


// Daheim
const daheim = document.createElement('button');
daheim.textContent = "Daheim";
daheim.onclick = () => {
    scene.setAttribute('name', 'Szene_02_Daheim/index');
};

let sceneIndex = 0;
const scenes = [daheim, ]

passwordInput.onchange =  (e) => {
    if (!(passwordInput.value == password)) return;
    sceneSelCon.appendChild(scenes[sceneIndex]);
    sceneIndex += 1;
}