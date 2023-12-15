import { useEffect, useRef } from "react";

export default function useInfiniteScroll(callback: () => any) {
  const bottomBoundaryRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          callback();
        }
      },
      { threshold: 1 }
    );

    if (bottomBoundaryRef.current) {
      observer.observe(bottomBoundaryRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [bottomBoundaryRef, callback]);

  return {
    bottomBoundaryRef,
  };
}
