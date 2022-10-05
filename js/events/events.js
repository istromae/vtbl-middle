import { forms, _1024px } from "../constants/constants";
import { $1024px } from "./1024px";
import { change } from "./change";
import { click } from "./click";
import { input } from "./input";
import { keydown } from "./keydown";
import { submit } from "./submit";
//
//
// ? Window events
//
_1024px.addEventListener("change", $1024px);
//
//
// ? Document events
//
document.addEventListener("click", click);
document.addEventListener("keydown", keydown);
//
//
// ? Form events
//
if (forms.length) {
  Array.from(forms).forEach(form => {
    form.addEventListener("submit", submit);
  });

  const calculatorForm = forms["form-calculator"];
  if (calculatorForm) calculatorForm.addEventListener("input", input);

  // const premiumForm = forms["form-premium"];
  // if (premiumForm) premiumForm.addEventListener("change", change);
}
//
//
// ? Other events
//
// here
