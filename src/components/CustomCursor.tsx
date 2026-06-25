import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Mouse Coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the outer ring
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.6 });

  useEffect(() => {
    // Only enable custom cursor for non-touch desktop viewports
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 1024) {
      return;
    }

    setIsVisible(true);
    document.body.classList.add("custom-cursor-enabled");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Dynamic hover states for clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.closest('[role="button"]') ||
        target.classList.contains("clickable");
      
      if (isClickable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Pinpoint Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          left: mouseX,
          top: mouseY,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "#F8F8F8" : "#D4AF37",
        }}
      />
      {/* Outer Spring Ring */}
      <motion.div
        className="cursor-ring"
        style={{
          left: ringX,
          top: ringY,
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovered ? 1.8 : 1,
          borderColor: isHovered ? "#D4AF37" : "rgba(212, 175, 55, 0.4)",
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.1)" : "rgba(212, 175, 55, 0)",
        }}
      />
    </>
  );
}
