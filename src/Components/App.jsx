import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../index.css";
import Header from "./Header/Header";
import Home from "./HomeComp/Home";
import Signup from './Signup/Signup';
import Login from './Login/Login'
import Contact from './Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
