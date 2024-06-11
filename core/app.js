import Component from "../modules/Component.js";

// define custom elements
customElements.define('custom-comp', Component);

// register Events
let button = document.querySelector('#btn-desktop');
addEventListener("click", (e) => {
    alert('hi');
})  