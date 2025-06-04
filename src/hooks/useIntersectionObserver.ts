
import { useEffect, useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const animate = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animateElements = entry.target.querySelectorAll('.animate-on-scroll');
        animateElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('animate-fade-in');
          }, index * 100);
        });

        if (triggerOnce && observerRef.current) {
          observerRef.current.unobserve(entry.target);
        }
      }
    });
  }, [triggerOnce]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(animate, {
      threshold,
      rootMargin
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [animate, threshold, rootMargin]);

  return elementRef;
};
