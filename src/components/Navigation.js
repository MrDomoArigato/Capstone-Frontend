import { Views } from "../enums";
function NavigationMenu() {
  return (
    <>
  <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
    <div className="col-1 m-0 p-0">   
       
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>        
        </div>
        <button type="button" className="btn">Dashboard</button>
        <button type="button" className="btn">Accounts</button>
        <button type="button" className="btn">Activity</button>
        <button type="button" className="btn">Profile Settings</button>
        <button type="button" className="btn">Sign Out</button>
      </div>
      </div>
  </nav>
    </>
  )
}
export default function Navigation({ setView }){
    return(
    <>
    <NavigationMenu/>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="col-1 m-0 p-0">
          <button type="button" className="btn btn-outline-primary" onClick={() => setView(Views.Dashboard)}>Dashboard</button>
        </div>
        <div className="col-12 m-0 p-0">
            <button type="button" className="btn btn-outline-primary oval-button" onClick={() => setView(Views.Account.Transactions)}>Activity</button>
        </div>
      </div>
    </nav>      
    </>
    );
}

