export type HobbiesItem = {
  src: string;
  alt: string;
  label: string;
};

export type LanguagesItem = {
  label: string;
  persen: string;
  width: string;
};

export type AboutBottomIcon = {
  id: "education" | "experience" | "languages" | "hobbies";
  src: string;
  alt: string;
};

export type PersonalDescription = string;
