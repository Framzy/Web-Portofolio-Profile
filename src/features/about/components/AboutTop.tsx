import ProfileImg from "../../../assets/images/Profile_Framzy.webp";
import { FaArrowRight } from "react-icons/fa";
import type { Props } from "../../../types/propsNavigate";

export default function AboutTop({ onNavigate }: Props) {
  const onToProject = () => {
    onNavigate("project");
  };

  const renderDescription = () => {
    return (
      <p className="pt-10 text-white text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae porro
        quod quis voluptate. Sequi, laudantium cumque. Cumque exercitationem
        aspernatur labore minima! Nisi reprehenderit at repellendus quos
        deleniti explicabo reiciendis repudiandae?
      </p>
    );
  };

  return (
    <>
      <div className="flex flex-col w-4/5 lg:w-fit mx-auto box-border p-4">
        <div className="flex items-center justify-center font-manrope font-bold text-6xl box-border">
          <p className="text-[#39EEFA]  md:text-center">
            FRONT-END <span className="text-white">WEB DEVELOPER</span>
          </p>
        </div>
        <p className="text-white font-manrope text-sm text-start md:text-center lg:text-start">
          BASED IN JAKARTA
        </p>
      </div>

      <div className="flex flex-col w-5/6 xl:w-4/6 mx-auto box-border ">
        <div className="flex flex-col md:flex-row justify-center gap-10 box-border">
          <div className="w-fit max-w-90 mx-auto">
            <img
              className="w-full h-auto"
              src={ProfileImg}
              alt="profile image"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="flex flex-col w-4/5 md:w-3/7 mx-auto pt-5 ">
            <p className="aboutMe-line text-neutral-300 font-thin font-poppins text-end text-[10px] ">
              ///////////////// About_Me
            </p>
            <p className="aboutMe-name-line text-neutral-400 flex flex-col font-manrope text-3xl">
              HELLO
              <span className="text-white">I’M FARDEN RAMZY MUHARRAM</span>
            </p>
            {renderDescription()}
            <div className="flex flex-row justify-start gap-5 mt-5 text-xs lg:text-sm">
              <button
                type="button"
                className="bg-[#39EEFA]  font-manrope font-bold py-2 px-4 lg:px-6  rounded cursor-pointer
                transition-all duration-300 ease-in-out hover:bg-[#0A090F] hover:text-[#39EEFA] "
              >
                Contact me
              </button>

              <button
                type="button"
                className="bg-[#0A090F] text-white flex flex-row items-center gap-1 h-fit border border-white py-2 px-2 lg:px-4
                 rounded box-border cursor-pointer 
                transition-all duration-300 ease-in-out hover:transform hover:-skew-x-8"
                onClick={onToProject}
              >
                <p className="font-manrope font-bold w-full">See projects</p>
                <FaArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
