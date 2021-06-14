import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../index.css";
import Header from "./Header/Header";
import Home from "./HomeComp/Home";
import Signup from './Signup/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
