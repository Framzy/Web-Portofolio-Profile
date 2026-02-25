import type { AboutBottomIcon as IconType } from "../types";
import AboutLanguages from "../components/layout/AboutLanguages";
import AboutHobbies from "../components/layout/AboutHobbies";
import AboutBottomIcon from "../components/ui/AboutBottomIcon";

type Props = {
  ICONS: IconType[];
};

export default function AboutBottom({ ICONS }: Props) {
  const iconMap = {
    education: ICONS.find((icon) => icon.id === "education"),
    experience: ICONS.find((icon) => icon.id === "experience"),
    languages: ICONS.find((icon) => icon.id === "languages"),
    hobbies: ICONS.find((icon) => icon.id === "hobbies"),
  };

  return (
    <div className="grid grid-cols-1 w-5/6 lg:w-5/7 xl:w-5/8 p-10 mx-auto box-border gap-10 md:grid-cols-2">
      {/* Education */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-4 min-h-8 items-center">
          <div className="w-5 lg:w-8">
            {iconMap.education && <AboutBottomIcon icon={iconMap.education} />}
          </div>
          <p className="text-[#39EEFA] text-md">Education</p>
        </div>

        <div className="flex flex-col font-manrope h-fit gap-1 ml-9 lg:ml-12">
          <p className="text-white text-sm">
            University Indraprasta PGRI{" "}
            <span className="text-zinc-400">(2021-2025)</span>
          </p>
          <p className="text-zinc-400 text-sm">Computer Science</p>
        </div>
      </div>

      {/* Experience */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-4 min-h-8 items-center">
          <div className="w-5 lg:w-6">
            {iconMap.experience && (
              <AboutBottomIcon icon={iconMap.experience} />
            )}
          </div>
          <p className="text-[#39EEFA] text-md">Experience & Certificate</p>
        </div>

        <div className="flex flex-col font-manrope h-fit gap-1 ml-9 lg:ml-11">
          <ul className="list-disc list-outside space-y-1 pl-4">
            <li className="text-white text-sm">
              Internship{" "}
              <span className="text-zinc-400">(2024) | SMK 28 OKTOBER.II</span>
            </li>
            <li className="text-white text-sm">
              TOEFL EPT{" "}
              <span className="text-zinc-400">
                (2025) | Daily Bahasa Inggris - 557
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Languages */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-4 min-h-8 items-center">
          <div className="w-5 lg:w-7">
            {iconMap.languages && <AboutBottomIcon icon={iconMap.languages} />}
          </div>
          <p className="text-[#39EEFA] text-md">Languages</p>
        </div>

        <div className="flex flex-col font-manrope h-fit gap-1 ml-9 lg:ml-11 w-fit">
          <AboutLanguages />
        </div>
      </div>

      {/* Hobbies */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-4 min-h-8 items-center">
          <div className="w-5 lg:w-7">
            {iconMap.hobbies && <AboutBottomIcon icon={iconMap.hobbies} />}
          </div>
          <p className="text-[#39EEFA] text-md">Hobbies & Interest</p>
        </div>

        <div className="flex flex-row flex-wrap font-bold ml-10 xl:ml-12 gap-4">
          <AboutHobbies />
        </div>
      </div>
    </div>
  );
}
