import { useState } from "react";
import { useDownloadFile } from "../../hooks/useDownloadFile";

export default function DownloadCvButton({ path, filename }: any) {
  const { downloadFile, loading } = useDownloadFile();
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <button
        onClick={() => setConfirm(true)}
        className="bg-white text-black h-11 w-60 rounded hover:bg-[#39EEFA] cursor-pointer"
      >
        {loading ? "Preparing..." : "DOWNLOAD CV"}
      </button>

      {confirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-[#0A0A0A] p-6 rounded text-white">
            <p className="mb-4 text-center">Download CV sekarang?</p>
            <div className="flex  gap-3">
              <button
                className="px-3 py-1 bg-zinc-700 rounded cursor-pointer"
                onClick={() => setConfirm(false)}
              >
                Cancel
              </button>

              <button
                className="px-3 py-1 bg-[#39EEFA] text-black rounded cursor-pointer"
                onClick={() => {
                  setConfirm(false);
                  downloadFile(path, filename);
                }}
              >
                Yes, Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
