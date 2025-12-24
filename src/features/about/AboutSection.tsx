import { forwardRef } from "react";
import AboutTop from "./AboutTop";
import AboutBottom from "./AboutBottom";

const AboutSection = forwardRef<HTMLDivElement>(function AboutSection(_, ref) {
  return (
    <>
      <section
        ref={ref}
        className="about-content min-h-screen relative overflow-hidden bg-[url('/images/background/Background.webp')] bg-cover bg-center bg-no-repeat"
      >
        <AboutTop />
        <AboutBottom />
      </section>
    </>
  );
});
export default AboutSection;
