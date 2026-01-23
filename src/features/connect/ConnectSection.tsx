import { ConnectDesktop } from "./components/ConnectDekstop";
import { ConnectMobile } from "./components/ConnectMobile";

type Props = {
  openConnect: boolean;
  display?: "desktop" | "mobile";
};

export default function ConnectSection({ openConnect, display }: Props) {
  switch (display) {
    case "desktop":
      return ConnectDesktop(openConnect);
    case "mobile":
      return ConnectMobile(openConnect);
  }
  return null;
}
