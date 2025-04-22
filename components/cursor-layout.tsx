"use client";
import { useState, useEffect } from "react";
import { Cursor } from "@/components/ui/cursor";
import { AnimatePresence, motion } from "motion/react";

export function CursorLayout() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("Explore");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('[class*="cursor-"]');

      if (interactiveElement) {
        const classes = interactiveElement.className.split(" ");
        const hoverClass = classes.find((cls) => cls.startsWith("cursor-"));

        if (hoverClass === "cursor-hide") {
          setIsVisible(false);
        } else {
          setIsVisible(true);
          setIsHovering(true);
          setHoverText(hoverClass ? hoverClass.split("-")[1] : "Explore");
        }
      } else {
        setIsVisible(true);
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsVisible(true);
      setIsHovering(false);
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;
  return (
    <Cursor
      variants={{
        initial: { scale: 0.3, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.3, opacity: 0 },
      }}
      springConfig={{
        bounce: 0.001,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.15,
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 86 : 20,
          height: isHovering ? 38 : 20,
        }}
        className="flex items-center justify-center rounded-[24px] bg-[#101010] shadow-[inset_0px_0px_4px_0px_rgba(147,147,147,0.25)] backdrop-blur-md dark:bg-gray-300/40"
      >
        <AnimatePresence>
          {isHovering ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="inline-flex w-full items-center justify-center"
            >
              <div className="inline-flex items-center font-switzer text-base text-white">
                {hoverText}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </Cursor>
  );
}
