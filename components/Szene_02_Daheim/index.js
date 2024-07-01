!async function() {
    await waitForElm('#area-open-pc');
    const areaOpenKreuz = document.querySelector('#area-open-pc');
    areaOpenKreuz.addEventListener("click", () => {
        const kreuz = document.createElement('custom-comp');
        kreuz.setAttribute('name', 'computer');
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
}();