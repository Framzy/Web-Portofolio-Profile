import type { RefObject } from "react";

export const SECTIONS = ["about", "skill", "project"] as const;

export type Section = (typeof SECTIONS)[number];

export type SectionsRefs = Record<Section, RefObject<HTMLDivElement | null>>;
