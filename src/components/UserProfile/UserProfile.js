import { Views } from "../../enums"
import React, { useState, useEffect } from 'react';

export function ProfileView({ state }) {
  return (
    <ProfilePage view={ state.View } />
  )
}
export default function ProfilePage({ view }){
  return(
  <nav className="navbar navbar" style={containerStyle}>
    <div className="container" style={containerStyle}>
      <a className={"navbar-brand"} style={buttonStyle}
        aria-current="page" onClick={()=> view.set(Views.ProfileView)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
      </a>
    </div>
  </nav>
  )
}
const containerStyle = {
  position: 'absolute',
  top: '20px',
  right: '40px',
};

const buttonStyle = {
  backgroundColor: 'white',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  outline: 'none',
  color: 'var(--color-2)',
};