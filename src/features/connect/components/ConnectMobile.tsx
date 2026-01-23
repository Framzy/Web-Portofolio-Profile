import { CONNECT_ITEMS } from "../data/ConnectItems.data";

export function ConnectMobile(openConnect: boolean) {
  return (
    <>
      <ul
        className={`
                    mt-2 ml-2 flex flex-col gap-2
                  transition-transform origin-top duration-300 delay-75 ease-in-out
                    ${
                      openConnect
                        ? "opacity-100 translate-y-0 scale-y-100"
                        : "h-0 opacity-0 translate-y-0 scale-y-80 pointer-events-none"
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
