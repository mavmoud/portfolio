/** One individual tag object (label, logo, color, etc.) */
export interface TagData {
    label: string
    logoSrc: string
    color: string
}

/** Sub-structure for "tech" */
export interface TechSections {
    languages: Record<string, TagData>
    frameworks: Record<string, TagData>
    databases: Record<string, TagData>
    tools: Record<string, TagData>
    other: Record<string, TagData>
}

/** Overall structure for tags.json */
export interface TagsFile {
    companies: Record<string, TagData>
    institutions: Record<string, TagData>
    tech: TechSections
}