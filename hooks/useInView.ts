import { useEffect, useRef, useState } from "react";

export default function useInView(
  threshold: number = 0.3,
  once: boolean = true,
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const target = ref.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once) {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(target);
          }
        } else {
          setActive(entry.isIntersecting);
        }
      },
      { threshold },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, active };
}
