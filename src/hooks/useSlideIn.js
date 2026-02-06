import { useState, useEffect, useRef } from 'react';

/**
 * Hook pour animer un élément en slide-in depuis la gauche
 * quand il entre dans le viewport.
 *
 * @param {object} options
 * @param {number} options.threshold - % de visibilité pour déclencher (0-1)
 * @param {number} options.delay - délai en ms avant l'animation
 * @returns {{ ref, isVisible }}
 */
const useSlideIn = ({ threshold = 0.2, delay = 0 } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return { ref, isVisible };
};

export default useSlideIn;
