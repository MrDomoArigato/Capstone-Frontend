import { MobileMenu } from "./MobileNavigation";
import { DesktopMenu } from "./DesktopNavigation";
import { ProfileView } from "../UserProfile/UserProfile";
import './Navigation.css';

export default function Navigation({ state }) {
  return (
    <>
    <DesktopMenu state={ state } />
    <ProfileView state = { state }/>
    </>

  );
}
