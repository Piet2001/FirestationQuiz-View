import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Keycloak from 'keycloak-js'

let keycloak = Keycloak('./keycloak.json')

keycloak.init({ onLoad: 'login-required' }).success((authenticated) => {
  console.log(keycloak);
  console.log(authenticated);

  if (!authenticated) {
    window.location.reload();
  } else {
    console.info("Authenticated")
  }

  sessionStorage.setItem("authentication", keycloak.token);
  sessionStorage.setItem("refreshToken", keycloak.refreshToken);

  setTimeout(() => {
    keycloak.updateToken(70).success((refreshed) => {
      if (refreshed) {
        console.debug("Token refreshed" + refreshed)
      } else {
        console.warn("Token not refreshed, valid for "
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + " seconds")
      }
    }).error(() => {
      console.error("Failed to refresh token");
    });

  }, 6000)

}).error(() => {
  console.error("Authenticated Failed")
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
