import type { RefObject } from "react";
import AboutTop from "../about/AboutTop";
import AboutBottom from "../about/AboutBottom";

type Props = {
  sectionRef: RefObject<HTMLDivElement | null>;
};

export default function About({ sectionRef }: Props) {
  return (
    <section
      ref={sectionRef}
      className="about-content min-h-screen relative overflow-hidden"
    >
      {/* LCP discoverable image */}
      <img
        src="/images/background/Background.webp"
        srcSet="/images/background/Background.webp 600w, /images/background/Background.webp 1200w, /images/background/Background.webp 1800w"
        sizes="(max-width:768px) 600px, 1200px"
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-1"
      />

      <AboutTop />
      <AboutBottom />
    </section>
  );
}
