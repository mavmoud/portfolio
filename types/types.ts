export type Project = {
  title: string;
  description: string;
  src: string;
  explore: string;
  source: string;
  content: string | Record<string, unknown>;
  languages?: string[];
  frameworks?: string[];
  databases?: string[];
  tools?: string[];
  other?: string[];
};

export interface TagData {
  label: string;
  logoSrc: string;
  color: string;
}

export interface TechSections {
  languages: Record<string, TagData>;
  frameworks: Record<string, TagData>;
  databases: Record<string, TagData>;
  tools: Record<string, TagData>;
  other: Record<string, TagData>;
}

export interface TagsFile {
  companies: Record<string, TagData>;
  institutions: Record<string, TagData>;
  tech: TechSections;
}
