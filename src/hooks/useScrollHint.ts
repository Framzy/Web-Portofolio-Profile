import { useEffect, useState } from "react";

type option = {
  hintTreshold?: number;
  topTreshold?: number;
};

export function useScrollHint(option?: option) {
  const { hintTreshold = 50, topTreshold = 400 } = option ?? {};

  const [showScrollHint, setShowScrollHint] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;

          setShowScrollHint(y < hintTreshold);
          setShowScrollTop(y > topTreshold);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [hintTreshold, topTreshold]);
  return { showScrollHint, showScrollTop };
}
