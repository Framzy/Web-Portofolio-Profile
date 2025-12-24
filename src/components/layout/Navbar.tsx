// src/components/navbar/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";
import type { Section } from "../../types/sections";
import DownloadCvButton from "../ui/DownloadCvButton";

type Props = {
  goTo: (section: Section) => void;
};

export default function Navbar({ goTo }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // tutup kalau klik di luar
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

  // block body scroll saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (section: Section) => {
    goTo(section);
    setOpen(false);
  };

  const navItems = (
    <>
      <li>
        <button
          className="navbar-navItem text-[#39EEFA]"
          onClick={() => handleNav("about")}
        >
          ABOUT
        </button>
      </li>
      <li>
        <button className="navbar-navItem" onClick={() => handleNav("skill")}>
          SKILLS
        </button>
      </li>
      <li>
        <button className="navbar-navItem" onClick={() => handleNav("project")}>
          PROJECTS
        </button>
      </li>
      <li>
        <button
          className="navbar-navItem flex items-center"
          onClick={() => {
            /* jika ada submenu, handle */
          }}
        >
          CONNECT <RxCaretDown size={16} className="ml-2" />
        </button>
      </li>
    </>
  );

  return (
    <nav className="bg-[#0A090F] border-b border-[#8A8A8A]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <h1 className="text-white font-bold font-vollkorn">FRAMZY.</h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex text-white gap-7 xl:gap-12 font-manrope text-sm items-center">
          {navItems}
        </ul>

        {/* Right actions (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <DownloadCvButton href="/cv_file/cv.pdf" fileName="Framzy_CV.pdf" />
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center">
          <button
            ref={btnRef}
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md text-white hover:cursor-pointer"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden fixed inset-x-4 top-16 z-50 transform transition-all duration-200 ease-out ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="bg-[#0A090F] border border-[#2B2B2B] rounded-lg shadow-lg py-6 px-5">
          <ul className="flex flex-col gap-4 text-white font-manrope text-base">
            <li>
              <button
                className="w-full text-left navbar-navItem"
                onClick={() => handleNav("about")}
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                className="w-full text-left navbar-navItem"
                onClick={() => handleNav("skill")}
              >
                SKILLS
              </button>
            </li>
            <li>
              <button
                className="w-full text-left navbar-navItem"
                onClick={() => handleNav("project")}
              >
                PROJECTS
              </button>
            </li>
            <li>
              <button
                className="w-full text-left navbar-navItem flex items-center justify-between"
                onClick={() => {
                  /* handle connect submenu if ada */
                }}
              >
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
