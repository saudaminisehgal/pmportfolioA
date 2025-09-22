// Main interaction script for Saudamini's portfolio.
// Handles mobile navigation, stat animations, smooth scrolling,
// and lightweight contact form validation.
(function () {
  const doc = document;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Mobile navigation toggle
  const navToggle = doc.querySelector('[data-nav-toggle]');
  const navMenu = doc.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('hidden');
    });
  }

  // Smooth scroll for same-page anchor links
  const smoothLinks = doc.querySelectorAll('a[data-scroll]');
  smoothLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId.charAt(0) !== '#') return;
      const target = doc.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
      target.focus({ preventScroll: true });
    });
  });

  // Stat count-up animation on the homepage
  const counters = doc.querySelectorAll('[data-count-up]');
  if (counters.length && !prefersReducedMotion.matches) {
    const animateCounter = (entry) => {
      const el = entry.target;
      const finalValue = Number(el.dataset.countUp || '0');
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(finalValue * eased).toLocaleString()}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  // Contact form validation + fetch fallback
  const form = doc.querySelector('[data-contact-form]');
  const statusEl = doc.querySelector('[data-form-status]');

  if (form) {
    form.addEventListener('submit', async (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
        return;
      }

      const endpoint = form.getAttribute('action') || '';
      const formData = new FormData(form);

      if (endpoint.includes('your-form-id')) {
        event.preventDefault();
        if (statusEl) {
          statusEl.textContent = 'Update the Formspree endpoint to activate this form.';
          statusEl.classList.remove('text-green-600');
          statusEl.classList.add('text-red-600');
        }
        return;
      }

      event.preventDefault();
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        });

        if (response.ok) {
          form.reset();
          if (statusEl) {
            statusEl.textContent = 'Thanks for reaching out! Expect a reply within 2 business days.';
            statusEl.classList.remove('text-red-600');
            statusEl.classList.add('text-green-600');
          }
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        if (statusEl) {
          statusEl.textContent = 'We could not send your message. Please email saudamini.sehgal@gmail.com directly.';
          statusEl.classList.remove('text-green-600');
          statusEl.classList.add('text-red-600');
        }
      }
    });
  }

  // Auto-update footer year(s)
  const yearEls = doc.querySelectorAll('#current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach((el) => {
    el.textContent = currentYear;
  });
})();
