import { MobileMenu } from "./MobileNavigation";
import { DesktopMenu } from "./DesktopNavigation";
import './Navigation.css';

export default function Navigation({ state }) {
  return (
    <>
    <DesktopMenu state={ state } />
    </>

  );
}
