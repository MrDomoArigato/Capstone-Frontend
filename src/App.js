import { useState } from 'react';
import { Views } from './enums';
import ProfilePage from './components/UserProfile';
import Dashboard from './components/Dashboard';
import { MobileMenu } from './components/MobileNavigation';
import { DesktopMenu } from './components/DesktopNavigation';
import Navigation from './components/Navigation';
import Transactions from './components/Transactions';
import './custom.css';

function CurrentView({ view }){
  if ( view === Views.Dashboard ){
    return <Dashboard />
  } else if ( view === Views.Account.Transactions ) {
    return <Transactions />
  } else if (view === Views.ProfilePage){
    return <ProfilePage/>
  }
}


function App() {
  const [ currentView, setView ] = useState( Views.Dashboard );
//
//<DesktopMenu setView={setView} title="Desktop Menu"/>
  return (
    <>
      <Navigation setView={ setView } title={"Anything"}/>
      <CurrentView view={currentView} />
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//}

export default App;
