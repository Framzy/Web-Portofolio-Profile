type Props = {
  openConnect: boolean;
  display?: "desktop" | "mobile";
};

function displayDekstop(openConnect: boolean) {
  return (
    openConnect && (
      <div className="absolute top-full mt-3 w-48 rounded-md bg-black border border-[#2B2B2B] shadow-lg">
        <ul className="py-2 text-sm">
          <li className="px-4 py-2 hover:bg-[#1A1A1A] cursor-pointer">
            LinkedIn
          </li>
          <li className="px-4 py-2 hover:bg-[#1A1A1A] cursor-pointer">Email</li>
        </ul>
      </div>
    )
  );
}

function displayMobile(openConnect: boolean) {
  return (
    <>
      <ul
        className={`
                    mt-2 ml-2 flex flex-col gap-2
                    transition-all duration-200 ease-out
                    origin-top
                    ${
                      openConnect
                        ? "opacity-100 translate-y-0 scale-y-100"
                        : "h-0 opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
                    }
                  `}
      >
        <li>
          <a href="#" className="text-blue-400">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-400">
            Email
          </a>
        </li>
      </ul>
    </>
  );
}

export default function ConnectSection({ openConnect, display }: Props) {
  switch (display) {
    case "desktop":
      return displayDekstop(openConnect);
    case "mobile":
      return displayMobile(openConnect);
  }
  return null;
}
