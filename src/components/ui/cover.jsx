"use client";
import React, { useEffect, useId, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { SparklesCore } from "./sparkles";

// Detect true touch-only devices (phones/tablets) vs mouse users
const getIsTouch = () =>
  typeof window !== "undefined" &&
  !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export const Cover = ({
  children,
  className,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const ref = useRef(null);
  const touchTimeoutRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [beamPositions, setBeamPositions] = useState([]);
  // Stable random values — generated once, not on every render
  const beamRandomsRef = useRef([]);

  useEffect(() => {
    setIsTouch(getIsTouch());
  }, []);

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current?.clientWidth ?? 0);

      const height = ref.current?.clientHeight ?? 0;
      const numberOfBeams = Math.floor(height / 10);
      const positions = Array.from(
        { length: numberOfBeams },
        (_, i) => (i + 1) * (height / (numberOfBeams + 1))
      );
      beamRandomsRef.current = positions.map(() => ({
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 2 + 1,
      }));
      setBeamPositions(positions);
    }
  }, [ref.current]);

  // Touch: activate effect on tap, auto-dismiss after 1.5 s
  const handleTouchStart = () => {
    setHovered(true);
    clearTimeout(touchTimeoutRef.current);
    touchTimeoutRef.current = setTimeout(() => setHovered(false), 1500);
  };

  const handleTouchEnd = () => {
    // Let the timeout handle dismissal so the effect is visible briefly
  };

  // Particle density: lighter on mobile to avoid crashes
  const density = isTouch ? 120 : 500;

  return (
    <div
      onMouseEnter={() => !isTouch && setHovered(true)}
      onMouseLeave={() => !isTouch && setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={ref}
      className={cn(
        "relative group/cover inline-block bg-neutral-900 hover:bg-neutral-900 px-2 py-2 transition duration-200 rounded-sm",
        className
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.2 } }}
            className="h-full w-full overflow-hidden absolute inset-0"
          >
            <motion.div
              animate={{ translateX: ["-50%", "0%"] }}
              transition={{
                translateX: { duration: 10, ease: "linear", repeat: Infinity },
              }}
              className="w-[200%] h-full flex"
            >
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={density}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={density}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {beamPositions.map((position, index) => (
        <Beam
          key={index}
          hovered={hovered}
          duration={beamRandomsRef.current[index]?.duration ?? 2}
          delay={beamRandomsRef.current[index]?.delay ?? 1}
          width={containerWidth}
          style={{ top: `${position}px` }}
        />
      ))}

      <motion.span
        key={String(hovered)}
        animate={{
          scale: hovered ? 0.8 : 1,
          x: hovered ? [0, -30, 30, -30, 30, 0] : 0,
          y: hovered ? [0, 30, -30, 30, -30, 0] : 0,
        }}
        exit={{ filter: "none", scale: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.2,
          x: { duration: 0.2, repeat: Infinity, repeatType: "loop" },
          y: { duration: 0.2, repeat: Infinity, repeatType: "loop" },
          scale: { duration: 0.2 },
          filter: { duration: 0.2 },
        }}
        className={cn(
          "text-white inline-block relative z-20 group-hover/cover:text-white transition duration-200"
        )}
      >
        {children}
      </motion.span>

      <CircleIcon className="absolute -right-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -right-[2px]" delay={0.4} />
      <CircleIcon className="absolute -left-[2px] -top-[2px]" delay={0.8} />
      <CircleIcon className="absolute -bottom-[2px] -left-[2px]" delay={1.6} />
    </div>
  );
};

export const Beam = ({
  className,
  delay,
  duration,
  hovered,
  width = 600,
  ...svgProps
}) => {
  const id = useId();

  return (
    <motion.svg
      width={width ?? "600"}
      height="1"
      viewBox={`0 0 ${width ?? "600"} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-x-0 w-full", className)}
      {...svgProps}
    >
      <motion.path
        d={`M0 0.5H${width ?? "600"}`}
        stroke={`url(#svgGradient-${id})`}
      />
      <defs>
        <motion.linearGradient
          id={`svgGradient-${id}`}
          key={String(hovered)}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: hovered ? "-10%" : "-5%",
            y1: 0,
            y2: 0,
          }}
          animate={{
            x1: "110%",
            x2: hovered ? "100%" : "105%",
            y1: 0,
            y2: 0,
          }}
          transition={{
            duration: hovered ? 0.5 : duration ?? 2,
            ease: "linear",
            repeat: Infinity,
            delay: hovered ? Math.random() * (1 - 0.2) + 0.2 : 0,
            repeatDelay: hovered ? Math.random() * (2 - 1) + 1 : delay ?? 1,
          }}
        >
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

export const CircleIcon = ({ className, delay }) => {
  return (
    <div
      className={cn(
        "pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-100 group h-2 w-2 rounded-full bg-white opacity-20 group-hover/cover:bg-white",
        className
      )}
    />
  );
};
