const headerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.isIntersecting ? headerObserverAction("remove") : headerObserverAction();
  });
});

function headerObserverAction(action = "add") {
  const headerWrapper = document.querySelector(".header__wrapper");

  headerWrapper?.classList[action]("scrolled");
}

const header = document.querySelector(".header");
if (header) headerObserver.observe(header);
