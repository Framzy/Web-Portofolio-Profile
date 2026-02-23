import type { HobbiesItem, LanguagesItem } from "../types";
import codingIcon from "../../../assets/about/images/icons/Coding.webp";
import GameIcon from "../../../assets/about/images/icons/Game.webp";
import MusicIcon from "../../../assets/about/images/icons/Music.webp";
import MovieIcon from "../../../assets/about/images/icons/Movie.webp";
import FootballIcon from "../../../assets/about/images/icons/Football.webp";
import TravelIcon from "../../../assets/about/images/icons/Travel.webp";

export const HOBBIES_ITEMS: HobbiesItem[] = [
  { src: codingIcon, alt: "Programming icon", label: "Programming" },
  { src: GameIcon, alt: "Gaming icon", label: "Gaming" },
  { src: MusicIcon, alt: "Music icon", label: "Music" },
  { src: MovieIcon, alt: "Movie icon", label: "Movies" },
  { src: FootballIcon, alt: "Football icon", label: "Football" },
  { src: TravelIcon, alt: "Travel icon", label: "Traveling" },
];

export const LANGUAGES_ITEMS: LanguagesItem[] = [
  { label: "Indonesia", persen: "90%", width: "w-27" },
  { label: "English", persen: "70%", width: "w-23" },
];
