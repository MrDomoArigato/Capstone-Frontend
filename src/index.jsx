import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NextAuth } from './services/NextAuth';

import './index.css';

import reportWebVitals from './reportWebVitals';
//import './custom.scss';
//import './custom.css';
//import './style.css';

let OAUTH = {
  client_id: "frxiKwq3w5a1xUhZ545NaXj06VYxi0whzNOZevsD",
  response_type: "code",
  challenge_method: "S256",
  redirect_uri: window.location.origin + "/callback"
};

var next = new NextAuth(OAUTH);

if(!next.isAuthenticated()){
  next.oauthLogin();
}else{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
