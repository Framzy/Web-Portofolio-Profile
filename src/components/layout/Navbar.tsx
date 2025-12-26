// src/components/navbar/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import type { Section } from "../../types/sections";
import DownloadCvButton from "../ui/DownloadCvButton";

type Props = {
  onNavigate: (section: Section) => void;
};

const NAV_ITEMS: { label: string; section: Section }[] = [
  { label: "ABOUT", section: "about" },
  { label: "SKILLS", section: "skill" },
  { label: "PROJECTS", section: "project" },
];

export default function Navbar({ onNavigate }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // close on outside click / ESC
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigate = (section: Section) => {
    onNavigate(section);
    setOpen(false);
  };

  const renderNavItems = (isMobile = false) =>
    NAV_ITEMS.map((item) => (
      <li key={item.section}>
        <button
          type="button"
          className={`navbar-navItem ${isMobile ? "w-full text-left" : ""}`}
          onClick={() => handleNavigate(item.section)}
        >
          {item.label}
        </button>
      </li>
    ));

  return (
    <nav className="bg-[#0A090F] border-b border-[#8A8A8A]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-white font-bold font-vollkorn">FRAMZY.</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-7 xl:gap-12 text-white font-manrope text-sm">
          {renderNavItems()}
          <li>
            <button className="navbar-navItem flex items-center">
              CONNECT <RxCaretDown size={16} className="ml-2" />
            </button>
          </li>
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <DownloadCvButton href="/cv_file/cv.pdf" fileName="Framzy_CV.pdf" />
        </div>

        {/* Mobile button */}
        <button
          ref={btnRef}
          aria-controls="mobile-menu"
          aria-expanded={open ? "true" : "false"}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-white hover:cursor-pointer"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={open ? "false" : "true"}
        className={`md:hidden fixed inset-x-4 top-16 z-50 transition-all duration-200 ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-[#0A090F] border border-[#2B2B2B] rounded-lg mt-2 py-6 px-5">
          <ul className="flex flex-col gap-4 text-white text-sm font-manrope">
            {renderNavItems(true)}
            <li>
              <button className="navbar-navItem flex items-center justify-between">
                <span>CONNECT</span>
                <RxCaretDown size={16} />
              </button>
            </li>
            <li className="pt-2">
              <DownloadCvButton
                href="/cv_file/cv.pdf"
                fileName="Framzy_CV.pdf"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
