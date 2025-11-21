import type { RefObject } from "react";

type Props = {
  sectionRef: RefObject<HTMLDivElement | null>;
};
export default function Projects({ sectionRef }: Props) {
  return (
    <>
      <section
        ref={sectionRef}
        className="h-screen mt-10 border-t border-[#8A8A8A]"
      >
        <h1 className="text-3xl text-center font-bold text-white">Projects</h1>
      </section>
    </>
  );
}
