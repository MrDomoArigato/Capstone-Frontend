import { Views } from "../../enums"
import { useState } from 'react';
import './UserProfile.css';

export function ProfileView({ state }) {
  return (
    <ProfilePage view={ state.View } />
  )
}
export function UserProfile({ state }){
  return(
  <>
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card text-center non-clickable">
        <div className="card-body profile-card">
          <h5 className="card-title profile-title">Hey there, {state.User.current.preferred_username}!</h5>
          <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="var(--color-2)" className="bi bi-person-square" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
          </svg>
          <div className="col-auto">
            <label htmlFor="userName" className="col-form-label">Username:</label>
          </div>
          <div className="col-auto card-text d-flex justify-content-center">
            <input type="name" id="prefered-username" className="form-control custom-textbox" 
            aria-describedby="nameInline" placeholder={state.User.current.preferred_username} disabled
            style={{ backgroundColor: 'var(--color-5)', textAlign: "center", width: "300px"}}/>
          </div>
          <div className="col-auto mx auto">
            <label htmlFor="userEmail" className="col-form-label">Email:</label>
          </div>
          <div className="col-auto card-text d-flex justify-content-center">
            <input type="email" id="accountEmail" className="form-control custom-textbox" 
            aria-describedby="emailInline" placeholder={state.User.current.email} readOnly 
            style={{ backgroundColor: 'var(--color-5)', textAlign: "center", width: "300px" }}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}
export default function ProfilePage({ view }){
  return(
  <>
  <nav className="navbar navbar container-style">
    <div className="container container-style">
      <a className="navbar-brand profile-icon"
        aria-current="page" onClick={()=> view.set(Views.ProfileView)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
      </a>
      <a className="navbar-brand sign-out-icon" onClick={()=>{localStorage.clear(); window.location.href = "https://sso.ynlueke.com/application/o/capstone/end-session/"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 512 512">
        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
      </svg>
      </a>
    </div>
  </nav>
  </>
  )
}
