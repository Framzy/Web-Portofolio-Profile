type Props = {
  href: string;
  fileName: string;
};

export default function DownloadCvButton({ href, fileName }: Props) {
  return (
    <>
      <div
        aria-label="Download CV"
        className="bg-white text-black text-xs md:text-sm font-bold font-manrope h-10 md:h-12 w-40 md:w-50 lg:w-57 mr-2 rounded hover:bg-[#39EEFA] cursor-pointer transition-all duration-300 delay-75 ease-in-out
        "
      >
        <a
          href={href}
          download={fileName}
          className="flex items-center justify-center h-full w-full"
        >
          DOWNLOAD CV
        </a>
      </div>
    </>
  );
}
