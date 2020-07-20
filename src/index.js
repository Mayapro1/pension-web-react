// React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./_reducers/store";
import "./index.css";
import App from "./_pages/Home/index";
import * as serviceWorker from "./serviceWorker";
import { setCurrentUser } from "./_actions/auth.actions";
import jwt from 'jsonwebtoken';
import setAuthorizationToken from "./_utils/setAuthorizationToken";

const store = Store();

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.getItem('jwtToken'));
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
