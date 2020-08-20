import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// pages
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component.jsx"

// components 
import Header from './components/header/header.component.jsx'



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path = "/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
