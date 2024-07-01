import Component from "../modules/component.js";
import childHasParent from "../utils/childHasParent.js";
import waitForElm from "../utils/waitForElemnt.js";

// define custom elements
customElements.define('custom-comp', Component);

/**@type {Array} */
export let openModals = [];

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
    if(!bCloseModals) return;
    openModals.forEach((modal) => { modal.remove(); });
    document.body.querySelectorAll("*").forEach((e) => {
        e.style.filter = "";
    })
});

await waitForElm('#area-open-tuer');
const areaOpenTuer = document.querySelector('#area-open-tuer');
areaOpenTuer.addEventListener("click", () => {
    const schloss = document.createElement('custom-comp');
    schloss.setAttribute('name', 'schloss');
    schloss.classList.add('modal');
    document.body.appendChild(schloss);
    openModals.push(schloss);
    //Blur effect for everything except for the opened area
    const elementsToBlur = document.querySelectorAll("#scene");
    elementsToBlur.forEach((e) => {
        e.style.filter = "blur(3px)";
    })
    document.body.appendChild(element);
});

await waitForElm('#area-open-kreuz');
const areaOpenKreuz = document.querySelector('#area-open-kreuz');
areaOpenKreuz.addEventListener("click", () => {
    const kreuz = document.createElement('custom-comp');
    kreuz.setAttribute('name', 'kreuz');
    kreuz.classList.add('modal');
    document.body.appendChild(kreuz);
    openModals.push(kreuz);
    //Blur effect for everything exept for the  opened area
    const elementsToBlur = document.querySelectorAll("#scene");
    elementsToBlur.forEach((e) => {
        e.style.filter = "blur(3px)";
    })
    document.body.appendChild(element);
});
