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

await waitForElm('#area-open-pc');
const areaOpenPc = document.querySelector('#area-open-pc');
areaOpenPc.addEventListener("click", () => {
    const pc = document.createElement('custom-comp');
    pc.setAttribute('name', 'computer');
    pc.classList.add('modal');
    document.body.appendChild(pc);
    openModals.push(pc);
});