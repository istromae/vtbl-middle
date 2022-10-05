import { slideToggle } from "../modules/slide-up-and-down";

export function filterAction(event) {
  const filterButton = event.target.closest(".filter-catalog__button");
  const filter = filterButton.nextElementSibling?.closest("#form-filter-catalog");

  if (filter && !filter.classList.contains("slide")) {
    filterButton.classList.toggle("active");
    slideToggle(filter);
  }
}
