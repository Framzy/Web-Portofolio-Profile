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
      <div className="flex flex-col w-4/5 lg:w-fit mx-auto box-border p-4">
        <div className="flex items-center justify-center font-manrope font-bold text-6xl box-border">
          <p className="text-[#39EEFA]  md:text-center tracking-wide">
            SOFTWARE <span className="text-white">ENGINEER</span>
          </p>
        </div>
        <p className="text-white font-manrope text-sm text-start md:text-center lg:text-start">
          BASED IN JAKARTA
        </p>
      </div>

      <div className="flex flex-col w-5/6 xl:w-4/6 mx-auto box-border ">
        <div className="flex flex-col md:flex-row justify-center gap-10 box-border">
          <div className="w-fit max-w-90 mx-auto">
            <ProfileImage />
          </div>

          <div className="flex flex-col w-4/5 md:w-3/7 mx-auto pt-5 ">
            <p className="aboutMe-line text-neutral-300 font-thin font-poppins text-end text-[10px] ">
              ///////////////// About_Me
            </p>
            <p className="aboutMe-name-line text-neutral-400 flex flex-col font-manrope text-3xl">
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
