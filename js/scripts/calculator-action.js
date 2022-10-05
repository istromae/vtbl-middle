export function changeRangeBackground(event) {
  const input = event.target.closest("input[type=\"range\"]");

  input.style.setProperty("--value", input.value);
}

export function changePriceValue(event) {
  const form = event.target.closest("#form-calculator");

  changeValue(event, form, "#form-calculator-price-result");

  changePrepaidPercent(form);

  changeRedemtionResult(form);
}

export function changePrepaidValue(event) {
  const form = event.target.closest("#form-calculator");

  changeValue(event, form, "#form-calculator-prepaid-result");

  changePrepaidPercent(form);
}

export function changePeriodValue(event) {
  const form = event.target.closest("#form-calculator");

  changeValue(event, form, "#form-calculator-period-result");
}

export function changeRedemtionValue(event) {
  const form = event.target.closest("#form-calculator");

  changeValue(event, form, "#form-calculator-redemtion-percent", false);

  changeRedemtionResult(form);
}

function changeValue(event, form, id, int = true) {
  const input = event.target;
  const value = input.value;
  const result = form.querySelector(id);

  if (result) {
    result.innerText = (int ? parseInt(value) : parseFloat(value)).toLocaleString("ru");
  }
}

function changePrepaidPercent(form) {
  const prepaidInput = form["form-calculator-prepaid"];
  const prepaidValue = prepaidInput?.value;

  const priceInput = form["form-calculator-price"];
  const priceValue = priceInput?.value;

  const resultBlock = form.querySelector("#form-calculator-prepaid-percent");

  if (prepaidInput && priceInput && resultBlock) {
    resultBlock.innerText = Math.round(+prepaidValue * 100 / +priceValue);
  }
}

function changeRedemtionResult(form) {
  const redemtionInput = form["form-calculator-redemtion"];
  const redemtionValue = redemtionInput?.value;

  const priceInput = form["form-calculator-price"];
  const priceValue = priceInput?.value;

  const resultBlock = form.querySelector("#form-calculator-redemtion-result");

  if (priceInput && redemtionInput && resultBlock) {
    resultBlock.innerText = Math.round(+priceValue * +redemtionValue / 100).toLocaleString("ru");
  }
}
