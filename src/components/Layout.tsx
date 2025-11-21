// src/components/Layout.tsx
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import type {
  SectionsRefs,
  Section,
  OutletContextValue,
} from "../types/sections";

export default function Layout() {
  const refs: SectionsRefs = {
    about: useRef<HTMLDivElement | null>(null),
    skill: useRef<HTMLDivElement | null>(null),
    project: useRef<HTMLDivElement | null>(null),
  };

  const goTo = (section: Section) => {
    refs[section].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Navbar goTo={goTo} />
      <Outlet context={{ refs, goTo } as OutletContextValue} />
    </>
  );
}
