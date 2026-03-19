import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const dot = dotRef.current;
    const circle = circleRef.current;

    // Use force3D to ensure GPU hardware acceleration for the smoothest possible render
    gsap.set(dot, { xPercent: -50, yPercent: -50, force3D: true });
    gsap.set(circle, { xPercent: -50, yPercent: -50, force3D: true });

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let dotPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let circlePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Simply capture raw mouse coordinates, deferring mathematical smoothing to the render loop
    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);

    // Render loop synced exactly to screen refresh rate (reqAnimationFrame)
    const render = () => {
      // 1. ADDING A TINY BIT OF LERP TO THE DOT ITSELF
      // This fixes "micro-stuttering" on standard 125Hz office mice or 60Hz screens.
      // 0.4 feels nearly instant but mathematically smooths out jagged pixel jumps.
      dotPos.x += (mouse.x - dotPos.x) * 0.4;
      dotPos.y += (mouse.y - dotPos.y) * 0.4;

      // 2. KEEPING THE CIRCLE LERP AT 0.15 AS YOU SET IT (perfect for the trailing effect)
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
        backgroundColor: "rgba(245, 245, 220, 0.15)", // subtle fill on hover
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(dot, {
        scale: 0,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to(circle, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(dot, {
        scale: 1,
        duration: 0.3
      });
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
  }, []);

  return (
    <>
      <div
        ref={circleRef}
        className="fixed w-10 h-10 rounded-full border border-[var(--color-brand-creme)] opacity-50 pointer-events-none z-[9998]"
        // Added will-change for browser optimization
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
