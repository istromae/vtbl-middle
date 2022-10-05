import { burgerClose } from "../modules/burger-action";
import { popupHide } from "../scripts/popup-action";

export function keydown(event) {
  if (event.code === "Escape") {
    burgerClose();
    popupHide();
  }
}
