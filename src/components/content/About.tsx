import type { RefObject } from "react";
import AboutTop from "../about/AboutTop";
import AboutBottom from "../about/AboutBottom";

type Props = {
  sectionRef: RefObject<HTMLDivElement | null>;
};

export default function About({ sectionRef }: Props) {
  return (
    <>
      <section ref={sectionRef} className="about-content min-h-screen">
        <AboutTop />
        <AboutBottom />
      </section>
    </>
  );
}
