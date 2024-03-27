import { useEffect, useState, useCallback } from 'react';
import { Views } from './enums';
import ProfilePage from './components/UserProfile';
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from './components/Navigation/Navigation';
import Transactions from './components/Transaction/Transactions';
import Header from './components/Navigation/Header';
import { oauthRedirect } from './services/NextAuth';

//import './custom.css';

let OAUTH = {
  client_id: "Fxyh2NIyR4jq10acBSTCjooQUDrcriqLpR5K4Yra",
  client_secret: "eRXtbQ0vdxQhksm8GN2WURIBEYwYrnJsa1wjW0yoCmnppxW2w4o1zfKtMjvF5VJFoZvjMtkMZyFfbMbFjFUZQCqMBvFQIKh0TJ6ahYm3IDXQ6MjigxUTNkzK1Ff6QL1L",
  response_type: "code",
  response_mode: "query",
  challenge_method: "S256",
  redirect_uri: window.location.origin + "/callback"
};

function CurrentView({ state }){
  if ( state.View.current === Views.Dashboard ){
    //
    return (
      <Dashboard state={ state } />
    )
  } else if ( state.View.current === Views.Account.Transactions ) {
    //state.Title.set(state.Account.current.accountName);
    return (
      <Transactions state={ state }/>
    )
  } else if ( state.View.current === Views.ProfilePage ){
    //state.Title.set("Profile");
    return (
      <ProfilePage />
    )
  } else {
    return (
      <Dashboard />
    )
  }
}

function App() {
  const [ currentView, setView ] = useState( Views.Dashboard );
  const [ currentAccount, setCurrentAccount ] = useState();
  let state = {
    Account: {
      set: setCurrentAccount,
      current: currentAccount
    },
    View: {
      set: setView,
      current: currentView
    }
  };
  
  oauthRedirect(OAUTH);

  return (
    <>
      <Header state={ state } />
      <Navigation state={ state } />
      <div>
        <CurrentView state={ state } />
      </div>
    </>
  );
//
//<DesktopMenu setView={setView} title="Desktop Menu"/>
}

export default App;
