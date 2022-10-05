export function premiumFilterAction(event) {
  const form = event.target.closest("form");
  const input = event.target;
  const value = input.value;
  const name = input.name;

  if (name === "filter-type-form-premium") {
    const a = form.querySelector[`data-type="${value}"`];
    console.log(a);
  }
}
