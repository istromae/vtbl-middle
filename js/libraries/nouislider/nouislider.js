import noUiSlider from "nouislider";

const catalogRange = document.querySelector(".custom-range__range");

if (catalogRange) {
  noUiSlider.create(catalogRange, {
    start: [4000000, 75000000],
    connect: true,
    range: {
      'min': [1000000],
      'max': [100000000]
    }
  });

  const catalogRangeValueElements = [
    document.querySelector("#custom-range-from span"),
    document.querySelector("#custom-range-to span"),
  ];

  catalogRange.noUiSlider.on("update", (values, handle) => {
    catalogRangeValueElements[handle].innerText = Math.trunc(values[handle]).toLocaleString("ru");
  });
}
