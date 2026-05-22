// Site-wide scroll animations + small interactions.
(function () {
  // Scroll reveal via IntersectionObserver
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

  // Initial sweep — if user lands deep in the page (e.g. via anchor), reveal
  // anything that's already at or above the current viewport top.
  function sweepAboveViewport() {
    const scrollBottom = window.scrollY + window.innerHeight;
    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(el => {
      const rect = el.getBoundingClientRect();
      const elTop = rect.top + window.scrollY;
      if (elTop < scrollBottom) {
        el.classList.add('is-visible');
        io.unobserve(el);
      }
    });
  }
  // Run once after layout settles, and again on load for safety
  requestAnimationFrame(sweepAboveViewport);
  window.addEventListener('load', sweepAboveViewport);

  // Stat counter animation
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    if (Number.isNaN(target)) return;
    const duration = 1200;
    const start = performance.now();
    const startVal = 0;
    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(startVal + (target - startVal) * eased);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  const statIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        statIo.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count]').forEach(el => statIo.observe(el));

  // Subtle hero parallax for the preview surface
  const preview = document.querySelector('.hero-preview');
  if (preview && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let raf = null;
    window.addEventListener('scroll', () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = Math.min(60, window.scrollY * 0.06);
        preview.style.transform = `translateY(${-y}px)`;
        raf = null;
      });
    }, { passive: true });
  }
})();
