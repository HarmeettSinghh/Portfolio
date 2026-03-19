import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop (non-touch) on mount — avoids SSR issues
  useEffect(() => {
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    const isWide = window.innerWidth >= 768;
    setIsDesktop(hasPointer && isWide);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const dot = dotRef.current;
    const circle = circleRef.current;

    gsap.set(dot, { xPercent: -50, yPercent: -50, force3D: true });
    gsap.set(circle, { xPercent: -50, yPercent: -50, force3D: true });

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let dotPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let circlePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);

    const render = () => {
      dotPos.x += (mouse.x - dotPos.x) * 0.4;
      dotPos.y += (mouse.y - dotPos.y) * 0.4;

      circlePos.x += (mouse.x - circlePos.x) * 0.15;
      circlePos.y += (mouse.y - circlePos.y) * 0.15;

      gsap.set(dot, { x: dotPos.x, y: dotPos.y });
      gsap.set(circle, { x: circlePos.x, y: circlePos.y });
    };

    gsap.ticker.add(render);

    const links = document.querySelectorAll("a, button");

    const onMouseEnter = () => {
      gsap.to(circle, {
        scale: 1.5,
        backgroundColor: "rgba(245, 245, 220, 0.15)",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(dot, { scale: 0, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(circle, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnter);
      link.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      gsap.ticker.remove(render);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnter);
        link.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [isDesktop]);

  // Render nothing at all on mobile/touch — no stuck dot in the corner
  if (!isDesktop) return null;

  return (
    <>
      <div
        ref={circleRef}
        className="fixed w-10 h-10 rounded-full border border-[var(--color-brand-creme)] opacity-50 pointer-events-none z-[9998]"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full bg-[var(--color-brand-creme)] pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
