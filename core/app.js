import Component from "../modules/component.js";
import childHasParent from "../utils/childHasParent.js";
import waitForElm from "../utils/waitForElemnt.js";

// define custom elements
customElements.define('custom-comp', Component);

/**@type {Array} */
let openModals = [];

// register Events
document.body.addEventListener("mousedown", (e) => {
    
    // Close open modal on mouse click
    let bCloseModals = true;
    if(openModals.length < 1) return;
    openModals.forEach((modal) => {
        if(childHasParent(e.target, modal)) {
            bCloseModals = false;
            return;
        }
    })
    if(bCloseModals) openModals.forEach((modal) => { modal.remove(); });
});

// await waitForElm('#area-open-pc');
// const areaOpenPc = document.querySelector('#area-open-pc');
// areaOpenPc.addEventListener("click", () => {
//     const pc = document.createElement('custom-comp');
//     pc.setAttribute('name', 'computer');
//     pc.classList.add('modal');
//     document.body.appendChild(pc);
//     openModals.push(pc);
// });

await waitForElm('#area-open-tuer');
const areaOpenTuer = document.querySelector('#area-open-tuer');
areaOpenTuer.addEventListener("click", () => {
    const schloss = document.createElement('custom-comp');
    schloss.setAttribute('name', 'schloss');
    schloss.classList.add('modal');
    document.body.appendChild(schloss);
    openModals.push(schloss);
    const blur = document.createElement('div');
    // blur.style = "backdrop-filter: blur(10px); z-index: 100; background-color: black; width: 100vw; height: 100vh; position: absolute";
    blur.style = "backdrop-filter: blur(10px); background-color: black; width: 100vw; height: 100vh; display: block; position: absolute";
    blur.id = 'computer-container'
    blur.classList.add('modal');
    document.body.appendChild(blur);
});

await waitForElm('#area-open-kreuz');
const areaOpenKreuz = document.querySelector('#area-open-kreuz');
areaOpenKreuz.addEventListener("click", () => {
    const kreuz = document.createElement('custom-comp');
    kreuz.setAttribute('name', 'kreuz');
    kreuz.classList.add('modal');
    document.body.appendChild(kreuz);
    openModals.push(kreuz);
});

//schwarzes bild ist immernoch unten