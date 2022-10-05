export function faqAction(event) {
  const faqButton = event.target.closest("[data-spoller][data-target]");
  const faqButtonData = faqButton.dataset.target;
  const faqAnswer = document.querySelector(`[data-answer="${faqButtonData}"]`);

  if (faqAnswer) {
    document.querySelectorAll("[data-answer]").forEach(answer => {
      answer.hidden = true;
    });

    faqAnswer.toggleAttribute("hidden", !faqButton.classList.contains("active"));
  }
}
