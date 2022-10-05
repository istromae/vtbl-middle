import { burgerAction, burgerClose } from "../modules/burger-action";
import { goToAction } from "../modules/go-to";
import { faqAction } from "../scripts/faq-action";
import { filterAction } from "../scripts/filter-action";
import { popupHide, popupShow } from "../scripts/popup-action";

export function click(event) {
  if (event.target.closest(".burger")) {
    burgerAction();
  } else if (!event.target.closest(".nav-header")) {
    burgerClose();
  }
  if (event.target.closest("[data-spoller][data-target]")) {
    faqAction(event);
  }
  if (event.target.closest("[data-goto]")) {
    goToAction(event);
  }
  if (event.target.closest(".filter-catalog__button")) {
    filterAction(event);
  }
  if (event.target.closest("[data-popup-target]")) {
    popupShow(event);
  } else if (!event.target.closest("[data-popup] > *")) {
    popupHide();
  }
  if (event.target.closest(".form__close")) {
    popupHide();
  }
}
