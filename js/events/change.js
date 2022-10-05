import { premiumFilterAction } from "../scripts/premium-filter-action";

export function change(event) {
  if (event.target.closest("#form-premium")) {
    premiumFilterAction(event);
  }
}
