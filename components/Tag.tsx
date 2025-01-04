import React, { FC } from "react";
import rawTags from "@/data/tags.json";
import type { TagsFile, TagData } from "@/types/types";

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
};

const Tag: FC<TagProps> = ({ type, category, tagKey }) => {
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

  return (
    <div className={`font-switzer text-silver text-xl`}>
      <div
        className="w-[fit-content] h-[38px] px-3 rounded-2xl border justify-center items-center inline-flex gap-2"
        style={{ backgroundColor, borderColor }}
      >
        <div>
          {logoSrc && <img className={`h-[22px]`} src={logoSrc} alt={label} />}
        </div>
        <div>{label}</div>
      </div>
    </div>
  );
};

export default Tag;
