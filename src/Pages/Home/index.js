import React from "react";
import { Switch, Route } from "react-router-dom";
import WHeader from "../../Components/Web/Header/index.component";
import WServiceCard from "../../Components/Web/Service/Card/index.component";
import Login from "../../Components/Web/Header/Login/index.component";
import Register from "../../Components/Web/Header/Register/index.component";
import Pricing from "../../Components/Web/Header/Pricing/index.component";
import CreateProduct from "../../Components/Web/Header/Create-product/index.component";

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
