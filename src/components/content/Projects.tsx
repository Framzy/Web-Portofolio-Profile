import type { RefObject } from "react";
import ProjectsSwiper from "../../features/projects/ProjectSwiper";

type Props = { sectionRef: RefObject<HTMLDivElement | null> };

export default function Projects({ sectionRef }: Props) {
  return ProjectsSwiper({ sectionRef });
}
