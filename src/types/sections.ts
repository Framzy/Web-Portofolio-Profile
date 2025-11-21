// src/types/sections.ts
import type { RefObject } from "react";

export type Section = "about" | "skill" | "project";

export type SectionsRefs = Record<Section, RefObject<HTMLDivElement | null>>;

export type OutletContextValue = {
  refs: SectionsRefs;
  goTo: (section: Section) => void;
};
