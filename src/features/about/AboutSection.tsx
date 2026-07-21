import type { Props } from "../../types/propsNavigate";
import { forwardRef } from "react";
import AboutLayout from "./layouts/AboutLayout";
import { ABOUT_BOTTOM_ICONS as ICONS } from "./data/AboutItems.data";

const AboutSection = forwardRef<HTMLDivElement, Props>(function AboutSection(
  { onNavigate }: Props,
  ref,
) {
  return (
    <>
      <section
        ref={ref}
        className="about-content relative overflow-hidden bg-[url('../assets/images/Background.webp')] bg-cover bg-center bg-no-repeat"
      >
        <AboutLayout onNavigate={onNavigate} ICONS={ICONS} />
      </section>
    </>
  );
});

export default AboutSection;
