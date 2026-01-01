import { forwardRef } from "react";
import SkillCard from "./SkillCard";

const SKILLS = [
  {
    label: "Programming languages",
    span: 2,
    items: ["JavaScript", "TypeScript", "Java", "PHP", "Python"],
  },
  {
    label: "Frameworks & Libraries",
    span: 2,
    items: ["React", "Tailwind", "Bootstrap"],
  },
  { label: "Databases", span: 2, items: ["MySQL", "PostgreSQL"] },
  {
    label: "Tools, Softwares, And Others",
    span: 2,
    items: ["VS Code", "Git", "GitHub"],
  },
  { label: "Operating Systems", span: 1, items: ["Windows", "Mac"] },
  { label: "Cloud", span: 1, items: ["Vercel", "Supabase"] },
];

const SkillsSection = forwardRef<HTMLDivElement>(function SkillsSection(
  _,
  ref
) {
  return (
    <>
      <section ref={ref} className="h-screen mt-10">
        <div className="skills-title w-8/10 mx-auto flex flex-row justify-between items-end py-5">
          <h1 className="text-3xl  font-bold text-[#39EEFA]">SKILLS</h1>
          <p className=" text-neutral-300 font-thin font-poppins text-[10px]">
            ///////////////// MY_SKILLS
          </p>
        </div>

        <div className="text-white text-sm w-8/10 mx-auto grid grid-cols-2 gap-5 font-manrope">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.label} index={index} {...skill} />
          ))}
        </div>
      </section>
    </>
  );
});

export default SkillsSection;
