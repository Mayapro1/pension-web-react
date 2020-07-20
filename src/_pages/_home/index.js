import React from "react";
import { BrowserRouter as Router,Switch,Route, } from "react-router-dom";
import WHeader from "../../_components/_web/_header/index.component";
import WServiceCard from "../../_components/_web/Service/_card/index.component";
import Login from "../_auth/login";
import Register from "../_auth/register";
import Pricing from "../_home/_pricing/index.component";
import Recover from '../_auth/recover'
import PrivateRoute from "../../_utils/requireAuth";

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path="/">
            <WHeader />
            <WServiceCard />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <PrivateRoute   path="/recover" component={Recover}/>
          <PrivateRoute   path="/dashboard" component={Recover}/>

          <Route exact path="/pricing">
            <Pricing />
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
