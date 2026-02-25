import type { Props } from "../../../types/propsNavigate";
import AboutTop from "./AboutTop";
import AboutBottom from "./AboutBottom";

export default function AboutLayout({ onNavigate }: Props) {
  return (
    <>
      <AboutTop onNavigate={onNavigate} />
      <AboutBottom />
    </>
  );
}
