import { CONNECT_ITEMS } from "../data/ConnectItems.data";

export function ConnectMobile(openConnect: boolean) {
  return (
    <>
      <ul
        className={`
                    mt-3 ml-2 flex flex-col gap-2
                  transition-transform duration-200 delay-200 transform origin-top ease-in-out
                    ${
                      openConnect
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "h-0 opacity-0 -translate-y-2 pointer-events-none"
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
