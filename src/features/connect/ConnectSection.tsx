import { FaArrowUp } from "react-icons/fa";
import { DropdownBackground } from "../../components/ui/DropdownBackground";

type Props = {
  openConnect: boolean;
  display?: "desktop" | "mobile";
};

const CONNECT_ITEMS: { label: string; href: string; desc: string }[] = [
  {
    label: "LinkedIn",
    href: "#",
    desc: "Connect with me on LinkedIn to see my experience and what I’ve been working on.",
  },
  {
    label: "Email",
    href: "#",
    desc: "Feel free to reach out to me via email for any inquiries or collaboration.",
  },
  {
    label: "GitHub",
    href: "#",
    desc: "Connect with me on GitHub to explore my projects and code contributions.",
  },
  {
    label: "Instagram",
    href: "#",
    desc: "Follow my Instagram for visual insights into my projects and inspirations.",
  },
];

function displayDesktop(openConnect: boolean) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-8 w-md lg:w-lg max-w-lg z-50
        transition-all duration-300 ease
        ${
          openConnect
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }
      `}
    >
      {/* SVG Background */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-300 ease transform
          ${openConnect ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        <DropdownBackground />
      </div>

      {/* Content */}
      <ul className="relative z-10 grid grid-cols-2 text-sm font-manrope p-6">
        {CONNECT_ITEMS.map((item) => (
          <li key={item.label}>
            <div className="p-3">
              <a
                href={item.href}
                className="text-white font-medium underline underline-offset-2 hover:text-[#39EEFA]"
              >
                {item.label}
                <FaArrowUp className="inline-block rotate-45 ml-1" size={12} />
              </a>
              <p className="text-[#929292] text-xs mt-2">{item.desc}</p>
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
                  transition-transform duration-300 delay-300 transform
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
            <a href={item.href} className="text-[#c6c6c6] hover:text-white">
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
      return displayDesktop(openConnect);
    case "mobile":
      return displayMobile(openConnect);
  }
  return null;
}
