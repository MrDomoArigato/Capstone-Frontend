import { MobileMenu } from "./MobileNavigation";
import { DesktopMenu } from "./DesktopNavigation";
import './Navigation.css';
import {ProfileView} from '../UserProfile/UserProfile';

export default function Navigation({ state }) {
  return (
    <>
    <ProfileView state = { state }/>
    <DesktopMenu state={ state } />
    </>

  );
}
