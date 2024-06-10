import Component from "../modules/component.js";

export default class LandingPage {
  constructor() {
    this.#build();
  }

  // FIXME: Remove secene_sel

  async #build() {
    const header = new Component("header");
    const scene_sel = new Component("scene_sel");
    const start = new Component("start");
    const main = document.getElementsByTagName("main")[0];
    await header.appendTo(main);
    await scene_sel.appendTo(main);
    await start.appendTo(main);
  }
}
