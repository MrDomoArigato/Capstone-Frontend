import { Views } from "../../enums";
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
          <a className={`nav-link ${view.current === Views.Dashboard ? 'active' : ''}`} 
            aria-current="page" onClick={() => view.set(Views.Dashboard)}>Home</a>
        </li>
        <li className="nav-item dropdown">
          <button className={`nav-link dropdown-toggle 
            ${view.current === Views.Account.Summary || 
              view.current === Views.Account.Transactions || 
              view.current === Views.Account.Analytics ? 'active' : ''}`} 
            data-bs-toggle="dropdown" data-bs-auto-close="inside" type="button" 
            aria-expanded="false">Accounts</button>
          <ul id="dropdownMenu" className="dropdown-menu">
            <li><a className="dropdown-item disabled" onClick={() => view.set(Views.Account.Summary)}>Overview</a></li>
            <li><a className="dropdown-item" onClick={() => view.set(Views.Account.Transactions)}>Transactions</a></li>
            <li><a className="dropdown-item disabled" onClick={() => view.set(Views.Account.Analytics)}>Analytics</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => view.set(Views.Budget)}>Budget</a>
        </li>
      </ul>
    </>
  )
}
