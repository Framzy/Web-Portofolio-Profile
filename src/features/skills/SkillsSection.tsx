import { forwardRef } from "react";

const SKILLS_PARTS: { label: string; span: number }[] = [
  { label: "Programming languages", span: 2 },
  { label: "Frameworks & Libraries", span: 2 },
  { label: "Databases", span: 2 },
  { label: "Tools, Softwares, And Others", span: 2 },
  { label: "Operating Systems", span: 1 },
  { label: "Cloud", span: 1 },
];

const SKILLS_ITEMS: { partIndex: number; label: string }[] = [
  { partIndex: 1, label: "Java Script" },
  { partIndex: 1, label: "Java" },
  { partIndex: 1, label: "PHP" },
  { partIndex: 1, label: "Python" },
  { partIndex: 2, label: "React" },
  { partIndex: 3, label: "asd" },
  { partIndex: 4, label: "asd" },
  { partIndex: 5, label: "asd" },
  { partIndex: 6, label: "asd" },
];

const SkillsSection = forwardRef<HTMLDivElement>(function SkillsSection(
  _,
  ref
) {
  const renderSkillsParts = () => {
    return SKILLS_PARTS.map((part, index) => {
      const spanClass = part.span === 2 ? "col-span-2" : "col-span-1";

      return (
        <div
          key={index}
          className={`${spanClass} flex flex-col gap-2 border border-[#898989] rounded-xl px-5 py-3 bg-radial from-[rgba(110,110,110,0.35)] to-[rgba(41,41,41,0.2)]`}
        >
          <p>
            [0{index + 1}] {part.label}
          </p>

          <div className="flex flex-row flex-wrap gap-2">
            {SKILLS_ITEMS.filter((item) => item.partIndex === index + 1).map(
              (skill, idx) => (
                <p key={idx} className="bg-[#353438] rounded-md py-2 px-5">
                  {skill.label}
                </p>
              )
            )}
          </div>
        </div>
      );
    });
  };

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
          {renderSkillsParts()}
        </div>
      </section>
    </>
  );
});

export default SkillsSection;
