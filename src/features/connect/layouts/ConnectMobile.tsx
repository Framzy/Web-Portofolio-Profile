import { CONNECT_ITEMS } from "../data/ConnectItems.data";

type Props = {
  openConnect: boolean;
};

export default function ConnectMobile({ openConnect }: Props) {
  return (
    <>
      <ul
        className={`
                    mt-3 ml-2 flex flex-col gap-2
                  transition-transform duration-200 delay-75 transform origin-top ease-in
                    ${
                      openConnect
                        ? "h-full opacity-100 translate-y-0 pointer-events-auto"
                        : "h-0 opacity-0 -translate-y-1 pointer-events-none"
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
