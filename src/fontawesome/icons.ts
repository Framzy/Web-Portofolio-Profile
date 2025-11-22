// src/icons.ts
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretDown,
  faDownload,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

// tambah icon yang sering dipakai ke library
library.add(faCaretDown, faArrowRight, faDownload);

export {}; // agar TSTreat file sebagai module
