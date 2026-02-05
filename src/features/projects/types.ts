export type Project = {
  id: string;
  thumbnail: string;
  title: string;
  link?: string;
  techBadges?: string[];
  isFeatured?: boolean;
};

export type ProjectsView = "grid" | "swiper";
