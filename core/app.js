import Component from "../modules/Component.js";
import waitForElm from "../utils/waitForElemnt.js";

// define custom elements
customElements.define('custom-comp', Component);

// register Events
await waitForElm('#area-open-pc');
const areaOpenPc = document.querySelector('#area-open-pc');
console.debug(areaOpenPc)
areaOpenPc.onclick = () => {
    alert('sddf')
}