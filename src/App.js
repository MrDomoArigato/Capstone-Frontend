import { useState } from 'react';

import { Views } from './enums';

import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Transactions from './components/Transactions';


function CurrentView({ view }){
  if ( view === Views.Dashboard ){
    return <Dashboard />
  } else if ( view === Views.Account.Transactions ) {
    return <Transactions />
  }
}


function App() {
  const [ currentView, setView ] = useState( Views.Dashboard );

  return (
    <>
      <Navigation setView={ setView }/>
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
