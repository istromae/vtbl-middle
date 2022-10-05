import { paddingRightAction } from "../modules/padding-right-action";

export function popupShow(event) {
  const targetButton = event.target.closest("[data-popup-target]");
  const targetButtonData = targetButton.dataset.popupTarget;

  if (targetButtonData) {
    const popup = document.getElementById(targetButtonData);

    if (popup) {
      popup.classList.add("show");
      paddingRightAction();
    }
  }
}

export function popupHide(event) {
  const activePopup = document.querySelector("[data-popup].show");

  if (activePopup) {
    activePopup?.classList.remove("show");
    paddingRightAction(false);
  }
}
