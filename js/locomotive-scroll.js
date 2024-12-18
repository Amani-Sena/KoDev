const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))

// Interceptar cliques nos links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        scroll.scrollTo(targetElement);
      }
    });
  });
