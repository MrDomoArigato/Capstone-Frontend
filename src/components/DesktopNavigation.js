import { Views } from "../enums";
export function DesktopMenu({ setView, title }) {
    return(
        <>
<div className ="desktop-navbar">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
 <div className="container-fluid">
 <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
</button>






   <ul className="nav nav-tabs">
     <li className="nav-item">
       <a className="nav-link active" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Home</a>
       </li>
     <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Accounts</a>
       <ul className="dropdown-menu">
          <li><a className="dropdown-item" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Overview</a></li>
           <li><a className="dropdown-item" onClick={() => setView(Views.Account.Transactions)} aria-current="true"  href="#">Transactions</a></li>
           <li><a className="dropdown-item"  onClick={() => setView(Views.Account.Analytics)} aria-current="true"  href="#">Analytics</a></li>
       </ul>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="#">Budget</a>
     </li>
   </ul>
 </div>
</nav> 
</div>
        </>
    )
}
