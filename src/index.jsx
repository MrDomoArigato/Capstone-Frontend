import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { oauthRedirect } from './services/NextAuth';

import './index.css';

import reportWebVitals from './reportWebVitals';
//import './custom.scss';
//import './custom.css';
//import './style.css';

let OAUTH = {
  client_id: "Fxyh2NIyR4jq10acBSTCjooQUDrcriqLpR5K4Yra",
  client_secret: "eRXtbQ0vdxQhksm8GN2WURIBEYwYrnJsa1wjW0yoCmnppxW2w4o1zfKtMjvF5VJFoZvjMtkMZyFfbMbFjFUZQCqMBvFQIKh0TJ6ahYm3IDXQ6MjigxUTNkzK1Ff6QL1L",
  response_type: "code",
  response_mode: "query",
  challenge_method: "S256",
  redirect_uri: window.location.origin + "/callback"
};

const [ isAuthenicated, setAuthenticated ] = useState(false);

if (!isAuthenicated)
  oauthRedirect()
else {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
