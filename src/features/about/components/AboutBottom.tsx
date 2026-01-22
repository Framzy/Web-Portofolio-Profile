import { HOBBIES_ITEMS } from "./../data/HobbiesItems.data";
import EducationIcon from "../../../assets/images/icons/education_icon.webp";
import ExperienceIcon from "../../../assets/images/icons/experience_icon.webp";
import LanguagesIcon from "../../../assets/images/icons/languages_icon.webp";
import HobbiesIcon from "../../../assets/images/icons/hobbies_icon.webp";

const LANGUAGES_ITEMS: { label: string; persen: string; width: string }[] = [
  { label: "Indonesia", persen: "90%", width: "w-27" },
  { label: "English", persen: "70%", width: "w-23" },
];

export default function AboutBottom() {
  const renderLanguagesItems = () => {
    return LANGUAGES_ITEMS.map((item, index) => (
      <div
        key={index}
        className="text-white text-sm flex justify-between gap-5 items-center"
      >
        <p className="">{item.label}</p>
        <div className="flex flex-row items-center gap-1">
          <div className="w-30 h-3 rounded-2xl border border-zinc-400">
            <div
              className={` ${item.width} h-full rounded-2xl bg-[#39EEFA]`}
            ></div>
          </div>
          <p className="text-zinc-400 text-xs">{item.persen}</p>
        </div>
      </div>
    ));
  };

  const renderHobbiesItems = () => {
    return HOBBIES_ITEMS.map((item, index) => (
      <div key={index} className="flex flex-col items-center gap-1">
        <div className="h-5">
          <img
            className="w-auto h-full"
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="text-zinc-500 text-xs">{item.label}</p>
      </div>
    ));
  };

  return (
    <>
      <div className="grid grid-cols-1 w-5/6 lg:w-5/7 xl:w-5/8 p-10 mx-auto box-border gap-10 md:grid-cols-2 ">
        <div className="flex flex-col gap-1" id="1">
          <div className="flex flex-row gap-4 min-h-8 items-center">
            <div className="w-5 lg:w-8">
              <img
                className="w-full h-auto"
                src={EducationIcon}
                alt="education icon"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-[#39EEFA] text-md">Education</p>
          </div>
          <div className="flex flex-col font-manrope h-fit gap-1 ml-9 lg:ml-12">
            <p className="text-white text-sm">
              University Indraprasta PGRI{" "}
              <span className="text-zinc-400 ">(2021-2025)</span>
            </p>
            <p className="text-zinc-400 text-sm">Computer Science</p>
          </div>
        </div>

        <div className="flex flex-col gap-1" id="2">
          <div className="flex flex-row gap-4 min-h-8 items-center">
            <div className="w-5 lg:w-6">
              <img
                className="w-full h-auto"
                src={ExperienceIcon}
                alt="experience icon"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-[#39EEFA] text-md">Experience & Certificate</p>
          </div>
          <div className="flex flex-col font-manrope h-fit gap-1 ml-9 lg:ml-11">
            <ul className="list-disc list-outside space-y-1 pl-4">
              <li className="text-white text-sm">
                Internship{" "}
                <span className="text-zinc-400">
                  (2024) | SMK 28 OKTOBER.II
                </span>
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

        <div className="flex flex-col flex-wrap gap-1" id="3">
          <div className="flex flex-row gap-4 min-h-8 items-center">
            <div className="w-5 lg:w-7">
              <img
                className="w-full h-auto"
                src={LanguagesIcon}
                alt="languages icon"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-[#39EEFA] text-md">Languages</p>
          </div>

          <div className="flex flex-col font-manrope h-fit gap-1 ml-9 lg:ml-11 w-fit">
            {renderLanguagesItems()}
          </div>
        </div>

        <div className="flex flex-col gap-1" id="4">
          <div className="flex flex-row gap-4 min-h-8 items-center">
            <div className="w-5 lg:w-7">
              <img
                className="w-full h-auto"
                src={HobbiesIcon}
                alt="hobbies icon"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-[#39EEFA] text-md">Hobbies & Interest</p>
          </div>

          <div className="flex flex-row flex-wrap font-bold ml-10  xl:ml-12 items-center justify-start xl:justify-start gap-4">
            {renderHobbiesItems()}
          </div>
        </div>
      </div>
    </>
  );
}
