// src/icons.ts
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretDown,
  faDownload,
  faArrowUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

// tambah icon yang sering dipakai ke library
library.add(faCaretDown, faArrowRight, faArrowUp, faDownload);

export {}; // agar TSTreat file sebagai module
