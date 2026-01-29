import { forwardRef } from "react";
import { SKILLS_ITEMS } from "./data/SkillsItems.data";
import SkillCard from "./components/SkillCard";

const SkillsSection = forwardRef<HTMLDivElement>(
  function SkillsSection(_, ref) {
    return (
      <>
        <section ref={ref} className="skills-content min-h-screen">
          <div className="skills-title w-8/10 mx-auto flex flex-row justify-between items-end py-5">
            <h1 className="text-3xl  font-bold text-[#39EEFA]">SKILLS</h1>
            <p className=" text-neutral-300 font-thin font-poppins text-[10px]">
              ///////////////// MY_SKILLS
            </p>
          </div>

          <div className="text-white text-sm w-8/10 mx-auto grid grid-cols-2 gap-5 font-manrope">
            {SKILLS_ITEMS.map((skill, index) => (
              <SkillCard key={skill.label} index={index} {...skill} />
            ))}
          </div>
        </section>
      </>
    );
  },
);

export default SkillsSection;
