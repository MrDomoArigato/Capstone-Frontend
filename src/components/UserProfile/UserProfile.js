import { color } from "chart.js/helpers";
import { Views } from "../../enums"
import './UserProfile.css';

export function ProfileView({ state }) {
  return (
    <ProfilePage view={ state.View } />
  )
}
export function UserProfile(){
  return(
  <>
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card text-center non-clickable">
        <div className="card-body">
          <h5 className="card-title profile-title">Hey there!</h5>
          <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="var(--color-2)" class="bi bi-person-square" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
          </svg>
          <div className="col-auto">
            <label for="userName" className="col-form-label">Full Name:</label>
          </div>
          <div className="col-auto card-text d-flex justify-content-center">
            <input type="name" id="accountOwner" className="form-control custom-textbox" 
            aria-describedby="nameInline" placeholder="John Smith" disabled
            style={{ backgroundColor: 'var(--color-1)', width: "300px", color: 'white' }}/>
          </div>
          <div className="col-auto mx auto">
            <label for="userEmail" className="col-form-label">Email:</label>
          </div>
          <div className="col-auto card-text d-flex justify-content-center">
            <input type="email" id="accountEmail" className="form-control custom-textbox" 
            aria-describedby="emailInline" placeholder="username@email.com" disabled 
            style={{ backgroundColor: 'var(--color-1)', width: "300px", color: 'white' }}/>
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
    </div>
  </nav>
  <UserProfile></UserProfile>
  </>
  )
}