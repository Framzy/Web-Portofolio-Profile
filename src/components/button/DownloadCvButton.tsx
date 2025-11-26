import { useState } from "react";

type Props = {
  href: string;
  fileName: string;
};

export default function DownloadCvButton({ href, fileName }: Props) {
  const [confirm, setConfirm] = useState(false); // kontrol mount
  const [isVisible, setIsVisible] = useState(false); // kontrol kelas animasi

  const open = () => {
    setConfirm(true);
    // jalankan setIsVisible pada tick berikutnya supaya transition 'enter' bekerja
    requestAnimationFrame(() => setIsVisible(true));
  };

  const close = () => {
    // mulai animasi keluar
    setIsVisible(false);
    // setelah durasi animasi, unmount
    setTimeout(() => setConfirm(false), 300); // pastikan sama dengan duration kelas Tailwind
  };

  return (
    <>
      <button
        onClick={open}
        className="bg-white text-black font-bold font-manrope h-11 w-60 rounded hover:bg-[#39EEFA] cursor-pointer transition-all duration-300 ease-in-out
          text-[11px] md:text-sm
        "
      >
        DOWNLOAD CV
      </button>

      {confirm && (
        // Container overlay: kita juga animasikan overlay (fade)
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center
            transition-opacity duration-300
            ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          // pointer-events-none saat hidden agar klik di belakang tidak tertangkap
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300
              ${isVisible ? "opacity-100" : "opacity-0"}`}
            onClick={close} // klik backdrop juga menutup
          />

          {/* Modal box */}
          <div
            className={`relative z-10 bg-[#0A0A0A] font-manrope p-6 rounded text-white border border-[#39EEFA]
              transform transition-all duration-300 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            // aria attributes
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
