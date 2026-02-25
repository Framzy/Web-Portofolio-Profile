import type { Props } from "../../../types/propsNavigate";
import type { AboutBottomIcon as IconType } from "../types";
import AboutTop from "./AboutTop";
import AboutBottom from "./AboutBottom";

type AboutLayoutProps = {
  onNavigate: Props["onNavigate"];
  ICONS: IconType[];
};

export default function AboutLayout({ onNavigate, ICONS }: AboutLayoutProps) {
  return (
    <>
      <AboutTop onNavigate={onNavigate} />
      <AboutBottom ICONS={ICONS} />
    </>
  );
}
