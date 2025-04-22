"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import content from "@/data/content.json";
import { Project } from "@/types/types";
import { renderContent, renderTags } from "@/components/projects";
import { X, ArrowRight, Figma } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";

export default function Wellness() {
  const [active, setActive] = useState<Project | boolean | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);
  const wellness = content.projects.wellness;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="lg:hidden flex absolute top-3 right-3 p-3 items-center justify-center h-[3.125rem] rounded-full border border-zinc-800 hover:border-neutral-600 bg-black/50"
              onClick={() => setActive(null)}
            >
              <X />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="p-10 relative w-full max-w-[31.25rem] h-fit flex flex-col bg-black/90 rounded-[3rem] overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="relative flex justify-center"
              >
                <div className="absolute right-0 w-[0.77px] h-[0.77px] bg-[#252525] rounded-full shadow-[0px_0px_76.34083557128906px_93.80541229248047px_rgba(142,142,142,0.25)]" />
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full object-cover object-top pointer-events-none"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start py-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-semibold text-lg text-neutral-200 font-switzer"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray text-sm font-switzer"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.source}
                      target="_blank"
                      className="p-3 flex rounded-full border border-zinc-800 hover:border-neutral-600 bg-black/50"
                    >
                      <Figma />
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.explore}
                      target="_blank"
                      className="p-3 rounded-full border border-zinc-800 hover:border-neutral-600 bg-black/50"
                    >
                      <ArrowRight />
                    </motion.a>
                  </div>
                </div>
                <div className="pt-2 relative">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-fit flex flex-col gap-5"
                  >
                    <div className="text-base text-neutral-200 h-fit overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                      <p>{renderContent(active.content)}</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      {renderTags(wellness)}
                    </div>
                  </motion.div>
                </div>
                <div className="w-[0.77px] h-[0.77px] bg-[#252525] rounded-full shadow-[0px_0px_76.34083557128906px_93.80541229248047px_rgba(142,142,142,0.25)]" />
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <BlurFade delay={0.35} direction={"up"} inView>
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            layoutId={`card-${wellness.title}-${id}`}
            onClick={() => setActive(wellness)}
            className="p-10 flex flex-col bg-black rounded-[3rem] overflow-hidden cursor-Explore"
          >
            <div className="flex gap-4 flex-col w-full relative">
              <div className="absolute right-0 z-20 w-[0.77px] h-[0.77px] bg-[#252525] rounded-full shadow-[0px_0px_76.34083557128906px_93.80541229248047px_rgba(142,142,142,0.25)]" />
              <motion.div layoutId={`image-${wellness.title}-${id}`}>
                <img
                  src={wellness.src}
                  alt={wellness.title}
                  className="w-full pointer-events-none"
                />
              </motion.div>
              <div className="flex justify-center flex-col relative">
                <div className="absolute z-20 w-[0.77px] h-[0.77px] bg-[#252525] rounded-full shadow-[0px_0px_76.34083557128906px_93.80541229248047px_rgba(142,142,142,0.25)]" />
                <motion.h3
                  layoutId={`title-${wellness.title}-${id}`}
                  className="font-semibold font-switzer text-white text-lg text-left"
                >
                  {wellness.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${wellness.description}-${id}`}
                  className="text-gray text-sm font-switzer"
                >
                  {wellness.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </BlurFade>
    </>
  );
}
