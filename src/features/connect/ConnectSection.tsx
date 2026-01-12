import { FaArrowUp } from "react-icons/fa";

type Props = {
  openConnect: boolean;
  display?: "desktop" | "mobile";
};

const CONNECT_ITEMS: { label: string; href: string; desc: string }[] = [
  { label: "LinkedIn", href: "#", desc: "lorem  ipsum dolor sit amet" },
  { label: "Email", href: "#", desc: " lorem  ipsum dolor sit amet" },
  { label: "Instagram", href: "#", desc: " lorem  ipsum dolor sit amet" },
];

function displayDekstop(openConnect: boolean) {
  return (
    openConnect && (
      <div
        className={` absolute top-10 mt-3 w-48 rounded-md bg-black border border-[#2B2B2B] shadow-lg `}
      >
        <ul className="grid grid-cols-2 py-2 text-sm">
          {CONNECT_ITEMS.map((item) => (
            <li key={item.label} className="hover:bg-[#1A1A1A] w-90">
              <div className=" px-4 py-2">
                <a
                  href={item.href}
                  className="text-white font-medium hover:text-[#39EEFA] cursor-pointer"
                >
                  {item.label}
                  <FaArrowUp className="inline-block rotate-40" size={12} />
                </a>
                <p className=" text-[#929292] text-xs">{item.desc}</p>
              </div>
            </li>
          ))}
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
        {CONNECT_ITEMS.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="transition-all delay-75 text-[#39EEFA] hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
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
