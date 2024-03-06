import { Views } from "../enums";
import { useEffect } from 'react';
function NavigationMenu({ title }) {
 
  return (
    <>
    <nav class="navbar navbar-dark bg-dark fixed-left">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{ title }</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
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
  <div class ="desktop-navbar">
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Home</a>
          </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Accounts</a>
          <ul class="dropdown-menu">
             <li><a class="dropdown-item" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Overview</a></li>
              <li><a class="dropdown-item" onClick={() => setView(Views.Account.Transactions)} aria-current="true"  href="#">Transactions</a></li>
              <li><a class="dropdown-item"  onClick={() => setView(Views.Account.Analytics)} aria-current="true"  href="#">Analytics</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Budget</a>
        </li>
      </ul>
    </div>
  </nav> 
  </div>

<div class ="mobile-navbar">
  <nav class="navbar  bg-dark  navbar-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Something</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigation Menu</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
              <a class="nav-link" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Home</a>
              </li>
             
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Accounts</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Overview</a></li>
                  <li><a class="dropdown-item" onClick={() => setView(Views.Account.Transactions)} aria-current="true"  href="#">Transactions</a></li>
                  <li><a class="dropdown-item"  onClick={() => setView(Views.Account.Analytics)} aria-current="true"  href="#">Analytics</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Budget</a>
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



 
