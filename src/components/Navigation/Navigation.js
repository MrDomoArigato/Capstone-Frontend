import { MobileMenu } from "./MobileNavigation";
import { DesktopMenu } from "./DesktopNavigation";

export default function Navigation({ state }) {
  return (
    <DesktopMenu state={ state } />
  );
}
