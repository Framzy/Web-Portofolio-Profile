import { FaArrowUp } from "react-icons/fa";
import { DropdownBackground } from "../../components/ui/DropdownBackground";

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
  if (!openConnect) return null;

  return (
    <div className="absolute top-10 left-0 mt-3 w-[660px]">
      {/* SVG Background */}
      <div className="absolute inset-0 pointer-events-none">
        <DropdownBackground />
      </div>

      {/* Content */}
      <ul className="relative grid grid-cols-2 py-4 text-sm">
        {CONNECT_ITEMS.map((item) => (
          <li key={item.label} className="hover:bg-[#1A1A1A]">
            <div className="px-6 py-3">
              <a
                href={item.href}
                className="text-white font-medium hover:text-[#39EEFA]"
              >
                {item.label}
                <FaArrowUp className="inline-block rotate-45 ml-1" size={12} />
              </a>
              <p className="text-[#929292] text-xs">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
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
              className="transition-all delay-75 text-[#00eeff] hover:text-white"
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
