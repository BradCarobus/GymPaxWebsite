// Gym Pax landing interactions (accessible + performant)
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ========== Smooth scrolling for in-page nav links ========== */
  const nav = document.querySelector('.nav-menu');
  if (nav) {
    nav.addEventListener('click', (e) => {
      const link = e.target.closest('a.nav-link');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      // Only intercept in-page anchors like "#features"
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
          });
        }
      }
      // else let normal navigation happen (e.g., privacy-policy.html)
    }, { passive: true });
  }

  /* ========== Primary CTA scrolls to download ========== */
  const primaryBtn = document.querySelector('.btn-primary');
  if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
      const dl = document.querySelector('#download');
      if (dl) {
        dl.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    }, { passive: true });
  }

  /* ========== Download buttons (use real links when ready) ========== */
  const downloadButtons = document.querySelectorAll('.btn-download');
  downloadButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Subtle press animation
      btn.style.transform = 'scale(0.97)';
      setTimeout(() => { btn.style.transform = ''; }, 120);

      const platform = btn.classList.contains('ios') ? 'iOS' : 'Android';
      // TODO: Replace this with window.location.href = 'YOUR_STORE_LINK';
      alert(`Download link for ${platform} coming soon!`);
    });
  });

  /* ========== Feature card reveal (IntersectionObserver) ========== */
  const featureCards = document.querySelectorAll('.feature-card');
  if (featureCards.length && !prefersReducedMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    featureCards.forEach((card, idx) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = `opacity 0.6s ease ${idx * 0.08}s, transform 0.6s ease ${idx * 0.08}s`;
      io.observe(card);
    });
  }

  /* ========== Navbar background on scroll + hero parallax (rAF) ========== */
  const navbar = document.querySelector('.navbar');
  const heroImage = document.querySelector('.app-mockup');
  let ticking = false;

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;

    if (navbar) {
      navbar.style.background = y > 50
        ? 'rgba(15, 15, 15, 0.98)'
        : 'rgba(15, 15, 15, 0.95)';
    }

    if (heroImage && !prefersReducedMotion) {
      // Use translate3d to hint GPU acceleration
      const offset = y * 0.1;
      heroImage.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  onScroll(); // initialize once

  /* ========== Hover lift on feature pills (keyboard-friendly) ========== */
  const featurePills = document.querySelectorAll('.feature-pill');
  featurePills.forEach((pill) => {
    const lift = (scale) => { pill.style.transform = `scale(${scale})`; };
    pill.addEventListener('mouseenter', () => lift(1.05));
    pill.addEventListener('mouseleave', () => lift(1));
    pill.addEventListener('focus', () => lift(1.05));
    pill.addEventListener('blur', () => lift(1));
  });

  /* ========== Click ripple effect (pointer events, single handler) ========== */
  function createRipple(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');

    const x = (event.clientX || (event.touches && event.touches[0]?.clientX) || rect.left) - rect.left - size / 2;
    const y = (event.clientY || (event.touches && event.touches[0]?.clientY) || rect.top) - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 600ms linear';
    ripple.style.pointerEvents = 'none';

    const prevPos = getComputedStyle(button).position;
    if (prevPos === 'static') button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  }

  // inject ripple keyframes once
  const key = document.createElement('style');
  key.textContent = `
    @keyframes ripple {
      to { transform: scale(2); opacity: 0; }
    }
  `;
  document.head.appendChild(key);

  // Apply ripple to interactive buttons (use pointerdown for snappier feel)
  const rippleTargets = document.querySelectorAll('button, .btn-download');
  rippleTargets.forEach((el) => {
    el.addEventListener('pointerdown', createRipple, { passive: true });
  });

  console.log('Gym Pax landing page loaded successfully! 💪');
});
