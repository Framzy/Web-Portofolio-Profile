import { HOBBIES_ITEMS } from "../../data/AboutItems.data";

export default function renderHobbiesItems() {
  return HOBBIES_ITEMS.map((item) => (
    <div key={item.label} className="flex flex-col items-center gap-1">
      <div className="h-5">
        <img
          className="w-auto h-full"
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="text-zinc-500 text-xs">{item.label}</p>
    </div>
  ));
}
