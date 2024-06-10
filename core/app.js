import Component from "../modules/component.js";
import SceneDisplay from "../modules/SceneDisplay.js";
import { Scenes } from "../utils/scenesEnum.js";

const main = document.querySelector('main');

const header = new Component('header');
const start = new Component('scene_sel');
await header.appendTo(main);
await start.appendTo(main);

const scene2 = new Component(Scenes.Scene2);
console.log("Debug: "+scene2);
const sceneDisplay = new SceneDisplay(scene2);
await sceneDisplay.displayScene()
console.log("Debug: "+scene2);




/* const scene2 = new Component('Szene_02_Daheim/index');
await scene2.appendTo(document.querySelector('main'));
const screen_interact = document.querySelector('#screen-interact');

const screen = new Component('screen');

screen_interact.onclick = () => {
                var imageContainer =
                    document.createElement("div");
                imageContainer.className =
                    "image-container screen";

                var screen = new Component("screen");
                screen.appendTo(imageContainer);

                // var image =
                //     document.createElement("img");
                // image.src = "assets/images/whatsapp_chat.png";

                var closeButton =
                    document.createElement(
                        "button"
                    );
                closeButton.textContent = "Close";
                closeButton.className =
                    "close-btn";
                closeButton.onclick =
                    function () {
                        document.body.removeChild(
                            imageContainer
                        );
                    };

                imageContainer.appendChild(
                    closeButton
                );
                
                document.body.appendChild(
                    imageContainer
                );        
} */