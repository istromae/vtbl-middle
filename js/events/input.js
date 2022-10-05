import { changePeriodValue, changePrepaidValue, changePriceValue, changeRangeBackground, changeRedemtionValue } from "../scripts/calculator-action";

export function input(event) {
  const target = event.target;

  if (target.closest("#form-calculator")) {
    changeRangeBackground(event);

    if (target.name === "form-calculator-price") {
      changePriceValue(event);
    }

    if (target.name === "form-calculator-prepaid") {
      changePrepaidValue(event);
    }

    if (target.name === "form-calculator-period") {
      changePeriodValue(event);
    }

    if (target.name === "form-calculator-redemtion") {
      changeRedemtionValue(event);
    }
  }
}
