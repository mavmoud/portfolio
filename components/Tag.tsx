import React, { FC } from "react";
import rawTags from "@/data/tags.json";
import type { TagsFile, TagData } from "@/types/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleanHex = hex.replace(/^#/, "");
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  return { r, g, b };
}

const tags = rawTags as TagsFile;

type TechCategory = keyof TagsFile["tech"];
type TagProps = {
  type: "tech" | "companies" | "institutions";
  category?: TechCategory;
  tagKey: string;
  mode?: "default" | "logo"; // Add a mode prop for switching views
};

const Tag: FC<TagProps> = ({ type, category, tagKey, mode = "default" }) => {
  let tagData: TagData | undefined;

  if (type === "tech" && category) {
    tagData = tags.tech[category][tagKey];
  } else if (type === "institutions") {
    tagData = tags.institutions[tagKey];
  } else if (type === "companies") {
    tagData = tags.companies[tagKey];
  }

  if (!tagData) return <span>{tagKey}</span>;

  const { label, logoSrc, color } = tagData;

  const { r, g, b } = hexToRgb(color);

  const backgroundColor = `rgba(${r}, ${g}, ${b}, 0.15)`;
  const borderColor = `rgba(${r}, ${g}, ${b}, 0.5)`;

  if (mode === "logo") {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="h-[2.375rem] w-[2.375rem] rounded-[0.9rem] border justify-center items-center inline-flex border-zinc-800 bg-black/50">
              {logoSrc && (
                <img
                  className="h-[1.375rem] pointer-events-none"
                  src={logoSrc}
                  alt={label}
                />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent className="dark px-2 py-1 text-xs">
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className="font-switzer text-silver text-xl">
      <div
        className="h-[2.375rem] px-3 rounded-2xl border justify-center items-center inline-flex gap-2"
        style={{ backgroundColor, borderColor }}
      >
        <div>
          {logoSrc && (
            <img
              className="h-[1.375rem] pointer-events-none"
              src={logoSrc}
              alt={label}
            />
          )}
        </div>
        <div>{label}</div>
      </div>
    </div>
  );
};

export default Tag;
