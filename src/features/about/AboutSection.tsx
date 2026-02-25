import type { Props } from "../../types/propsNavigate";
import { forwardRef } from "react";
import AboutLayout from "./layouts/AboutLayout";

const AboutSection = forwardRef<HTMLDivElement, Props>(function AboutSection(
  { onNavigate }: Props,
  ref,
) {
  return (
    <>
      <section
        ref={ref}
        className="about-content min-h-screen relative overflow-hidden bg-[url('../assets/images/Background.webp')] bg-cover bg-center bg-no-repeat"
      >
        <AboutLayout onNavigate={onNavigate} />
      </section>
    </>
  );
});

export default AboutSection;
