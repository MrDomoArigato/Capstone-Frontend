import { useEffect, useState } from 'react';
import { Views } from './enums';
import { getTransactionTypes } from './services/transaction';
import { getCurrentUser } from './services/NextAuth';
import { UserProfile } from './components/UserProfile/UserProfile';
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from './components/Navigation/Navigation';
import Transactions from './components/Transaction/Transactions';
import Header from './components/Navigation/Header';
import { BudgetCard } from './components/Budget/Budget';
import Overview from './components/Overview/OverviewPage';

function CurrentView({ state }){
  if ( state.View.current === Views.Dashboard ){
    return (
      <Dashboard state={ state } />
    )
  } else if ( state.View.current === Views.Account.Overview ) {
    return (
      <Overview />
    )
  } else if ( state.View.current === Views.Account.Transactions ) {
    return (
      <Transactions state={ state }/>
    )
  } else if ( state.View.current === Views.ProfileView ){
    return (
      <UserProfile state={ state } />
    )
  }else if ( state.View.current === Views.Budget ) {
    return (
      <BudgetCard state={ state }/>
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
  const [ currentUser, setCurrentUser ] = useState({});
  const [ transactionTypes, setTransactionTypes ] = useState([]);

  const getRequests = async () => {
    const user = await getCurrentUser();
    const response = await getTransactionTypes();

    const { data: transTypes } = response;
    if (transTypes && transTypes.length)
      setTransactionTypes(transTypes);


    const { data: userinfo } = user;
    if( userinfo )
      setCurrentUser(userinfo);
    
  }

  useEffect(() => {
    getRequests();
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
    },
    User: {
      current: currentUser
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
