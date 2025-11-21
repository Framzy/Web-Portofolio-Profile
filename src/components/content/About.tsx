import type { RefObject } from "react";

type Props = {
  sectionRef: RefObject<HTMLDivElement | null>;
};

export default function About({ sectionRef }: Props) {
  return (
    <>
      <section ref={sectionRef} className="h-11/12 ">
        <div className="flex flex-row justify-center gap-2 font-manrope font-bold text-4xl p-3 box-border">
          <p className="text-[#39EEFA]">FRONT-END </p>
          <p className="text-white"> WEB DEVELOPER</p>
        </div>
        <img
          className="mx-auto mt-5 h-60 "
          src="/images/Profile_Framzy.png"
          alt="karina image"
        />
      </section>
    </>
  );
}
