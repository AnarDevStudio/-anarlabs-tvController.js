import { TvControllerInstance } from "./controller.js";
// Public API must look exactly like this: TvController().init();
// So TvController must be a function returning an object with an init method.
export function TvController() {
    return new TvControllerInstance();
}
//# sourceMappingURL=index.js.map