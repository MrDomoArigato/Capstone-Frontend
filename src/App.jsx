import { useEffect, useState } from 'react';
import { Views } from './enums';
import { getTransactionTypes } from './services/transaction';
import ProfilePage from './components/UserProfile/UserProfile';
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from './components/Navigation/Navigation';
import Transactions from './components/Transaction/Transactions';
import Header from './components/Navigation/Header';

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
  } else {
    return (
      <Dashboard />
    )
  }
}

function App() {
  const [ currentView, setView ] = useState( Views.Dashboard );
  const [ currentAccount, setCurrentAccount ] = useState();
  const [ transactionTypes, setTransactionTypes ] = useState([]);

  const getTransTypes = async () => {
    const response = await getTransactionTypes();

    if (!response) return;

    const { data: transTypes } = response;
    if (transTypes && transTypes.length) {
      setTransactionTypes(transTypes);
    }
  }

  useEffect(() => {
    getTransTypes();
  }, []);


  let state = {
    Account: {
      set: setCurrentAccount,
      current: currentAccount
    },
    View: {
      set: setView,
      current: currentView
    },
    TransactionTypes: {
      set: setTransactionTypes,
      current: transactionTypes
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
