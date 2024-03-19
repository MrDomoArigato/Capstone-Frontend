import { Views } from "../enums";
import { UserProfile, ProfilePage } from "./UserProfile";
export function MobileMenu({ setView, title }) {
  
    return(
        <>
        <div className ="mobile-navbar">
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigation Menu</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
              <a className="nav-link" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Home</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" onClick={() => setView(Views.ProfilePage)} aria-current="true" href="#">Profile</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Accounts</a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Overview</a></li>
                  <li><a className="dropdown-item" onClick={() => setView(Views.Account.Transactions)} aria-current="true"  href="#">Transactions</a></li>
                  <li><a className="dropdown-item"  onClick={() => setView(Views.Account.Analytics)} aria-current="true"  href="#">Analytics</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Budget</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Settings</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Sign Out</a>
              </li>

            </ul>
            </div>
         </div>
</div>
    </>
    )
}


