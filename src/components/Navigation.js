import { Views } from "../enums";
import {Profile } from './UserProfile';
import ProfilePage from "./UserProfile";
import { MobileMenu } from "./MobileNavigation";
import { DesktopMenu } from "./DesktopNavigation";

export default function NavigationMenu({ setView }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-left">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navigation Title</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        </div>
      </nav>
      <DesktopMenu setView={setView}/>
      <MobileMenu setView={setView}/>
    </>
  );
}
