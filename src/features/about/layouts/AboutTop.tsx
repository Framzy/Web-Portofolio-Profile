import type { Props } from "../../../types/propsNavigate";
import ContactMeButton from "../components/ui/ContactMeButton";
import PersonalDescription from "../components/ui/PersonalDescription";
import ProfileImage from "../components/ui/ProfileImage";
import SeeProjectButton from "../components/ui/SeeProjectButton";

export default function AboutTop({ onNavigate }: Props) {
  const onToProject = () => {
    onNavigate("project");
  };

  return (
    <>
      <div className="flex w-4/5 md:w-fit mx-auto box-border p-4 md:p-8">
        <div className="w-full flex flex-col items-center justify-center box-border gap-2">
          <div className="w-full flex items-center justify-center md:justify-start box-border">
            <p className="text-[#39EEFA] font-manrope font-bold text-4xl md:text-6xl tracking-wide">
              SOFTWARE <span className="text-white">ENGINEER</span>
            </p>
          </div>
          <div className="w-full flex items-center justify-center md:justify-start box-border">
            <p className="text-white font-manrope text-xs md:text-sm">
              BASED IN JAKARTA
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-5/6 xl:w-4/6 mx-auto box-border">
        <div className="flex flex-col md:flex-row justify-center box-border gap-6 md:gap-0">
          <div className="w-4/5 md:w-2/5 xl:w-fit max-w-90 mx-auto pt-5">
            <ProfileImage />
          </div>

          <div className="flex flex-col w-4/5 md:w-3/7 mx-auto ">
            <p className="aboutMe-line text-neutral-300 font-thin font-poppins text-end text-[10px] ">
              ///////////////// About_Me
            </p>
            <p className="aboutMe-name-line text-neutral-400 flex flex-col font-manrope text-2xl md:text-3xl">
              HELLO
              <span className="text-white">I’M FARDEN RAMZY MUHARRAM</span>
            </p>
            <PersonalDescription />
            <div className="flex flex-row justify-start gap-5 mt-5 text-xs lg:text-sm">
              <ContactMeButton />
              <SeeProjectButton onToProject={onToProject} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
