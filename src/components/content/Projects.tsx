import type { RefObject } from "react";

type Props = {
  sectionRef: RefObject<HTMLDivElement | null>;
};
export default function Projects({ sectionRef }: Props) {
  return (
    <>
      <section ref={sectionRef} className="h-screen mt-10">
        <div className="skills-title w-8/10 mx-auto flex flex-row justify-between items-end py-5">
          <h1 className="text-3xl font-bold text-[#39EEFA]">
            MY <span className="text-white">PROJECTS</span>
          </h1>
          <p className=" text-white font-thin font-poppins text-[10px]">
            ///////////////// MY_PROJECTS
          </p>
        </div>
      </section>
    </>
  );
}
