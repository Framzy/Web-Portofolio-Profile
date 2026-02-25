import type { AboutBottomIcon as IconType } from "../../types";

type Props = {
  icon: IconType;
};

export default function AboutBottomIcon({ icon }: Props) {
  return (
    <img
      className="w-full h-auto"
      src={icon.src}
      alt={icon.alt}
      loading="lazy"
      decoding="async"
    />
  );
}
