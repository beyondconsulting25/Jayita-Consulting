import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms before starting the animation
  duration?: number; // Transition duration in ms (defaults to 800)
  threshold?: number; // IntersectionObserver threshold (0 to 1)
  direction?: "up" | "down" | "left" | "right" | "none"; // Animation direction
  distance?: string; // Distance to translate (e.g., '24px', '40px')
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
  threshold = 0.05,
  direction = "up",
  distance = "24px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Trigger when the element is slightly visible
      }
    );

    observer.observe(el);

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [threshold]);

  const getTransformStyle = () => {
    if (isRevealed) return "translate(0, 0) scale(1)";
    switch (direction) {
      case "up":
        return `translateY(${distance})`;
      case "down":
        return `translateY(-${distance})`;
      case "left":
        return `translateX(${distance})`;
      case "right":
        return `translateX(-${distance})`;
      case "none":
      default:
        return "none";
    }
  };

  const style = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    opacity: isRevealed ? 1 : 0,
    transform: getTransformStyle(),
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
