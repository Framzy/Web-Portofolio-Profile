import { useState } from "react";

// DownloadCvButton.tsx
export default function DownloadCvButton() {
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <button
        onClick={() => setConfirm(true)}
        className="bg-white text-black h-11 w-60 rounded hover:bg-[#39EEFA] cursor-pointer"
      >
        DOWNLOAD CV
      </button>

      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-[#0A0A0A] p-6 rounded text-white">
            <p className="mb-4 text-center">Download CV sekarang?</p>
            <div className="flex gap-3">
              <button
                className="px-3 py-1 bg-zinc-700 rounded cursor-pointer"
                onClick={() => setConfirm(false)}
              >
                Cancel
              </button>

              <a
                href="/cv_file/cv.pdf"
                download="Framzy_CV.pdf"
                className="px-3 py-1 bg-[#39EEFA] text-black rounded cursor-pointer inline-flex items-center justify-center"
                onClick={() => setConfirm(false)}
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
