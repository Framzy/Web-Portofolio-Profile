import type { ConnectView } from "../types";
import ConnectMobile from "./ConnectMobile";
import ConnectDesktop from "./ConnectDesktop";

type ConnectsLayoutProps = {
  view: ConnectView;
  openConnect: boolean;
};
export default function ConnectsLayout({
  view,
  openConnect,
}: ConnectsLayoutProps) {
  if (view === "desktop") {
    return <ConnectDesktop openConnect={openConnect} />;
  }
  return <ConnectMobile openConnect={openConnect} />;
}
