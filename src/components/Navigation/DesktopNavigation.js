import { Views } from "../../enums";
import './Navigation.css';
export function DesktopMenu({ state }) {
  return (
    <ViewSelection view={ state.View } />
  )
}

function ViewSelection({ view }) {
  // Close the dropdown menu programmatically
  
  const dropdownMenu = document.getElementById('dropdownMenu');
  if (dropdownMenu) {
      dropdownMenu.classList.remove('show'); // Remove the 'show' class to close the dropdown
  }
  return (
    <>
      <ul className="nav nav-tabs px-5">
        <li className="nav-item">
          <a className={`nav-link ${view.current === Views.Dashboard ? 'active' : ''} home-tab`} 
            aria-current="page" onClick={() => view.set(Views.Dashboard)}>Home</a>
        </li>
        <li className="nav-item dropdown">
          <button className={`nav-link dropdown-toggle 
            ${view.current === Views.Account.Overview || 
              view.current === Views.Account.Transactions ? 'active' : ''}`} 
            data-bs-toggle="dropdown" data-bs-auto-close="inside" type="button" 
            aria-expanded="false">Accounts</button>
          <ul id="dropdownMenu" className="dropdown-menu">
            <li><a className="dropdown-item" onClick={() => view.set(Views.Account.Overview)}>Overview</a></li>
            <li><a className="dropdown-item" onClick={() => view.set(Views.Account.Transactions)}>Transactions</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${view.current === Views.Budget ? 'active' : ''} budget-tab`} 
            aria-current="page" onClick={() => view.set(Views.Budget)}>Budget</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${view.current === Views.Overview ? 'active' : ''}`} 
            aria-current="page" onClick={() => view.set(Views.Overview)}>Overview</a>
        </li>
      </ul>
    </>
  )
}
