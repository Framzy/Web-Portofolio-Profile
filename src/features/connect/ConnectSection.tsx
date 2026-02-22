import ConnectsLayout from "./layouts/ConnectsLayout";
import type { ConnectView } from "./types";

type ConnectSectionProps = {
  view: ConnectView;
  openConnect: boolean;
};

export default function ConnectSection({
  view,
  openConnect,
}: ConnectSectionProps) {
  return <ConnectsLayout view={view} openConnect={openConnect} />;
}
