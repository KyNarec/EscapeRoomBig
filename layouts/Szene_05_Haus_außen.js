import Component from "../modules/component.js";

export default class LandingPage {
  constructor() {
    this.#build();
  }

  // FIXME: Remove secene_sel

  async #build() {
    const main = await document.querySelector('main');
    
    const header = new Component('header')
    const scene2 = new Component('Szene_05_Haus.außen/index');
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
    }
  }
}