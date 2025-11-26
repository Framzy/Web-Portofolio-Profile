import { useState } from "react";

type Props = {
  href: string;
  fileName: string;
};

export default function DownloadCvButton({ href, fileName }: Props) {
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
          <div className="bg-[#0A0A0A] font-manrope p-6 rounded text-white border border-[#39EEFA] md:p-10 transition-all ease-in-out duration-300">
            <p className="mb-4 text-center md:mb-6">Download CV sekarang?</p>
            <div className="flex gap-3">
              <button
                className="px-3 py-1 bg-zinc-700 rounded cursor-pointer md:px-5 md:py-2"
                onClick={() => setConfirm(false)}
              >
                Cancel
              </button>

              <a
                href={href}
                download={fileName}
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
