import { forwardRef } from "react";
import AboutTop from "./AboutTop";
import AboutBottom from "./AboutBottom";
import type { Props } from "../../types/propsNavigate";

const AboutSection = forwardRef<HTMLDivElement, Props>(function AboutSection(
  { onNavigate }: Props,
  ref
) {
  return (
    <>
      <section
        ref={ref}
        className="about-content min-h-screen relative overflow-hidden bg-[url('../assets/images/Background.webp')] bg-cover bg-center bg-no-repeat"
      >
        <AboutTop onNavigate={onNavigate} />
        <AboutBottom />
      </section>
    </>
  );
});

export default AboutSection;
