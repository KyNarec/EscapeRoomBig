import waitForElm from "../utils/waitForElemnt.js";


await waitForElm('#scene-sel-con');
const sceneSelCon   = document.querySelector('#scene-sel-con');
const scene         = document.querySelector('#scene');
const passwordInput = document.querySelector('#pw-input');
let password      = "test1";
let sceneIndex    = 0;


// Gasse
const gasse = document.createElement('button');
gasse.textContent = "Gasse";
gasse.onclick = (e) => {
    scene.setAttribute('name', 'Szene_01_Gasse/index');
    password = "test1";
    sceneIndex = 0;
};
sceneSelCon.appendChild(gasse);


// Daheim
const daheim = document.createElement('button');
daheim.textContent = "Daheim";
daheim.onclick = () => {
    scene.setAttribute('name', 'Szene_02_Daheim/index');
    password = "test2";
    sceneIndex = 1;
};

// Haus(außen)
const hausAussen = document.createElement('button');
hausAussen.textContent = "Haus(Außen)";
hausAussen.onclick = () => {
    scene.setAttribute('name', 'Szene_05_Haus_außen/index');
    password = "test3";
    sceneIndex = 2;
}

const scenes = [daheim, hausAussen];

passwordInput.onchange =  (e) => {
    if (!(passwordInput.value == password)) return;
    sceneSelCon.appendChild(scenes[sceneIndex]);
    
}