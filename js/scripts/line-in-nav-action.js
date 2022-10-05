const sectionsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const section = entry.target;
    section.classList.forEach(cl => {
      const link = document.querySelector(`[data-goto=".${cl}"]`);
      link?.classList[entry.isIntersecting ? "add" : "remove"]("active");
    });
  });
}, { threshold: 0.5 });

const links = document.querySelectorAll(".nav-header__link[data-goto]");
links?.forEach(link => {
  const section = document.querySelector(link.dataset.goto);
  if (section) sectionsObserver.observe(section);
});
