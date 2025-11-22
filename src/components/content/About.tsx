import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { RefObject } from "react";

type Props = {
  sectionRef: RefObject<HTMLDivElement | null>;
};

export default function About({ sectionRef }: Props) {
  return (
    <>
      <section ref={sectionRef} className="about-content min-h-screen">
        <div className="flex flex-col w-fit mx-auto box-border p-4">
          <div className="flex flex-row justify-center font-manrope font-bold text-6xl box-border">
            <p className="text-[#39EEFA]">
              FRONT-END <span className="text-white">WEB DEVELOPER</span>
            </p>
          </div>
          <p className="text-white font-manrope text-sm">BASED IN JAKARTA</p>
        </div>

        <div className="flex flex-col w-4/6 mx-auto box-border">
          <div className="w-full mx-auto justify-end">
            <p className="aboutMe-line text-neutral-300 font-thin font-poppins text-end text-[10px] ">
              ///////////////// About_Me
            </p>
          </div>

          <div className="flex flex-row justify-center gap-10 box-border">
            <div className="w-90 mx-auto ">
              <img
                className="w-full h-auto"
                src="/images/profile/Profile_Framzy.png"
                alt="profile image"
              />
            </div>

            <div className="flex flex-col w-3/7 mx-auto pt-5">
              <p className="aboutMe-name-line text-neutral-400 flex flex-col font-manrope text-3xl">
                HELLO
                <span className="text-white">I’M FARDEN RAMZY MUHARRAM</span>
              </p>
              <p className="pt-10 text-white text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                porro quod quis voluptate. Sequi, laudantium cumque. Cumque
                exercitationem aspernatur labore minima! Nisi reprehenderit at
                repellendus quos deleniti explicabo reiciendis repudiandae?
              </p>

              <div className="flex flex-row justify-start gap-5 mt-5">
                <button
                  type="button"
                  className="bg-[#39EEFA] text-sm font-manrope font-bold py-2 px-8 rounded cursor-pointer
                transition-all duration-300 ease-in-out hover:bg-[#0A090F] hover:text-[#39EEFA] "
                >
                  Contact me
                </button>
                <button
                  type="button"
                  className="bg-[#0A090F] text-white flex flex-row items-center gap-1 h-fit  border border-white py-2 px-5 rounded box-border cursor-pointer 
                transition-all duration-300 ease-in-out hover:transform hover:-skew-x-8"
                >
                  <p className="text-sm font-manrope font-bold">See projects</p>
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
