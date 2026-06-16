import { useEffect } from 'react';

export function useEntryAnimations() {
  useEffect(() => {
    const animated = new Set<HTMLElement>();
    const motionSafe = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers: number[] = [];

    const register = (selector: string, variant = 'up') => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        if (animated.has(element)) {
          return;
        }

        animated.add(element);
        element.classList.add('heybuds-animate', `heybuds-animate--${variant}`);
        element.style.setProperty('--heybuds-delay', `${Math.min(index * 0.12, 0.48)}s`);
      });
    };

    register('.rts-banner-area-three .left-content-area > ul');
    register('.rts-banner-area-three .section-title-area');
    register('.rts-banner-area-three .left-content-area > .desc');
    register('.rts-banner-area-three .left-content-area > .button-area');
    register('.rts-banner-area-three .right-content-area', 'right');
    register('.banner-chat-area .chat', 'right');
    register('.bottom-brand-area li', 'scale');
    register('.rts-section-gap .section-title-area, .rts-section-gapBottom .section-title-area, .rts-working-process-area .section-title-area, .rts-testimonials-area .section-title-area');
    register('.service-wrapper2, .service-wrapper3');
    register('.feature-wrapper3');
    register('.customer-left-image-area', 'left');
    register('.customer-right-content-area', 'right');
    register('.pricing-wrapper');
    register('.working-process-wrapper');
    register('.left-faq-content-area', 'left');
    register('.rts-accordion .accordion-item', 'right');
    register('.left-image-area.ext-images', 'left');
    register('.client-review-area, .author-stars-area', 'right');
    register('.blog-wrapper2');
    register('.footer-contact-bar__item, .single-footer-widget-one');

    if (!motionSafe) {
      animated.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.14 },
    );

    animated.forEach((element) => observer.observe(element));

    document.querySelectorAll<HTMLElement>('.banner-chat-area .chat .text').forEach((element, index) => {
      const message = element.textContent?.trim() ?? '';
      element.textContent = '';

      const startTimer = window.setTimeout(() => {
        let cursor = 0;

        const type = () => {
          element.textContent = message.slice(0, cursor);
          cursor += 1;

          if (cursor <= message.length) {
            timers.push(window.setTimeout(type, 24));
          }
        };

        type();
      }, 850 + index * 750);

      timers.push(startTimer);
    });

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);
}
