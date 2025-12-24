import type { RefObject } from "react";
import AboutTop from "../../features/about/AboutTop";
import AboutBottom from "../../features/about/AboutBottom";

type Props = {
  sectionRef: RefObject<HTMLDivElement | null>;
};

export default function About({ sectionRef }: Props) {
  return (
    <>
      <section
        ref={sectionRef}
        className="about-content min-h-screen relative overflow-hidden bg-[url('/images/background/Background.webp')] bg-cover bg-center bg-no-repeat"
      >
        <AboutTop />
        <AboutBottom />
      </section>
    </>
  );
}
