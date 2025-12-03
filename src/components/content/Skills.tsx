import type { RefObject } from "react";

type Props = {
  sectionRef: RefObject<HTMLDivElement | null>;
};

export default function Skills({ sectionRef }: Props) {
  return (
    <>
      <section ref={sectionRef} className="h-screen mt-10">
        <div className="skills-title w-8/10 mx-auto flex flex-row justify-between items-end py-5">
          <h1 className="text-3xl  font-bold text-[#39EEFA]">SKILLS</h1>
          <p className=" text-neutral-300 font-thin font-poppins text-[10px]">
            ///////////////// MY_SKILLS
          </p>
        </div>

        <div className="text-white text-sm w-8/10 mx-auto flex flex-col gap-5 font-manrope">
          <div className="content-item flex flex-col gap-2 border border-[#898989] rounded-xl px-5 py-3 bg-radial from-[rgba(110,110,110,0.35)] to-[rgba(41,41,41,0.2)]">
            <p>[01] Programming languages</p>
            <div className="flex flex-row">
              <p className="border border-white rounded-md py-2 px-5">Python</p>
            </div>
          </div>
          <div className="content-item flex flex-col gap-2 border border-[#898989] rounded-xl px-5 py-3 bg-radial from-[rgba(110,110,110,0.35)] to-[rgba(41,41,41,0.2)]">
            <p>[02] Frameworks & Libraries</p>
            <div className="flex flex-row">
              <p className="border border-white rounded-md py-2 px-5">Python</p>
            </div>
          </div>
          <div className="content-item flex flex-col gap-2 border border-[#898989] rounded-xl px-5 py-3 bg-radial from-[rgba(110,110,110,0.35)] to-[rgba(41,41,41,0.2)]">
            <p>[03] Databases</p>
            <div className="flex flex-row">
              <p className="border border-white rounded-md py-2 px-5">Python</p>
            </div>
          </div>
          <div className="content-item flex flex-col gap-2 border border-[#898989] rounded-xl px-5 py-3 bg-radial from-[rgba(110,110,110,0.35)] to-[rgba(41,41,41,0.2)]">
            <p>[04] Tools, Softwares, And Others</p>
            <div className="flex flex-row">
              <p className="border border-white rounded-md py-2 px-5">Python</p>
            </div>
          </div>
          <div className="content-item flex flex-row gap-3 justify-between">
            <div className="w-1/2 flex flex-col gap-2 border border-[#898989] rounded-xl px-5 py-3 bg-radial from-[rgba(110,110,110,0.35)] to-[rgba(41,41,41,0.2)]">
              <p>[05] Operating Systems</p>
              <div className="flex flex-row">
                <p className="border border-white rounded-md py-2 px-5">
                  Python
                </p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-2 border border-[#898989] rounded-xl px-5 py-3 bg-radial from-[rgba(110,110,110,0.35)] to-[rgba(41,41,41,0.2)]">
              <p>[06] Cloud</p>
              <div className="flex flex-row">
                <p className="border border-white rounded-md py-2 px-5">
                  Python
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
