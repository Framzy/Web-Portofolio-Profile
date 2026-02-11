import type { Project } from "../types";
import thumbnail01 from "../../../assets/projects/images/thumbnails/thumbnail_project01.webp";
import thumbnail02 from "../../../assets/projects/images/thumbnails/thumbnail_project02.webp";
import thumbnail03 from "../../../assets/projects/images/thumbnails/thumbnail_project03.webp";
import thumbnail04 from "../../../assets/projects/images/thumbnails/thumbnail_project04.webp";
import thumbnail05 from "../../../assets/projects/images/thumbnails/thumbnail_project05.webp";

export const PROJECTS_ITEMS: Project[] = [
  {
    id: "project_01",
    thumbnail: thumbnail01,
    title: "Contact Management",
    link: "https://contact-management-khaki.vercel.app/",
    techBadges: [],
  },
  {
    id: "project_02",
    thumbnail: thumbnail02,
    title: "Kedai Takjil",
    link: "https://kedai-takjil.vercel.app/",
    techBadges: [],
  },
  {
    id: "project_03",
    thumbnail: thumbnail03,
    title: "Tic Tac Toe",
    link: "https://framzy-react-tic-tac-toe.vercel.app/",
    techBadges: [],
  },
  {
    id: "project_04",
    thumbnail: thumbnail04,
    title: "Posyandu APP - Thesis",
    link: "https://github.com/Framzy/PosyanduApp-Thesis-Application",
    techBadges: [],
  },
  {
    id: "project_05",
    thumbnail: thumbnail05,
    title: "School Library App - Scholarship",
    link: "#",
    techBadges: [],
  },
];
