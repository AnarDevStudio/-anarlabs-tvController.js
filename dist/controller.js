import { getFocusableElements } from "./utils";
import { setFocus, getCurrent } from "./focus";
import { runEvent } from "./events";
export class TvController {
    static init() {
        this.elements = getFocusableElements();
        if (!this.elements.length) {
            console.warn("TvController: no focusable elements");
            return;
        }
        setFocus(this.elements[0]);
        this.listen();
    }
    static listen() {
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
    static move(step) {
        this.index =
            (this.index + step + this.elements.length) %
                this.elements.length;
        setFocus(this.elements[this.index]);
        runEvent("tv-focused", getCurrent());
    }
}
TvController.elements = [];
TvController.index = 0;
//# sourceMappingURL=controller.js.map