import { getFocusableElements } from "./utils";
import { setFocus, getCurrent } from "./focus";
import { runEvent } from "./events";

export class TvController {

  private static elements: HTMLElement[] = [];
  private static index = 0;

  static init() {
    this.elements = getFocusableElements();

    if (!this.elements.length) {
      console.warn("TvController: no focusable elements");
      return;
    }

    setFocus(this.elements[0]);
    this.listen();
  }

  private static listen() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          this.move(1);
          break;

        case "ArrowLeft":
        case "ArrowUp":
          this.move(-1);
          break;

        case "Enter":
          runEvent("tv-enter", getCurrent());
          break;

        case "Backspace":
        case "Escape":
          runEvent("tv-back", getCurrent());
          break;
      }
    });
  }

  private static move(step: number) {
    this.index =
      (this.index + step + this.elements.length) %
      this.elements.length;

    setFocus(this.elements[this.index]);
    runEvent("tv-focused", getCurrent());
  }
}
