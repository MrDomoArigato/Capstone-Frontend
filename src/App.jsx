import { useEffect, useState } from 'react';
import { Views } from './enums';
import ProfilePage from './components/UserProfile';
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from './components/Navigation/Navigation';
import Transactions from './components/Transaction/Transactions';
import Header from './components/Navigation/Header';
import Budget from './components/Budget/Budget';
import Overview from './components/Overview/OverviewPage';

//import './custom.css';

//import './custom.scss';
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
  }else if ( state.View.current === Views.Budget ) {
    //state.Title.set(state.Account.current.accountName);
    return (
      <Budget/>
    )
  }else if ( state.View.current === Views.Overview ) {
    //state.Title.set(state.Account.current.accountName);
    return (
      <Overview/>
    )
  }
  else {
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
