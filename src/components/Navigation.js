import { Views } from "../enums";
import { useEffect } from 'react';
function NavigationMenu({ title }) {
 
  return (
    <>
    <nav className="navbar navbar-dark bg-dark fixed-left">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{ title }</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      </nav>
    </>
  )
  }


  //Desktop navigation 
export default function Navigation({ setView, title }){
//<NavigationMenu title={title}/>

    return( 
      <>
       <h1>Something</h1>
  <div className ="desktop-navbar">
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
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

<div className ="mobile-navbar">
  <nav className="navbar  bg-dark  navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Something</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
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
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
    </div>
  </>
    )
 }



 
