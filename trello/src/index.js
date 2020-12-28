import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import "antd/dist/antd.css"

ReactDOM.render(
  <Auth0Provider
    domain="dev-4yd2ovr5.auth0.com"
    clientId="64GHOyDd5iGEu7XYFbjZNPpfhics1TJ3"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);