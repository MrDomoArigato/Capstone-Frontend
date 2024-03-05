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


export default function Navigation({ setView, title }){

    return( 
      <>
      <NavigationMenu title={title}/>
    
   
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
     <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" onClick={() => setView(Views.Dashboard)} aria-current="true" href="#">Home</a>
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
       </>
     )
 }

 
