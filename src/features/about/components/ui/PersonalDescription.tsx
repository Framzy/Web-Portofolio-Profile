import { Personal_Description } from "../../data/AboutItems.data";

export default function PersonalDescription() {
  return (
    <p className="pt-10 text-white text-justify text-sm md:text-base">
      {Personal_Description}
    </p>
  );
}
