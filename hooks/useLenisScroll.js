import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenisScroll({ lerp = 0.1, smooth = true } = {}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp, // Lower = smoother
      smooth,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [lerp, smooth]);
}
