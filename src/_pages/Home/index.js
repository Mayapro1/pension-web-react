import React from "react";
import { Switch, Route } from "react-router-dom";
import WHeader from "../../_components/Web/Header/index.component";
import WServiceCard from "../../_components/Web/Service/Card/index.component";
import Login from "../_auth/login";
import Register from "../_auth/register";
import Pricing from "../Pricing/index.component";
import CreateProduct from "../Create-product/index.component";
import Recover from '../_auth/recover'

function App() {
  return (
    <div>
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

        <Route exact path="/recover">
          <Recover />
        </Route>

        <Route exact path="/pricing">
          <Pricing />
        </Route>

        <Route exact path="/product">
          <CreateProduct />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
