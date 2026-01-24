import { useState } from "react";

type Props = {
  href: string;
  fileName: string;
};

export default function DownloadCvButton({ href, fileName }: Props) {
  const [confirm, setConfirm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const open = () => {
    setConfirm(true);

    requestAnimationFrame(() => setIsVisible(true));
  };

  const close = () => {
    setIsVisible(false);
    setTimeout(() => setConfirm(false), 300);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Download CV"
        onClick={open}
        className="bg-white text-black text-xs md:text-md font-bold font-manrope h-10 md:h-11 w-40 md:w-50 lg:w-57 mr-2 rounded hover:bg-[#39EEFA] cursor-pointer transition-all duration-300 delay-75 ease-in-out
        "
      >
        DOWNLOAD CV
      </button>

      {confirm && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center
            transition-opacity duration-300
            ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300
              ${isVisible ? "opacity-100" : "opacity-0"}`}
            onClick={close}
          />

          <div
            className={`relative z-10 bg-[#0A0A0A] font-manrope p-6 rounded-xl text-white border border-[#ffffff]
              transform transition-all duration-300 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            role="dialog"
            aria-modal="true"
            aria-label="Confirm download"
          >
            <p className="mb-4 text-center md:mb-6">Download CV sekarang?</p>
            <div className="flex gap-3 justify-center">
              <button
                className="px-3 py-1 bg-zinc-700 rounded cursor-pointer md:px-5 md:py-2"
                onClick={close}
              >
                Cancel
              </button>

              <a
                href={href}
                download={fileName}
                className="px-3 py-1 bg-[#39EEFA] text-black rounded cursor-pointer inline-flex items-center justify-center"
                onClick={close}
              >
                Yes, Download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
