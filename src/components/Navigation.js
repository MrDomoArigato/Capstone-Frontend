import { Views } from "../enums";
function NavigationMenu({ title }) {
  /*return (
    <>
   <nav className="navbar bg-body-tertiary">
    <div className="container-fluid1 ">
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
      </div>
    </div>
  </nav>
    </>
  ) */

return(
  <>
   <button class="btn home"><i class="fa fa-home"></i> Home</button>
  <nav class="navbar navbar-dark bg-dark fixed-left">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{ title }</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="true"href="#">Account</a>   
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Settings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Sign Out</a>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
</>
)
}
export default function Navigation({ setView, title }){
    return( /* 
    <div className="col-1 m-0 p-0">
    <button type="button" className="btn btn-outline-primary" onClick={() => setView(Views.Dashboard)}>Dashboard</button>
    </div>
    <div className="col-12 m-0 p-0">
        <button type="button" className="btn btn-outline-primary oval-button" onClick={() => setView(Views.Account.Transactions)}>Activity</button>
    </div> */
    <>
    <NavigationMenu title={title}/>
   
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <ul class="nav nav-tabs card-header-tabs">
       
      <li class="nav-item">
        <a class="nav-link active"onClick={() => setView(Views.Dashboard)}  aria-current="true" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" onClick={() => setView(Views.Account.Transactions)} aria-current="true" href="#">Active</a>
      </li>
      </ul>
    </div>
    <div class ="SearchBar ">
      <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-success" type="submit">Search</button>
      </form>
    </div>
    </nav>     
      </>
    );
}


