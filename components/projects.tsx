import Parceler from "@/components/projects/parceler";
import Portfolio from "@/components/projects/portfolio";
import Wellness from "@/components/projects/wellness";
import Tag from "@/components/tag";
import React from "react";

type TechSections = {
  languages?: string[];
  frameworks?: string[];
  databases?: string[];
  tools?: string[];
  other?: string[];
};

export const renderContent = (content: string | Record<string, unknown>) => {
  if (typeof content === "string") {
    return content;
  }
  return JSON.stringify(content);
};

export const renderTags = (project: TechSections) => {
  const categorizedTags: { tagKey: string; category: keyof TechSections }[] = [
    ...(project.frameworks?.map((tag) => ({
      tagKey: tag,
      category: "frameworks" as keyof TechSections,
    })) || []),
    ...(project.languages?.map((tag) => ({
      tagKey: tag,
      category: "languages" as keyof TechSections,
    })) || []),
    ...(project.databases?.map((tag) => ({
      tagKey: tag,
      category: "databases" as keyof TechSections,
    })) || []),
    ...(project.other?.map((tag) => ({
      tagKey: tag,
      category: "other" as keyof TechSections,
    })) || []),
    ...(project.tools?.map((tag) => ({
      tagKey: tag,
      category: "tools" as keyof TechSections,
    })) || []),
  ];

  if (categorizedTags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {categorizedTags.map(({ tagKey, category }) => (
        <Tag
          key={tagKey}
          type="tech"
          category={category}
          tagKey={tagKey}
          mode="logo"
        />
      ))}
    </div>
  );
};

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto w-full grid grid-cols-3 items-start gap-4 min-h-[23.125rem] max-h-fit">
      <Parceler />
      <Portfolio />
      <Wellness />
    </div>
  );
}
