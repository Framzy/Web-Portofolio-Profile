import { useState } from "react";

export function useDownloadFile() {
  const [loading, setLoading] = useState(false);

  const downloadFile = async (href: string, filename: string) => {
    try {
      setLoading(true);

      // Jika file di public folder
      if (href.startsWith("/")) {
        const a = document.createElement("a");
        a.href = href;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setLoading(false);
        return;
      }

      // Jika file eksternal
      const res = await fetch(href);
      if (!res.ok) throw new Error("Download gagal");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert("Gagal mengunduh file. Pastikan file tersedia.");
    }
  };

  return { downloadFile, loading };
}
